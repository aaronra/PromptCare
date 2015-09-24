/**
 * Created by aarondrup on 9/18/15.
 */
Router.configure({
     loadingTemplate: 'loading'
});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});