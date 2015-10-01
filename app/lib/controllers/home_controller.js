HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    waitOn: function () {
        return this.subscribe('course'),
            this.subscribe('admins'),
            this.subscribe('profiles'),
            this.subscribe('module');


    },
    data: {
        Course: Course.find({}),
        Module: Modules.find({}),
        Admin: Admin.find({}),
        Profile: Profiles.find({})
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
    },
    AddModule: function () {
        this.render('AddModule');
    },
    Enroll: function () {
        this.render('Enroll');
    },
    Register: function () {
        this.render('Register');
    },
    StudentList: function () {
        this.render('StudentList');
    },
    StudentSchedule: function () {
        this.render('StudentSchedule');
    },
    StudentGrades: function () {
        this.render('StudentGrades');
    },
    StudentInfo: function () {
        this.render('StudentInfo');
    },
    StudentBilling: function () {
        this.render('StudentBilling');
    },
    MemberList: function () {
        this.render('MemberList');
    }
});
