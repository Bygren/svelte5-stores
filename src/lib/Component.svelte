<script>
   import {store, price, menu} from "$lib/tal.svelte.js";

   let val = store();

</script>

<h1>Komponent</h1>
<h3>KOMP {val.value}</h3>
<button onclick={()=> val.value--}>STORE</button>
<h1>Pris komp {price.val}</h1>
<hr>

<button onclick={() => menu.show = !menu.show}>Menu</button>

{#if menu.show }
   <ul>
      <li>S</li>
      <li>H</li>
      <li>O</li>
   </ul>
{/if}