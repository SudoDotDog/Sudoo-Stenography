/**
 * @author WMXPY
 * @namespace Components
 * @description Keyboard
 */

import { Classes } from "jss";
import * as React from "react";
import { KeyboardStyle } from "../style/keyboard";

export type KeyboardKeyProps = {

    readonly children?: any;
};

export const KeyboardKey: React.FC<KeyboardKeyProps> = React.memo((props: KeyboardKeyProps) => {

    const style: Classes = KeyboardStyle.use();

    return (<div className={style.key}>
        {props.children}
    </div>);
});
