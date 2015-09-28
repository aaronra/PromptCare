Profiles = new Mongo.Collection('profiles');
Profiles.attachSchema(new SimpleSchema({
  lastname: {
    type: String,
    label: "Last Name",
    max: 200
  },
  firstname: {
    type: String,
    label: "First Name",
    max: 200
  },
  middlename: {
    type: String,
    label: "Middle Name",
    max: 200
  },
  street: {
    type: String,
    label: "Number, Street",
    max: 200
  },
  barangay: {
    type: String,
    label: "Barangay",
    max: 200
  },
  district: {
    type: String,
    label: "District",
    max: 200
  },
  email: {
    type: String,
    label: "Email Address",
    max: 200
  },
  contact: {
    type: String,
    label: "Contact No",
    max: 200
  },
  nationality: {
    type: String,
    label: "nationality",
    max: 200
  }

}));

if (Meteor.isServer) {
  Profiles.allow({
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

  Profiles.deny({
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
}
