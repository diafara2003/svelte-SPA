<script>
  import Router from "svelte-spa-router";
  import { link,push } from "svelte-spa-router";
  import routes from "./routes.js";

function pagina(){
  push('/acerca/1ww');
}

function  not_found(){

  push('/demo')
}

function  not_found_params(){

  push('/acerca/123/dddd/fdgfdg')
}

</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand" href="#">Svelte</span>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/" use:link>
          Inicio
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/acerca/123/pedro" use:link>Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactos" use:link>Contactos</a>
      </li>
    </ul>
  </div>
</nav>


<Router {routes} />
<div>
<button class="btn btn-primary" on:click={pagina}>Acerca</button>
<button class="btn btn-info" on:click={not_found}>Error en ruta</button>
<button class="btn btn-info" on:click={not_found_params}>Error en parametros de ruta</button>
</div>


