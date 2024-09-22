<script lang="ts">
    import { fetchData, fillEntitiesAsSelectorOptions } from "$lib/utils";
    import { onMount } from "svelte";
    
    export let changeCallback: CallableFunction;
    
    
    // fetching categories
    let selector: HTMLElement;
    let api: string = import.meta.env.VITE_PUBLIC_CATEGORIES_API;
    api = api + '/names';
    

    async function fetchAndFillCategories(api: string, container: HTMLElement): Promise<void> {
        const responseData: any[]|null = await fetchData(api, 'json');

        if(responseData) {
            // TODO: refactor that to use svelte for loop templating mechanism instead of a custom function
            fillEntitiesAsSelectorOptions(container, responseData);
        } else {
            console.error('categories not found!');
        }
    }
    
    onMount(() => {
        if(selector) {
            fetchAndFillCategories(api, selector);
        } else {
            console.error('filters-category-selector not found');
        }
    });

    // handle change
    function handleChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const value: string = selectElement.value;
        changeCallback({
            category: value,
            page: 1,
        });
    }
</script>


<select id="filters-category-selector" bind:this={selector} on:change={handleChange}>
    <option value="null" selected>All Categories</option>
</select>

<style>
    select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: min-content;
    }
</style>