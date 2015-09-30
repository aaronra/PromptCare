/*****************************************************************************/
/* CourseList: Event Handlers */
/*****************************************************************************/
Template.CourseList.events({});

/*****************************************************************************/
/* CourseList: Helpers */
/*****************************************************************************/
Template.CourseList.helpers({});

/*****************************************************************************/
/* CourseList: Lifecycle Hooks */
/*****************************************************************************/
Template.CourseList.created = function () {
};

Template.CourseList.rendered = function () {
    $('.collapsible').collapsible({
        accordion: false
    });
};

Template.CourseList.destroyed = function () {
};
