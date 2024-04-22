<script>
   import {store, price} from "$lib/tal.svelte.js";

   let val = store();
   let p = new price();


</script>

<h1>{val.value}</h1>
<button onclick={() => val.value++}>tt ++</button>

<h2>PRIS {p.cost}</h2>
<button onclick={() => p.cost++}>Pris</button>
