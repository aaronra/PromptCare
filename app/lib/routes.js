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
Router.route('branch', {
    name: 'branch',
    controller: 'HomeController',
    action: 'Branch',
    where: 'client'
});
Router.route('branch/add', {
    name: 'branch.add',
    controller: 'HomeController',
    action: 'AddBranch',
    where: 'client'
});
Router.route('branch/update/:id', {
    name: 'updateBranch',
    controller: 'HomeController',
    action: 'UpdateBranch',
    where: 'client'
});
Router.route('register', {
    name: 'Register',
    controller: 'HomeController',
    action: 'Register',
    where: 'client'
});

Router.route('/course', {
    name: 'Course',
    controller: 'HomeController',
    action: 'Course',
    where: 'client'
});
Router.route('enrollment/registration', {
    name: 'Enroll',
    controller: 'HomeController',
    action: 'Enroll',
    where: 'client'
});
Router.route('course/addCourse', {
    name: 'AddCourse',
    controller: 'HomeController',
    action: 'AddCourse',
    where: 'client'
});
Router.route('module/addModule', {
    name: 'AddModule',
    controller: 'HomeController',
    action: 'AddModule',
    where: 'client'
})
Router.route('course/viewCourse/:id', {
    name: 'viewCourse',
    controller: 'HomeController',
    action: 'viewCourse',
    where: 'client'
});

Router.route('enrollees/student-list', {
    name: 'StudentList',
    controller: 'HomeController',
    action: 'StudentList',
    where: 'client'
});
Router.route('enrollees/Student-Schedule', {
    name: 'StudentSchedule',
    controller: 'HomeController',
    action: 'StudentSchedule',
    where: 'client'
});
Router.route('enrollees/Student-Grades', {
    name: 'StudentGrades',
    controller: 'HomeController',
    action: 'StudentGrades',
    where: 'client'
});
Router.route('enrollees/Student-Grades/:id', {
    name: 'GradesInfo',
    controller: 'HomeController',
    action: 'GradesInfo',
    where: 'client'
});
Router.route('enrollees/Student-Billing', {
    name: 'StudentBilling',
    controller: 'HomeController',
    action: 'StudentBilling',
    where: 'client'
});
Router.route('enrollees/Student-Billing/:id', {
    name: 'BillingInfo',
    controller: 'HomeController',
    action: 'BillingInfo',
    where: 'client'
});

Router.route('subsribes/Member-List', {
    name: 'MemberList',
    controller: 'HomeController',
    action: 'MemberList',
    where: 'client'
});
Router.route('dashboard', {
    name: 'dashboard',
    controller: 'HomeController',
    action: 'Dashboard',
    where: 'client'
});

Router.route('invoice', {
    name: 'invoice',
    controller: 'HomeController',
    action: 'Invoice',
    where: 'client'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});


