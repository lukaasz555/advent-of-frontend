export interface Tool {
	init: Function;
	update: Function;
	dispose: Function;
}

export class Equipment {
	#tools: Tool[] = [];
	#areToolsInitialized = false;

	registerTools(tool: Tool): void {
		this.#tools.push(tool);
	}
	initializeTools(): void {
		this.#tools.forEach((t) => t.init());
		this.#areToolsInitialized = true;
	}
	updateTools(): void {
		if (this.#areToolsInitialized) {
			this.#tools.forEach((t) => t.update());
		} else {
			throw Error('Cannot update any tools before initialization.');
		}
	}
	disposeTools(): void {
		this.#tools.forEach((t) => t.dispose());
	}
}
