<script>
export let params={};


</script>

<h1>Acerca de </h1>

<h2>Id recibido:{params.id}</h2>
<h2>Nombre recibido:
{#if params.nombre}
{params.nombre}
{/if}
</h2>