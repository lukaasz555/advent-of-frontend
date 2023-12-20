export class GiftStream<T> {
	#gifts: T[];
	#result: T[] = [];

	constructor(gifts: T[]) {
		this.#gifts = gifts;
	}

	map(handler: (val: T) => T): this {
		this.#result = this.#gifts.map((val) => handler(val));
		return this;
	}

	skip(n: number): this {
		this.#result = this.#result.slice(n);
		return this;
	}

	take(n: number): this {
		this.#result = this.#result.slice(0, n);
		return this;
	}

	getGifts(): T[] {
		return this.#result;
	}
}
