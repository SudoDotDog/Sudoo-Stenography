/**
 * @author WMXPY
 * @namespace Stenography
 * @description Config
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { StenographyConfig } from "../../src/config/config";
import { StenographyInterceptor } from "../../src/config/interceptor";

describe('Given {Config} class', (): void => {

    const chance: Chance.Chance = new Chance('stenography-config');

    const a: string = chance.name();
    const b: string = chance.name();
    const c: string = chance.name();
    const d: string = chance.name();
    const e: string = chance.name();
    const f: string = chance.name();

    it('should be able to calculate addable - simple', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a));

        const target: StenographyInterceptor = StenographyInterceptor.when(a);

        expect(config.addable(target)).to.be.false;
    });

    it('should be able to calculate addable - happy path', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a, b));

        const target: StenographyInterceptor = StenographyInterceptor.when(b, b);

        expect(config.addable(target)).to.be.true;
    });

    it('should be able to calculate addable - subarray', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a, b, c, d));

        const target: StenographyInterceptor = StenographyInterceptor.when(b, c);

        expect(config.addable(target)).to.be.false;
    });

    it('should be able to calculate addable - multiple simple', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a, b, c, d));
        config.add(StenographyInterceptor.when(c, d, e));

        const target: StenographyInterceptor = StenographyInterceptor.when(a, c);

        expect(config.addable(target)).to.be.true;
    });

    it('should be able to calculate addable - multiple subarray', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a, b, c, d));
        config.add(StenographyInterceptor.when(f));
        config.add(StenographyInterceptor.when(c, d, e));
        config.add(StenographyInterceptor.when(a, e, e, c));

        const target1: StenographyInterceptor = StenographyInterceptor.when(e, e);
        const target2: StenographyInterceptor = StenographyInterceptor.when(a, e);
        const target3: StenographyInterceptor = StenographyInterceptor.when(f);
        const target4: StenographyInterceptor = StenographyInterceptor.when(c, b);

        expect(config.addable(target1)).to.be.false;
        expect(config.addable(target2)).to.be.false;
        expect(config.addable(target3)).to.be.false;
        expect(config.addable(target4)).to.be.true;
    });

    it('should be able to calculate addable - overflow', (): void => {

        const config: StenographyConfig = StenographyConfig.create();
        config.add(StenographyInterceptor.when(a, b, c, d));
        config.add(StenographyInterceptor.when(f));
        config.add(StenographyInterceptor.when(c, d, e));
        config.add(StenographyInterceptor.when(a, e, e, c));

        const target1: StenographyInterceptor = StenographyInterceptor.when(c, f, e);

        expect(config.addable(target1)).to.be.false;
    });
});
