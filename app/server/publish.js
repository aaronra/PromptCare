/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('course', function (id) {
    if(!id)return Course.find();
    return Course.find({_id:id});
});
Meteor.publish('module', function (){
    return Modules.find({});
})
Meteor.publish('admins', function (/* args */) {
    return Admin.find();
});
Meteor.publish('profiles', function (){
    return Profiles.find({});
})

Meteor.publish('branchlist', function (/* args */) {
  return Branches.find();
});

Meteor.publish('rooms', function (/* args */) {
  return Rooms.find();
});