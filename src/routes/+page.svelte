<script>
   import { goto } from '$app/navigation';
   import {store, price, menu} from "$lib/tal.svelte.js";
   import Component from '../lib/Component.svelte';
   let x = $state(0);
   let y = $derived(x*4);

   let val = store();

   let pris = price;
   $inspect(price)

</script>
<Component />

<h1>{val.value}</h1>
<button onclick={() => val.value++}>tt ++</button>

<button onclick={()=> price.val++}>PRIS</button>
<h1>PRIS {price.val}</h1>
<p>Menu = {menu.show}</p>