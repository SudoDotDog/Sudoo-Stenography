/**
 * @author WMXPY
 * @namespace Story
 * @description Template
 */

import { EASTER_EGG_NAME, StenographyConfig, StenographyInterceptor } from "../src";

const config: StenographyConfig = StenographyConfig.create();

config.add(
    StenographyInterceptor
        .when('=')
        .setName('Plus')
        .setDescription('Log +')
        .then(() => console.log('+')),
);
config.add(
    StenographyInterceptor
        .when('shift+plus')
        .setName('Plus Combo')
        .setDescription('Log shift+plus')
        .then(() => console.log('shift+plus')),
);
config.add(
    StenographyInterceptor
        .when('space')
        .setDescription('Space')
        .then(() => console.log('space')),
);
config.add(
    StenographyInterceptor
        .when('a')
        .setDescription('Log a')
        .then(() => console.log('a')),
);
config.add(
    StenographyInterceptor
        .when('ctrl+s')
        .setName('Example Save')
        .then(() => console.log('ctrl+s')),
);
config.add(
    StenographyInterceptor
        .when('alt+b')
        .setDescription('Log alt+b')
        .then(() => console.log('alt+b')),
);
config.add(
    StenographyInterceptor
        .when('ctrl+alt+b')
        .setName('Multi')
        .setDescription('Log ctrl+alt+b')
        .then(() => console.log('ctrl+alt+b')),
);
config.add(
    StenographyInterceptor
        .when('g', 'ctrl+d')
        .setName('Example Combo')
        .setDescription('Log g then d')
        .then(() => console.log('g then d')),
);
config.add(
    StenographyInterceptor
        .when('shift+c')
        .then(() => console.log('shift+c')),
);
config.add(
    StenographyInterceptor
        .whenEasterEgg(EASTER_EGG_NAME.CONTRA)
        .setDescription('Log WOW')
        .then(() => console.log('WOW')),
);

export { config };

