HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    waitOn: function () {
        return this.subscribe('course'),
            this.subscribe('admins'),
            this.subscribe('profiles'),
            this.subscribe('module'),
            this.subscribe('branchlist'),
            this.subscribe('rooms');


    },
    data: {
        Course: Course.find({}),
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
    },
    Invoice:function(){
        this.render('Invoice');
    },
    Print:function(){
        this.render('Print');
    }

});
