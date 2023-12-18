export class RateLimiter {
	#maxRequests: number;
	#intervalMs: number;
	#pendingRequests: boolean[] = [];

	constructor(maxRequests: number, intervalMs: number) {
		this.#maxRequests = maxRequests;
		this.#intervalMs = intervalMs;
	}

	#addRequest() {
		this.#pendingRequests.push(true);
		setTimeout(() => {
			this.#pendingRequests.shift();
		}, this.#intervalMs);
	}

	attemptAccess(): boolean {
		if (this.#pendingRequests.length >= this.#maxRequests) {
			return false;
		}
		this.#addRequest();
		return true;
	}
}
