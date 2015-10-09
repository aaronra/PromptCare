/*****************************************************************************/
/* EnrolleesSidebar: Event Handlers */
/*****************************************************************************/
Template.EnrolleesSidebar.events({
});

/*****************************************************************************/
/* EnrolleesSidebar: Helpers */
/*****************************************************************************/
Template.EnrolleesSidebar.helpers({
});

/*****************************************************************************/
/* EnrolleesSidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.EnrolleesSidebar.created = function () {
};

Template.EnrolleesSidebar.rendered = function () {
    $('.collapsible').collapsible({
        accordion: false
    });
};

Template.EnrolleesSidebar.destroyed = function () {
};
