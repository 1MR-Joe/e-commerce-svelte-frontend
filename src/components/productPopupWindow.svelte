<script lang=ts>
    import PopupWindow from "./popupWindow.svelte";

    export let title: string = "Create Product Form";
    export let showPopup: boolean;
</script>

<PopupWindow title={title} showPopup={showPopup}>
    <div class="form-container">
        <div class="image-container hidden"></div>
        <form action="/admin/products" method="POST" enctype="multipart/form-data" class="product-form"
              id="create-product-form">
    
            <div class="name-container">
                <input type="text" name="name" id="name" placeholder="Product Name" required>
                <div class="invalid-feedback"></div>
            </div>
    
            <div class="price-container">
                <input type="number" name="price" id="price" placeholder="Product Price in US Dollars">
                <div class="invalid-feedback"></div>
            </div>
    
            <div class="photo-container">
                <input type="file" name="photo" id="photo" accept="image/*" required>
                <div class="invalid-feedback"></div>
            </div>
    
            <div class="textarea-container">
                <textarea name="description" id="description" class="description">Product Details......</textarea>
                <div class="invalid-feedback"></div>
            </div>
    
            <!-- new fields -->
    
            <div class="select-manufacturer">
                <select name="manufacturer" id="manufacturer-selector" class="manufacturer-selector" required>
                    <option value="" selected disabled>-- select manufacturer --</option>
                </select>
                <div class="invalid-feedback"></div>
            </div>
    
            <div class="create-manufacturer-field" id="create-manufacturer-field">
                <input type="text" id="new-manufacturer-field" placeholder="New Manufacturer">
                <div class="invalid-feedback"></div>
            </div>
    
            <button type="button" class="submit-button" id="create-manufacturer-button">Create Manufacturer</button>
    
            <div class="select-category">
                <select name="category" id="category-selector" class="category-selector" required>
                    <option value="" selected disabled>-- select category --</option>
                </select>
                <div class="invalid-feedback"></div>
            </div>
    
            <div class="create-category-field" id="create-category-field">
                <input type="text" id="new-category-field" placeholder="New Category">
                <div class="invalid-feedback"></div>
            </div>
    
            <button type="button" class="submit-button" id="create-category-button">Create Category</button>
    
            <!-- end of form -->
            <input type="submit" id="form-submit-button" class="submit-button" value="Submit" form="create-product-form">
        </form>
    </div>
</PopupWindow>

<style>
    .form-container {
        width: max-content;
        height: fit-content;
        display: flex;
        justify-content: space-between;
    }

    .image-container {
        width: 300px;
        /* background-color: #666; */
        margin-right: 10px;
        padding: 10px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .hidden {
        display: none;
    }

    .product-form {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 15px;
        text-align: center;
    }

    input, .category-selector, .manufacturer-selector {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }

    .name-container {
        grid-row: 1;
        grid-column: 1;
    }

    .price-container {
        grid-row: 2;
        grid-column: 1;
    }

    .photo-container {
        grid-row: 3;
        grid-column: 1;
    }

    .textarea-container {
        grid-row: 4 / span 2;
        grid-column: 1;
    }

    .product-form .description {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    #form-submit-button {
        grid-row: 6;
        grid-column: 1;
    }

    .submit-button {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 0 20px 0;
        box-sizing: border-box;
    }

    .submit-button:hover {
        background-color: #0056b3;
    }

    .invalid-feedback {
        color: red;
        font-size: 13px;
        margin-bottom: 15px;
    }

    .select-manufacturer {
        grid-row: 1;
        grid-column: 2;
    }

    .create-manufacturer-field {
        grid-row: 2;
        grid-column: 2;
    }

    #create-manufacturer-button {
        grid-row: 3;
        grid-column: 2;
    }

    .select-category {
        grid-row: 4;
        grid-column: 2;
    }

    .create-category-field {
        grid-row: 5;
        grid-column: 2;
    }

    #create-category-button {
        grid-row: 6;
        grid-column: 2;
    }
</style>