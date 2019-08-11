/**
 * @author WMXPY
 * @namespace Stenography
 * @description Interceptor
 * @override Unit Test
 */

import { Sandbox } from "@sudoo/mock";
import { expect } from "chai";
import { StenographyInterceptor } from "../../src/config/interceptor";

describe('Given {Interceptor} class', (): void => {

    it('should be able to create instance', (): void => {

        const interceptor: StenographyInterceptor = StenographyInterceptor.with({
            combos: ['a'],
            callback: Sandbox.stub(),
        });

        expect(interceptor).to.be.instanceOf(StenographyInterceptor);
    });

    it('should be able to throw when not valid - 1', (): void => {

        const func = () => {
            StenographyInterceptor.with({
                combos: [],
                callback: Sandbox.stub(),
            });
        };

        expect(func).to.be.throw('Combo cannot be empty');
    });

    it('should be able to throw when not valid - 2', (): void => {

        const func = () => {
            StenographyInterceptor.with({
                combos: ['a', '**b'],
                callback: Sandbox.stub(),
            });
        };

        expect(func).to.be.throw('"**" is restricted for key combination');
    });

    it('should be able to throw when not valid - 3', (): void => {

        const func = () => {
            StenographyInterceptor.with({
                combos: ['a', '***b'],
                callback: Sandbox.stub(),
            });
        };

        expect(func).to.be.throw('"**" is restricted for key combination');
    });
});
