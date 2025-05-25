import { expect, test } from 'vitest';
import { Client, Worker, Queue } from '../src/index';

type TestSchema = {
  'email-queue': { to: string; subject: string; body: string };
  'image-processing': { imageUrl: string; filters: string[] };
};

test('Client creates Worker and Queue instances', async () => {
  const client = new Client<TestSchema>({
    host: 'localhost',
    port: 5432,
    database: 'type_bg_test',
    user: 'postgres',
    password: 'postgres',
  });

  const worker = await client.createWorker('email-queue');
  const queue = await client.createQueue('email-queue');

  expect(worker).toBeInstanceOf(Worker);
  expect(queue).toBeInstanceOf(Queue);
  expect(worker.running).toBe(false);
});
