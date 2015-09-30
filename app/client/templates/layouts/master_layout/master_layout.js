Template.MasterLayout.helpers({});

Template.MasterLayout.events({
    'click [data-action=logout]' : function() {
        AccountsTemplates.logout();
    }
});
Template.MasterLayout.onRendered(function () {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible({
        accordion: false
    });
});
