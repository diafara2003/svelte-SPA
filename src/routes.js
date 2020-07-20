import Inicio from './rutas/inicio.svelte';
import Acerca from './rutas/acerca.svelte';
import Contactos from './rutas/contactos.svelte';
import ErrorRuta from './rutas/errorRuta.svelte';

//?=parametro opcional
const routes = {
    '/': Inicio,
    '/Acerca/:id/:nombre?': Acerca,
    '/contactos': Contactos,
    '*': ErrorRuta
};

export default routes;