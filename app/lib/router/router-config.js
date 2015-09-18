/**
 * Created by aarondrup on 9/18/15.
 */
Router.configure({
    controller: 'HomeController',
    loadingTemplate: 'loading'
});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});