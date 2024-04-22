<script>
   import { render } from "svelte/server";
   let {children} = $props();
</script>
<h1>From LayOut</h1>
{@render children()} 