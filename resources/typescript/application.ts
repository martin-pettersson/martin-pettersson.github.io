/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
    ApplicationDelegateProvider,
    ConfigurationProvider,
    SceneProvider,
    StyleProvider
} from "martin-pettersson.github.io/service-providers";
import { DelegateApplicationBuilder } from "@n7e/framework";

new DelegateApplicationBuilder()
    .use(new ApplicationDelegateProvider())
    .use(new ConfigurationProvider())
    .use(new StyleProvider())
    .use(new SceneProvider())
    .register("browsingContext", () => window)
    .build()
    .then(application => application.run());
