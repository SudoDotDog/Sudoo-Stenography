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

    public addable(interceptor: StenographyInterceptor): boolean {

        const combos: string[] = interceptor.combos;
        for (const current of this._interceptors) {

            const length: number = current.combos.length;
            let currentPoint: number | null = null;
            combo: for (let i = 0; i < length; i++) {

                if (currentPoint === null) {
                    console.log(current.combos[i], combos[0]);
                    if (current.combos[i] === combos[0]) {
                        console.log('set', current.combos, i);
                        if (!current.combos[i + 1] && (!combos[1] || i === 0)) {
                            return false;
                        }
                        currentPoint = 1;
                    }
                } else {
                    console.log(current.combos[i], combos[currentPoint]);
                    const currentCombo: string | undefined = combos[currentPoint];
                    if (!currentCombo) {
                        break combo;
                    }
                    if (currentCombo === current.combos[i]) {
                        console.log('new', current.combos[i + 1]);
                        if (!current.combos[i + 1] && !combos[currentPoint + 1]) {
                            return false;
                        }
                        currentPoint++;
                    } else {
                        break combo;
                    }
                }
            }
            console.log(currentPoint, combos.length);
            if (currentPoint !== null && currentPoint === combos.length) {
                return false;
            }
        }
        return true;
    }
}
