HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    waitOn: function () {
        return this.subscribe('course'),
            this.subscribe('admins');


    },
    data: {
        Course: Course.find({}),
        Admin: Admin.find({})
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
