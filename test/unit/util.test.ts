/**
 * @author WMXPY
 * @namespace Stenography
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { isLetter } from "../../src/util";

describe('Given [util] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('stenography-util');

    it('should be able to detect if its letter', (): void => {

        const key: string = chance.string();

        const result: boolean = isLetter(key);

        // tslint:disable-next-line
        expect(result).to.be.true;
    });
});
