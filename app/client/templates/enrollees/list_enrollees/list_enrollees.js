/*****************************************************************************/
/* ListEnrollees: Event Handlers */
/*****************************************************************************/
Template.ListEnrollees.events({
});

/*****************************************************************************/
/* ListEnrollees: Helpers */
/*****************************************************************************/
Template.ListEnrollees.helpers({
    'isEnrolled':function(doc){
        return doc.enrolled ||false;
    },
    'userName':function(doc){
        return doc.profile.name;
    }
});

/*****************************************************************************/
/* ListEnrollees: Lifecycle Hooks */
/*****************************************************************************/
Template.ListEnrollees.created = function () {
};

Template.ListEnrollees.rendered = function () {
};

Template.ListEnrollees.destroyed = function () {
};
