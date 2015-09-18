/*****************************************************************************/
/* CourseItem: Event Handlers */
/*****************************************************************************/
Template.CourseItem.events({
});

/*****************************************************************************/
/* CourseItem: Helpers */
/*****************************************************************************/
Template.CourseItem.helpers({
    'course':function(){
        return Course.findOne();
    }
});

/*****************************************************************************/
/* CourseItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CourseItem.created = function () {
};

Template.CourseItem.rendered = function () {
};

Template.CourseItem.destroyed = function () {
};
