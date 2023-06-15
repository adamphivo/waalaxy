import assert from "assert";
import FifoQueue from ".";

describe("fifoQueue class tests suite", () => {
  const queue = new FifoQueue<number>();

  it("should adds an item", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    assert.deepStrictEqual(queue.getQueue(), [1, 2, 3]);
  });
  it("should removes an item", () => {
    queue.dequeue();
    assert.deepStrictEqual(queue.getQueue(), [2, 3]);
  });
  it("should returns queue length", () => {
    assert.deepStrictEqual(queue.size(), 2);
  });
  it("should handles empty queue", () => {
    queue.clear();
    assert.deepStrictEqual(queue.size(), 0);
    assert.deepStrictEqual(queue.isEmpty(), true);
  });
});
