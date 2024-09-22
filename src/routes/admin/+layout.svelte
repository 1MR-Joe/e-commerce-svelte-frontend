<script>
    import '../../styles/admin.css'

    export let username;
    export let email;
</script>

<div class="container" id="container">
    <div class="sidebar">
        <div class="header-box">
            <img src="/logo.png" alt="company's logo">
            <div>
                <p>{(username)? username : 'username'}</p>
                <p>{(email)? email : 'email'}</p>
            </div>
        </div>

        <input type="text" placeholder="Search">

        <button class="sidebar-button" id="dashboard-button" type="button">
            <span class="material-symbols-outlined">dashboard</span>
            <a href="/admin/dashboard">Dashboard</a>
        </button>

        <button class="sidebar-button" id="home-button" type="button">
            <span class="material-symbols-outlined">home</span>
            <a href="#">Home</a>
        </button>

        <button class="sidebar-button" id="products-button" type="button">
            <span class="material-symbols-outlined">inventory</span>
            <a href="/admin/products">Products</a>
        </button>

        <button class="sidebar-button" id="categories-button" type="button">
            <span class="material-symbols-outlined">category</span>
            <a href="/admin/categories">Categories</a>
        </button>

        <button class="sidebar-button" id="manufacturers-button" type="button">
            <span class="material-symbols-outlined">manufacturing</span>
            <a href="#">Manufacturers</a>
        </button>

        <button class="sidebar-button" id="inventory-button" type="button">
            <span class="material-symbols-outlined">inventory_2</span>
            <a href="/admin/inventory">inventory</a>
        </button>

        <button class="sidebar-button" id="orders-button" type="button">
            <span class="material-symbols-outlined">conveyor_belt</span>
            <a href="/admin/orders">orders</a>
        </button>
    </div>

    <div class="main">
        <div class="window">
            <div class="content">
                <slot />            
            </div>
        </div>
        <button type="button" id="show-more-button" class="show-more-button hidden">load more</button>
    </div>
</div>