import type { Logger } from './logger'
import { createLogger } from './logger'

export abstract class Loggable {
    protected readonly entityName?: string
    protected readonly logger: Logger

    constructor() {
        this.logger = createLogger(this.entityName ? { tenantId: this.entityName } : {})
    }
}