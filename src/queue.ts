import { Pool } from 'pg';

export interface Job<TPayload = unknown> {
  id: string;
  data: TPayload;
  createdAt: Date;
  scheduledAt?: Date;
}

export interface QueueOptions {
  retryLimit?: number;
  retryDelay?: number;
}

export class Queue<TPayload = unknown> {
  private pool: Pool;
  private name: string;
  private retryLimit: number;
  private retryDelay: number;

  constructor(pool: Pool, name: string, options: QueueOptions = {}) {
    this.pool = pool;
    this.name = name;
    this.retryLimit = options.retryLimit ?? 3;
    this.retryDelay = options.retryDelay ?? 1000;
  }

  async add(data: TPayload, scheduledAt?: Date): Promise<Job<TPayload>> {
    // Queue implementation will be added here
    const job: Job<TPayload> = {
      id: crypto.randomUUID(),
      data,
      createdAt: new Date(),
      scheduledAt
    };
    return job;
  }

  async getJob(): Promise<Job<TPayload> | null> {
    // Job retrieval implementation will be added here
    return null;
  }

  async completeJob(): Promise<void> {
    // Job completion implementation will be added here
  }

  async failJob(): Promise<void> {
    // Job failure implementation will be added here
  }
}