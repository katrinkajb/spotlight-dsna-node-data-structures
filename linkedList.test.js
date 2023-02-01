const { LinkedList } = require("./linkedList");

describe("LinkedListNode class", () => {
  it("removeTail should remove the last element from the list", () => {
    const list = new LinkedList("A");
    list.add("B");
    list.add("C");
    list.add("D");
    list.removeTail();
    expect(list.getList()).toEqual(["A", "B", "C"]);
  });
  it("removeTail should remove the last element from the list", () => {
    const list = new LinkedList("A");
    list.removeTail();
    expect(list.getList()).toEqual([]);
    expect(list.head).toBeNull();
  });
});
