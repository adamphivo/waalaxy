class FifoQueue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: T): void {
    this.queue.push(item);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }

  clear(): void {
    this.queue = [];
  }

  getQueue(): T[] {
    return this.queue;
  }
}

export default FifoQueue;
