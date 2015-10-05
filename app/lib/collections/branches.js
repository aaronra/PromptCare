Branches = new Mongo.Collection('branches');
Branches.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Branch Name",
        max: 200
    },
    address: {
        type: String,
        label: "Branch Address",
        max: 200
    }
}));

if (Meteor.isServer) {
    Branches.allow({
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

    Branches.deny({
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
