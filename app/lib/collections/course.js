Course = new Mongo.Collection('course');
Course.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    cost: {
        type: String,
        label: "cost"
    },
    unit: {
        type: Number,
        label: "unit",
        min: 0
    }
}));

if (Meteor.isServer) {
    Course.allow({
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

    Course.deny({
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
