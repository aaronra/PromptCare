/*****************************************************************************/
/* StudentSchedule: Event Handlers */
/*****************************************************************************/
Template.StudentSchedule.events({
});

/*****************************************************************************/
/* StudentSchedule: Helpers */
/*****************************************************************************/
Template.StudentSchedule.helpers({
});

/*****************************************************************************/
/* StudentSchedule: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentSchedule.created = function () {
};

Template.StudentSchedule.rendered = function () {
    $(document).ready(function() {
        $('select').material_select();
    });
};

Template.StudentSchedule.destroyed = function () {
};
