<script lang="ts">
    export let breadCrumbs: string = 'Home';
    export let itemCount: number = 0;
    export let filters: any[] = [];
    export let buttonText: string;
</script>

<!-- TODO: fix styling of the other header box -->

<style>
    .header-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px #e7e7e7 solid;
        margin-bottom: 20px;
    }

    .header-box .filters-section {
        display: grid;
        grid-auto-flow: column;
        grid-auto-rows: min-content;
        grid-column-gap: 10px;
        align-items: center;
    }
</style>

<div class="header-box">
    <div class="text-section">
        <h4 class="bread-crumbs">{breadCrumbs}</h4>
        <p class="small-text light-gray">
            <span id="meta-count">{itemCount}</span> items
        </p>
    </div>
    <div class="filters-section">
        {#each filters as component}
            <svelte:component this={component} />
        {/each}

        <button type="button" class="submit-button" id="create-product-button">{buttonText}</button>
    </div>
</div>