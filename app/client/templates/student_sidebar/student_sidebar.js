/*****************************************************************************/
/* StudentSidebar: Event Handlers */
/*****************************************************************************/
Template.StudentSidebar.events({
});

/*****************************************************************************/
/* StudentSidebar: Helpers */
/*****************************************************************************/
Template.StudentSidebar.helpers({
});

/*****************************************************************************/
/* StudentSidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentSidebar.created = function () {
};

Template.StudentSidebar.rendered = function () {
    $('.collapsible').collapsible({
        accordion: false
    });
};

Template.StudentSidebar.destroyed = function () {
};
