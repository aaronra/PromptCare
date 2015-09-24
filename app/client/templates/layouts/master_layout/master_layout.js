Template.MasterLayout.helpers({});

Template.MasterLayout.events({
    'click [data-action=logout]' : function() {
        AccountsTemplates.logout();
    }
});
Template.MasterLayout.onRendered(function () {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
