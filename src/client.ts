import { Pool, PoolConfig } from 'pg';
import { Worker, WorkerOptions } from './worker';
import { Queue, QueueOptions } from './queue';

export interface ClientConfig<
  TSchema extends Record<string, unknown> = Record<string, unknown>,
> extends PoolConfig {
  schema?: TSchema;
}

export class Client<
  TSchema extends Record<string, unknown> = Record<string, unknown>,
> {
  private pool: Pool;
  private migrationPromise: Promise<void>;

  constructor(config: ClientConfig<TSchema>) {
    this.pool = new Pool(config);
    this.migrationPromise = this.migrate();
  }

  async createWorker<K extends keyof TSchema>(
    queueName: K,
    options?: WorkerOptions,
  ): Promise<Worker<TSchema[K]>> {
    await this.migrationPromise;
    return new Worker(this.pool, queueName as string, options);
  }

  async createQueue<K extends keyof TSchema>(
    name: K,
    options?: QueueOptions,
  ): Promise<Queue<TSchema[K]>> {
    await this.migrationPromise;
    return new Queue(this.pool, name as string, options);
  }

  async close(): Promise<void> {
    await this.pool.end();
  }

  async migrate(): Promise<void> {
    // Database migration implementation will be added here
  }
}

