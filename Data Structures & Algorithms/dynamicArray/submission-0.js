class DynamicArray {
    /**
     * Initializes an empty array with a fixed starting capacity (> 0).
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity);
    }

    /**
     * Returns the element at index i.
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * Sets the element at index i to n.
     * @param {number} i
     * @param {number} n
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * Pushes the element n to the end of the array.
     * Resizes the array if it reaches full capacity.
     * @param {number} n
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.arr[this.size] = n;
        this.size++;
    }

    /**
     * Pops and returns the element at the end of the array.
     * @returns {number}
     */
    popback() {
        if (this.size > 0) {
            this.size--;
            return this.arr[this.size];
        }
    }

    /**
     * Doubles the capacity of the array and copies over elements.
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * Returns the current number of elements in the array.
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * Returns the current capacity of the array.
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}