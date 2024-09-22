import { writable } from "svelte/store";

export let productFilters = writable({
    page: 1,
    limit: 10,
    category: null,
    manufacturer: null,
    orderBy: null,
    orderDir: null,
});