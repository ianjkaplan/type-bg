import { Pool } from 'pg';

export interface WorkerOptions {
  concurrency?: number;
  pollInterval?: number;
}

export class Worker<TPayload = unknown> {
  private pool: Pool;
  private queueName: string;
  private concurrency: number;
  private pollInterval: number;
  private isRunning = false;
  private _payloadType?: TPayload;

  constructor(pool: Pool, queueName: string, options: WorkerOptions = {}) {
    this.pool = pool;
    this.queueName = queueName;
    this.concurrency = options.concurrency ?? 1;
    this.pollInterval = options.pollInterval ?? 1000;
  }

  async start(): Promise<void> {
    this.isRunning = true;
    // Worker implementation will be added here
  }

  async stop(): Promise<void> {
    this.isRunning = false;
  }

  get running(): boolean {
    return this.isRunning;
  }
}