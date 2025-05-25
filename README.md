# type-bg

A TypeScript-native PostgreSQL-backed background job framework written entirely in TypeScript.

## ⚠️ Early Development Warning

This project is in **very early development** and is **not ready for any production use**. The API is unstable and will change frequently. Use at your own risk.

## Overview

type-bg provides a type-safe way to handle background jobs using PostgreSQL as the queue backend. It leverages TypeScript's type system to ensure queue names and job payloads are type-safe at compile time.

## Core Tenets

1. **End-to-end type safety**: Queue names, job payloads, and worker handlers are fully typed from definition to execution
2. **Standard PostgreSQL**: Works with any standard PostgreSQL instance - no extensions, plugins, or additional infrastructure required
3. **Minimal abstractions**: Simple, straightforward API that doesn't hide the underlying database operations
4. **Easily auditable**: All job data lives in PostgreSQL tables, making it easy to query, monitor, and debug your background jobs

## Features

- **Type-safe**: Queue names and payloads are fully typed
- **PostgreSQL-backed**: Uses PostgreSQL for reliable job storage
- **TypeScript-native**: Written entirely in TypeScript with first-class type support
- **Simple API**: Clean, intuitive interface for creating workers and queues

## Quick Start

```typescript
import { Client } from 'type-bg';

// Define your job schema
interface JobSchema {
  'email-queue': { to: string; subject: string; body: string };
  'image-processing': { imageUrl: string; filters: string[] };
}

// Create a client
const client = new Client<JobSchema>({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  user: 'postgres',
  password: 'postgres'
});

// Create type-safe queues and workers
const emailQueue = await client.createQueue('email-queue');
const emailWorker = await client.createWorker('email-queue');

// Add jobs with type safety
await emailQueue.add({
  to: 'user@example.com',
  subject: 'Welcome!',
  body: 'Thanks for signing up'
});
```

## Development

This project uses pnpm for package management:

```bash
pnpm install
pnpm build
pnpm test
pnpm lint
```

## License

MIT
