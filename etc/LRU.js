// LRU cache 교체 알고리즘 구현 (has table + double linked list이용  )

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        // LRUCache 용량
        this.capacity = capacity;
        // map 을 이용하여 hash table 생성 (key - node 대응됨)
        this.map = new Map();

        // head, tail node 생성
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * class내부에서만 사용 : 해당 node linked list에서 제거
     * @param {*} node
     */
    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * class내부에서만 사용 : 노드를 가장 앞(head 다음)에 삽입
     * @param {object} node
     */
    _addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * key에 대응되는 노드 존재 시 해당 노드의 value return
     * @param {*} key
     * @returns
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._remove(node); // 위치 갱신을 위해 제거
        this._addToFront(node); // 가장 앞에 다시 추가

        return node.value;
    }

    /**
     * 노드 갱신
     * @param {*} key
     * @param {*} value
     */
    put(key, value) {
        // 해당 노드가 존재시 이를 삭제
        if (this.map.has(key)) {
            const existingNode = this.map.get(key);
            this._remove(existingNode);
            this.map.delete(key);
        }

        // 노드 생성하여 맨 앞에 추가
        const newNode = new Node(key, value);
        this._addToFront(newNode);
        this.map.set(key, newNode);

        // linked list 의 크기가 용량을 넘을 경우 가장 오래된 노드 제거
        if (this.map.size > this.capacity) {
            // 가장 오래된 노드 제거 (tail 이전 노드)
            const lruNode = this.tail.prev;
            this._remove(lruNode);
            this.map.delete(lruNode.key);
        }
    }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3); // 2번 제거
console.log(lru.get(2)); // -1
lru.put(4, 4); // 1번 제거
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4
