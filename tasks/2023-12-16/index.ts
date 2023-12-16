type GalacticHistoryTracer<T> = {
	add: (arg: T) => void;
	current: () => T | null;
	undo: () => void;
	redo: () => void;
};

export function createTracer<T>(): GalacticHistoryTracer<T> {
	const locations: T[] = [];
	let currentLocation: T | null = null;

	function add(arg: T): void {
		locations.push(arg);
		currentLocation = arg;
	}

	function current(): T | null {
		return currentLocation;
	}

	function undo(): void {
		const currentLocationIndex = locations.findIndex(
			(loc) => currentLocation && loc === currentLocation
		);

		if (currentLocationIndex > -1) {
			currentLocation = locations[currentLocationIndex - 1];
		} else {
			currentLocation = null;
		}
	}

	function redo(): void {
		const currentLocationIndex = locations.findIndex(
			(loc) => loc === currentLocation
		);
		if (currentLocationIndex === locations.length - 1) {
			throw Error('No more galaxies to explore');
		}
		if (currentLocationIndex > -1) {
			currentLocation = locations[currentLocationIndex + 1];
		}
	}

	const tracer: GalacticHistoryTracer<T> = {
		add,
		current,
		undo,
		redo,
	};

	return tracer;
}
