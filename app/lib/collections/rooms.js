Rooms = new Mongo.Collection('rooms');
Rooms.attachSchema(new SimpleSchema({
  number: {
    type: String,
    label: "Room Number",
    max: 200,
    optional: false,
  },
  branch: {
    type: String,
    optional: false,
    label: "Room Location",
    autoform: {
      afFieldInput: {
          options: function () {
          var branches = Branches.find().fetch();
          var options = [];
            console.log(branches);
          for (branchs in branches) {
            var option = {label: branches[branchs].name, value: branches[branchs].name};
            options.push(option)
          }
          return options;
        }
      }
    }
  }
}));

if (Meteor.isServer) {
  Rooms.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Rooms.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
