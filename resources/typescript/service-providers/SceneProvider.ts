/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { Application, ApplicationBuilder, ServiceProvider } from "@n7e/framework";

/**
 * Provides an interactive 3D scene.
 */
class SceneProvider implements ServiceProvider {
    /** {@inheritDoc} */
    public async configure(_: ApplicationBuilder): Promise<void> {}

    /** {@inheritDoc} */
    public async load(_: Application): Promise<void> {}
}

export default SceneProvider;
