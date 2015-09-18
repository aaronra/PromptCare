/*****************************************************************************/
/* CourseInfo: Event Handlers */
/*****************************************************************************/
Template.CourseInfo.events({
});

/*****************************************************************************/
/* CourseInfo: Helpers */
/*****************************************************************************/
Template.CourseInfo.helpers({
    'course':function(){
        return Course.findOne();
    }
});

/*****************************************************************************/
/* CourseInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.CourseInfo.created = function () {
};

Template.CourseInfo.rendered = function () {
};

Template.CourseInfo.destroyed = function () {
};
