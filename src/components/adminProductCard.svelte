<script lang="ts">
    import { onMount } from "svelte";

    export let id: number|null;
    export let name: string|null;
    export let price: number|null;
    export let imageUrl: string|null;

    let finalImageUrl = import.meta.env.VITE_PUBLIC_FILES_API + imageUrl;
</script>

<style>
    .product-card {
        /* width: 300px; */
        /* margin-right: 10px; */
        /* max-height: 350px; */
        max-width: 300px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-shrink: 0;
        padding: 0 0 10px 0;

        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .product-card img {
        width: 100%;
        height: auto;
        border-radius: 5px 5px 0 0;
    }

    .info {
        padding: 0 15px;
        text-align: center;
    }

    .product-name {
        color: #333;
        margin: 0;
    }

    .price {
        font-size: 20px;
        color: #28a745;
        font-weight: bold;
    }

    .product-management-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
    }

    .product-management-section button {
        width: 40px;
        height: 40px;
        color: black;
        padding: 5px;
        background-color: transparent;
        border: 2px solid black;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 5px;
        cursor: pointer;
    }
</style>

<div class="product-card">
    <img class="product-img" src="{finalImageUrl}" alt="a Product">
    
    <div class="info">
        <h4 class="product-name">{name}</h4>
        <p class="price">${price}</p>
    </div>
    
    <div class="product-management-section">
        <button type="button" id="edit-button" data-id="{id}">
            <span class="material-symbols-outlined">edit_square</span>
        </button>
        <button type="button" id="archive-button" data-id="{id}">
            <span class="material-symbols-outlined">archive</span>
        </button>
        <button type="button" id="delete-button" data-id="{id}">
            <span class="material-symbols-outlined">delete</span>
        </button>
    </div>

</div>