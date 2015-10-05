HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    waitOn: function () {
        return this.subscribe('course'),
            this.subscribe('admins'),
            this.subscribe('profiles'),
            this.subscribe('module'),
            this.subscribe('branchlist'),
            this.subscribe('rooms'),
            this.subscribe('userData');


    },
    data: {
        Course: Course.find({}),
        Users: Meteor.users.find({}),
        Module: Modules.find({}),
        Admin: Admin.find({}),
        Profile: Profiles.find({}),
        Branches: Branches.find({}),
        Rooms: Rooms.find({})
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
    updateCourse: function () {
        this.render('UpdateCourse');
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
    EnrolleeList: function () {
        this.render('Enrollees');
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
    },
    Dashboard: function(){
        this.render('Dashboard');
    },
    Branch: function(){
        this.render('Branches');
    },
    AddBranch: function(){
        this.render('Addbranch');
    },
    UpdateBranch:function(){
        this.render('Updatebranch');
    },
    Room: function(){
        this.render('Rooms');
    },
    AddRoom: function(){
        this.render('Addroom');
    },
    UpdateRoom:function(){
        this.render('UpdateRooms');
    }

});
