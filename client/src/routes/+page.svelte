<script lang="ts">
    import axios from "axios";
    import he from 'he';
    import { parse } from 'postgres-array';

    export let products: Product[] = [];

    async function getProducts() {
        try {
            const res = await axios.get("http://localhost:3000/api/product?all=true");
            products = res.data;            
            return;
        } catch (err) {
            return console.error(err);
        }
    }

    getProducts();

</script>

<div class="flex-5">
    <h1 class="font-bold text-xl">Welcome to K-Shop</h1>
    <p>This is the home page</p>
    <a href="/manager"><button>Manager</button></a>
</div>

<div class="flex-1">
    <h1 class="font-bold text-lg">Products</h1>

    <div class="flex justify-center">

        <div class="flex flex-wrap justify-between">

            {#each products as product }
                <div class="flex flex-col">
                    <img class="
                        border-2
                        border-gray-500
                        m-1
                        bg-white
                        aspect-square
                        object-contain
                        min-w-0.5
                        max-w-0.5"
                        src={product.image_url} alt={product.image_url} />
                    <p>{he.decode(product.name)}</p>
                    <p>£{product.price}</p>
                    {#each parse(product.categories) as category}
                        <p>{category}</p>
                    {/each}
                </div>
            {/each}

        </div>
    </div>

</div>