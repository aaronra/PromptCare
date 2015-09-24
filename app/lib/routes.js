Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});

Router.route('/course', {
    name: 'Course',
    controller: 'HomeController',
    action: 'Course',
    where: 'client'
});
Router.route('course/addCourse', {
    name: 'AddCourse',
    controller: 'HomeController',
    action: 'AddCourse',
    where: 'client'
});
Router.route('course/viewCourse/:id', {
    name: 'viewCourse',
    controller: 'HomeController',
    action: 'viewCourse',
    where: 'client'
});
Router.plugin('ensureSignedIn');