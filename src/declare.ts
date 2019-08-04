/**
 * @author WMXPY
 * @namespace Stenography
 * @description Declare
 */

export type Interceptor = {

    readonly combo: string[];
    readonly callback: (combo: string[]) => void;
};
