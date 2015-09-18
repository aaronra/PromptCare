/*****************************************************************************/
/* CourseInfo: Event Handlers */
/*****************************************************************************/
Template.CourseInfo.events({});

/*****************************************************************************/
/* CourseInfo: Helpers */
/*****************************************************************************/
Template.CourseInfo.helpers({
    'CourseInfo': function () {
        var controller = Router.current();
        console.log(controller.params.id);
        return Course.findOne({_id: controller.params.id});
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
