<script lang="ts">
    export let title: string = "Popup Form";
    export let showPopup: boolean;
</script>

<div id="popup-window">
    <h1 class="form-title">{title}</h1>
    <div id="popup-content" class="popup-content">
        <slot />
    </div>
    <button type="button" id="close-button" class="close-button" on:click={() => showPopup = false}>
        Close
    </button>
</div>

<style>
    h1.form-title {
        margin-bottom: 20px;
    }

    #popup-window {
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: max-content;
        padding: 25px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.30);
        background-color: white;
        text-align: left;
        transition: 0.5s;
    }

    #popup-window .close-button {
        width: 100%;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 15px;
        box-sizing: border-box;
        font: 18px bolder;
        cursor: pointer;
    }

    #popup-window #popup-content {
        margin-bottom: 20px;
        width: max-content;
    }
</style>