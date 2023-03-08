<script lang="ts">
    import "../app.css";

    export let drawerIsOpen: Boolean = false;

</script>

<div class="
    fixed
    w-screen
    h-screen
    flex
    flex-col
    overflow-auto
    ">

    <header class="
        flex-10
        shrink-0
        sticky
        top-0
        shadow
        z-50
        bg-gray-400
        flex
        justify-between
        align-center
        px-3
        py-1
        ">
        
        <span class="material-symbols-outlined self-center cursor-pointer" on:click={() => drawerIsOpen = !drawerIsOpen} title="Menu">menu</span>

        <a href="/"><h1 class="font-bold text-lg">K-Shop</h1></a>

        <span class="material-symbols-outlined self-center cursor-pointer" title="Your bag">shopping_bag</span>

    </header>

    <div class={`
        flex-1
        flex
        flex-col
        px-3
        py-2
        bg-gray-200
        overflow-y-${drawerIsOpen ? 'hidden' : 'auto'}
        `}>
        <slot />
    </div>

</div>

{#if drawerIsOpen}
    <div class="
        fixed
        z-100
        inset-0
        w-screen
        flex
    " on:click={() => drawerIsOpen = false}>
        <div class="
            flex-10
            h-screen
            flex
            flex-col
            bg-gray-400
            shadow
        ">
            <div class="
                flex-10
                border-b
                border-gray-300
                px-2
                py-1
                flex
                justify-center
                align-center
            ">
                <span class="material-symbols-outlined cursor-pointer" title="Your account">account_circle</span>
            </div>
        
            <nav class="
                flex-1
                px-4
                py-2
                flex
                flex-col
            ">
                <a href="/womens">Women's</a>
                <a href="/mens">Men's</a>
                <a href="/outdoor">Outdoor</a>
                <a href="/home">Home</a>
            </nav>
        </div>

        <div class="
            flex-1
            bg-black
            bg-opacity-50
        "></div>
    </div>
{/if}