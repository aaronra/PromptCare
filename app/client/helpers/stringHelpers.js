Template.registerHelper('truncate', function (string, length) {
    var cleanString = _(string).stripTags();
    return _(cleanString).truncate(length);
});
Template.registerHelper('isAdmin', function (string, length) {
    return Roles.userIsInRole(Meteor.userId(), 'admin')  // => true
});
Template.registerHelper('isEnrolled', function () {
    return Roles.userIsInRole(Meteor.userId(),'enrolled')  // => true
});
Template.registerHelper('isMember', function () {
    return Roles.userIsInRole(Meteor.userId(),'member')  // => true
});
Template.registerHelper('isRegister', function (string, length) {
    if (Router.current().url=='/register') {
        return false;
    }
    return true;
});