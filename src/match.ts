/**
 * @author WMXPY
 * @namespace Stenography
 * @description Match
 */

import { Interceptor } from "./declare";
import { compareArray } from "./util";

export class Matcher {

    public static create() {

        return new Matcher();
    }

    private readonly _interceptors: Interceptor[];

    private constructor() {

        this._interceptors = [];
    }

    public listen(combo: string[], callback: () => void): this {

        this._interceptors.push({
            combo,
            callback,
        });
        return this;
    }

    public match(combo: string[]): Interceptor | null {

        const length: number = combo.length;
        for (let i = 0; i < length; i++) {

            const slice: string[] = combo.slice(i, length);
            for (const interceptor of this._interceptors) {
                if (compareArray(slice, interceptor.combo)) {
                    return interceptor;
                }
            }
        }

        return null;
    }
}
