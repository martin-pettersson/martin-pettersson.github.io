/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Application, ApplicationBuilder, DelegateApplicationBuilder, ServiceProvider } from "@n7e/framework";

/**
 * Provides an application delegate.
 */
class ApplicationDelegateProvider implements ServiceProvider {
    /** {@inheritDoc} */
    public async configure(applicationBuilder: ApplicationBuilder): Promise<void> {
        if (!(applicationBuilder instanceof DelegateApplicationBuilder)) {
            return;
        }

        applicationBuilder.useDelegate(() => Promise.resolve());
    }

    /** {@inheritDoc} */
    public async load(_: Application): Promise<void> {}
}

export default ApplicationDelegateProvider;
