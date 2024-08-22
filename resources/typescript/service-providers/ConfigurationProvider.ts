/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { DefaultConfigurationBuilder, ObjectConfigurationSource } from "@n7e/configuration";
import type { Application, ApplicationBuilder, ServiceProvider } from "@n7e/framework";

/**
 * Provides application configuration.
 */
class ConfigurationProvider implements ServiceProvider {
    /** {@inheritDoc} */
    public async configure(applicationBuilder: ApplicationBuilder): Promise<void> {
        const configuration = await new DefaultConfigurationBuilder()
            .addConfigurationSource(new ObjectConfigurationSource({
                // TODO Import JSON modules from `configuration/**/*.json` and
                //      construct application configuration object.
            }))
            .build();

        applicationBuilder.register("configuration", () => configuration);
    }

    /** {@inheritDoc} */
    public async load(_: Application): Promise<void> {}
}

export default ConfigurationProvider;
