import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./packagingUnits/*.js', { eager: true }));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'packagingUnits',
    component: Router,
    meta: {
        breadcrumb: 'packaging units',
        route: 'administration.packagingUnits.index',
    },
    children: routes,
};
