/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('course', function (id) {
    if(!id)return Course.find();
    return Course.find({_id:id});
});
