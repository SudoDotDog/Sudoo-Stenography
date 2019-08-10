/**
 * @author WMXPY
 * @namespace Config
 * @description Config
 */

import { compareArray } from "../util";
import { StenographyInterceptor } from "./interceptor";

export class StenographyConfig {

    public static create(): StenographyConfig {

        return new StenographyConfig();
    }

    private readonly _interceptors: StenographyInterceptor[];

    private constructor() {

        this._interceptors = [];
    }

    public get interceptors(): StenographyInterceptor[] {

        return this._interceptors;
    }

    public get length(): number {

        return this._interceptors.length;
    }

    public add(interceptor: StenographyInterceptor): this {

        this._interceptors.push(interceptor);
        return this;
    }

    public match(combo: string[]): StenographyInterceptor | null {

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
