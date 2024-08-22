/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { Application, ApplicationBuilder, ServiceProvider } from "@n7e/framework";

/**
 * Provides asynchronous styles.
 */
class StyleProvider implements ServiceProvider {
    /** {@inheritDoc} */
    public async configure(_: ApplicationBuilder): Promise<void> {}

    /** {@inheritDoc} */
    public async load(application: Application): Promise<void> {
        const document = application.resolve<Window>("browsingContext").document;
        const stylesheets = document.getElementById("stylesheets")?.textContent;

        if (!stylesheets) {
            return;
        }

        const stylesheetsTemplate = document.createElement("template");

        stylesheetsTemplate.innerHTML = stylesheets;

        document.head.append(stylesheetsTemplate.content);
    }
}

export default StyleProvider;
