/**
 * @author WMXPY
 * @namespace Story
 * @description Template
 */

import { EASTER_EGG_NAME, StenographyConfig, StenographyInterceptor } from "../src";

const config: StenographyConfig = StenographyConfig.create();

config.add(
    StenographyInterceptor
        .when('a')
        .setDescription('Log a')
        .then(() => console.log('a')),
);
config.add(
    StenographyInterceptor
        .when('ctrl+s')
        .setDescription('Log ctrl+s')
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
        .when('shift+c')
        .setDescription('Log shift+c')
        .then(() => console.log('shift+c')),
);
config.add(
    StenographyInterceptor
        .whenEasterEgg(EASTER_EGG_NAME.CONTRA)
        .setDescription('Log WOW')
        .then(() => console.log('WOW')),
);

export { config };

