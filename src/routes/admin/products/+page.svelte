<script lang="ts">
    import { onMount } from "svelte";
    import CategorySelector from "../../../components/filters/categorySelector.svelte";
    import SortSelector from "../../../components/filters/sortSelector.svelte";
    import HeaderBox from "../../../components/headerBox.svelte";
    import { applyFiltersToURL, centsToDollars, fetchData } from "$lib/utils";
    import AdminProductCard from "../../../components/adminProductCard.svelte";
    import { productFilters } from "$lib/stores"
    import ProductPopupWindow from "../../../components/productPopupWindow.svelte";

    // TODO: item count
    // fetching products
    const api = import.meta.env.VITE_PUBLIC_PRODUCTS_API;
    let products: Array<Product> = [];
    
    let filtersObject: {[key: string]: any} = {
        page: 1,
        limit: 10,
        category: null,
        manufacturer: null,
        orderBy: null,
        orderDir: null,
    };

    function updateFilters(changesObject: {[key: string]: any}): void {
        for(const key in changesObject) {
            if(filtersObject.hasOwnProperty(key)) {
                filtersObject[key] = changesObject[key];
            }
        }

        products = [];
        fetchProducts(applyFiltersToURL(api, filtersObject));
    }
        
    // this function is always concatenating to the products array
    // whether the products array is cleared or not this is the function tat calls this function
    async function fetchProducts(api: string) {
        let responseData: productsResponse = await fetchData(api, 'json');
        
        if(responseData) {
            // products = responseData.products;
            // products.concat(responseData.products);
            products = [...products, ...responseData.products]
        } else {
            console.error('products not found!');
        }
    }
    
    onMount(() => {
        let filtersSortSelector = document.getElementById('filters-sorting-selector') as HTMLSelectElement|null;

        if(filtersSortSelector) {
            filtersSortSelector.value = 'last-updated'; // TODO: no hard coding !
            let changeEvent = new Event('change');
            filtersSortSelector.dispatchEvent(changeEvent);
        } else {
            console.error("sorting selector not found");
            fetchProducts(api);
        }
    });

    type Product = {
        id: number;
        name: string;
        unitPriceInCents: number;
        photo: string;
    };

    type metadata = {
        
    };

    type productsResponse = {
        products: Product[];
        metadata: any;
    } | null

    let showPopup: boolean = false;
</script>


<div class="header-box">
    <div class="text-section">
        <h4 class="bread-crumbs">Home > Products</h4>
        <p class="small-text light-gray">
            <span id="meta-count">0</span> items
        </p>
    </div>
    <div class="filters-section">

        <CategorySelector changeCallback={updateFilters} />
        <SortSelector changeCallback={updateFilters} />

        <button type="button" class="submit-button" id="create-product-button" on:click={() => showPopup = true}>
            Create Product
        </button>
    </div>
</div>

{#if products.length > 0}
    <div id="products-container">
        {#each products as p}
            <AdminProductCard id={p.id} name={p.name} price={centsToDollars(p.unitPriceInCents)} imageUrl={p.photo}  />
        {/each}
    </div>

{:else}
    <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; flex-grow: 1;">
        <h1>No Products Found :(</h1>
    </div>
{/if}
{#if showPopup}
    <ProductPopupWindow showPopup={showPopup} />
{/if}
<style>
    .header-box {
        height: min-content;
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

    #products-container {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* critical numbers */
        gap: 10px;
    }
</style>
