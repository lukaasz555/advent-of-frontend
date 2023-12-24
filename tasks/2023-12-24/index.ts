function isStateEmpty(state: Record<string, unknown>): boolean {
	if (Object.keys(state).length === 0) return true;
	return false;
}

function updateState(
	state: Record<string, unknown>,
	newState: Record<string, unknown>
): Record<string, unknown> {
	const newKeys = Object.keys(newState);
	for (let i = 0; i < newKeys.length; i++) {
		if (state[newKeys[i]]) {
			state[newKeys[i]] = newState[newKeys[i]];
		} else {
			Object.assign(state, { [newKeys[i]]: newState[newKeys[i]] });
		}
	}
	return state;
}

abstract class Component {
	state: Record<string, unknown>;
	style: string;

	constructor(initState?: Record<string, unknown>, style?: string) {
		this.state = initState || {};
		this.style = style || '';
	}

	setState(newState: Record<string, unknown>): void {
		this.state = updateState(this.state, newState);
	}

	template(): string {
		if (!this.state) {
			return '<span>No state</span>';
		} else {
			const msg =
				!isStateEmpty(this.state) && this.state[Object.keys(this.state)[0]];
			if (!this.style) {
				return `<p>${msg}</p>`;
			} else {
				return `<div style="${this.style}">${msg}</div>`;
			}
		}
	}
}

function renderComponent(component: Component): string {
	return component.template();
}

export { Component, renderComponent };
