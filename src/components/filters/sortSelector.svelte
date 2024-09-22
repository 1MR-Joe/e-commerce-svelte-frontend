<script lang="ts">
    export let changeCallback: CallableFunction;
    
    let sortSelector: HTMLSelectElement;
    export function changeValue(newValue: string): void {
        sortSelector.value = newValue;
    } 

    // handle change
    function handleChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const selectedOption = selectElement.options[selectElement.selectedIndex];

        changeCallback({
            orderBy: selectedOption.getAttribute('data-name'),
            orderDir: selectedOption.getAttribute('data-dir'),
            page: 1,
        });
    }
</script>


<select id="filters-sorting-selector" bind:this={sortSelector} on:change={handleChange}>
    <option data-name="updatedAt" data-dir="desc" value="last-updated" selected>Last Updated</option>
    <option data-name="unitPriceInCents" data-dir="asc" value="lowest-price">Lowest Price</option>
    <option data-name="unitPriceInCents" data-dir="desc" value="highest-price">Highest Price</option>
</select>

<style>
    select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: min-content;
    }
</style>