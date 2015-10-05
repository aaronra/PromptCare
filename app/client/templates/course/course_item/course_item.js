/*****************************************************************************/
/* CourseItem: Event Handlers */
/*****************************************************************************/
Template.CourseItem.events({
    'click #enroll':function(e){
        e.preventDefault();
        var user = Meteor.users.findOne({_id: Meteor.userId()});

        Meteor.users.update({_id: user._id}, {$set:{enrolled:'pending'}});


}
});

/*****************************************************************************/
/* CourseItem: Helpers */
/*****************************************************************************/
Template.CourseItem.helpers({
    'course':function(){
        return Course.findOne();
    },
    'hasEnrolled':function(){
        return Meteor.user().enrolled ||false;
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
