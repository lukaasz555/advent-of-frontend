export function usePagination<T>(
	items: T[],
	itemsPerPage: number,
	pageNumber: number
) {
	const totalItems = items.length;
	const totalPages = Math.ceil(items.length / itemsPerPage);
	const offset = (pageNumber - 1) * itemsPerPage;
	const currentPageItems = items.splice(offset, itemsPerPage);

	return {
		totalPages,
		totalItems,
		currentPageItems,
	};
}
