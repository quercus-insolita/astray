import type { Logger } from './logger'
import { createLogger } from './logger'

export abstract class Loggable {
    protected readonly logger: Logger

    constructor(entityName?: string) {
        this.logger = createLogger(entityName ? { tenantId: entityName } : {})
    }
}