HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    waitOn: function () {
        return this.subscribe('course');

    },
    data: {
        Course: Course.find({})
    },
    action: function () {
        this.render('Home');
    },
    Course: function () {
        this.render('Course');
    },
    AddCourse: function () {
        this.render('AddCourse');
    },
    viewCourse: function () {
        this.render('CourseInfo');
    }
});
