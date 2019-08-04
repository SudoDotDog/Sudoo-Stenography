/**
 * @author WMXPY
 * @namespace Stenography
 * @description Stenography
 */

export class Stenography {

    public static register(): Stenography {

        if (!this._instance) {
            this._instance = new Stenography();
        }

        this._instance.mount();
        return this._instance;
    }

    private static _instance: Stenography | null;

    private constructor() {

        this._listener = this._listener.bind(this);
    }

    public mount(): this {

        document.addEventListener('keydown', this._listener);
        return this;
    }

    public unmount(): this {

        document.removeEventListener('keydown', this._listener);
        return this;
    }

    private _listener(event: KeyboardEvent): void {

        event.preventDefault();
        event.stopPropagation();
        console.log(event);
    }
}
