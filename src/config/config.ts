/**
 * @author WMXPY
 * @namespace Config
 * @description Config
 */

import { compareArray } from "../util";
import { InterceptorStructure } from "./declare";
import { StenographyInterceptor } from "./interceptor";

export class StenographyConfig {

    public static withStructures(structures: InterceptorStructure[]) {

        const config: StenographyConfig = new StenographyConfig();
        for (const structure of structures) {
            config.add(StenographyInterceptor.with(structure));
        }
        return config;
    }

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

    public getVisibleInterceptors(): StenographyInterceptor[] {

        return this._interceptors.filter((interceptor: StenographyInterceptor) => !interceptor.isHidden);
    }

    public match(combos: string[]): StenographyInterceptor | null {

        const length: number = combos.length;
        for (let i = 0; i < length; i++) {

            const slice: string[] = combos.slice(i, length);
            for (const interceptor of this._interceptors) {
                if (compareArray(slice, interceptor.combos)) {
                    return interceptor;
                }
            }
        }
        return null;
    }
}
