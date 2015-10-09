/*****************************************************************************/
/* SubscribersSidebar: Event Handlers */
/*****************************************************************************/
Template.SubscribersSidebar.events({});

/*****************************************************************************/
/* SubscribersSidebar: Helpers */
/*****************************************************************************/
Template.SubscribersSidebar.helpers({});

/*****************************************************************************/
/* SubscribersSidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.SubscribersSidebar.created = function () {
};

Template.SubscribersSidebar.rendered = function () {
    $('.collapsible').collapsible({
        accordion: false
    });
};

Template.SubscribersSidebar.destroyed = function () {
};
