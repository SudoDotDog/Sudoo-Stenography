/**
 * @author WMXPY
 * @namespace Config
 * @description Interceptor
 */

import { InterceptorCallback, InterceptorStructure } from "./declare";
import { EASTER_EGG_NAME, stenographyEasterEgg } from "./egg";

export class StenographyInterceptor {

    public static with(structure: InterceptorStructure): StenographyInterceptor {

        const interceptor: StenographyInterceptor = new StenographyInterceptor(structure.combos, structure.hidden || false);
        if (structure.name) {
            interceptor.setName(structure.name);
        }
        if (structure.description) {
            interceptor.setDescription(structure.description);
        }
        interceptor.then(structure.callback);

        return interceptor;
    }

    public static when(...combos: string[]): StenographyInterceptor {

        return new StenographyInterceptor(combos, false);
    }

    public static whenEasterEgg(name: EASTER_EGG_NAME) {

        return new StenographyInterceptor(stenographyEasterEgg[name], true);
    }

    private readonly _combos: string[];

    private _name?: string;
    private _description?: string;
    private _hidden: boolean;

    private _callback: InterceptorCallback | null = null;

    private constructor(combos: string[], hidden: boolean) {

        this._combos = combos;

        if (combos.length < 1) {
            throw new Error('Combo cannot be empty');
        }

        for (const combo of combos) {
            if (combo.includes('**')) {
                throw new Error('Symbol "**" is restricted for key combination');
            }
        }

        this._hidden = hidden;
    }

    public get combos(): string[] {

        return this._combos;
    }

    public get name(): string | undefined {

        return this._name;
    }

    public get description(): string | undefined {

        return this._description;
    }

    public get isHidden(): boolean {

        return this._hidden;
    }

    public show(): this {

        this._hidden = false;
        return this;
    }

    public hide(): this {

        this._hidden = true;
        return this;
    }

    public setName(name: string): this {

        this._name = name;
        return this;
    }

    public setDescription(description: string): this {

        this._description = description;
        return this;
    }

    public then(callback: InterceptorCallback): this {

        this._callback = callback;
        return this;
    }

    public execute(combos?: string[]): void {

        if (this._callback && typeof this._callback === 'function') {
            this._callback(combos || this._combos);
        }
    }
}
