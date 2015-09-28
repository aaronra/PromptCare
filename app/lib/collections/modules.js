Modules = new Mongo.Collection('modules');
Modules.attachSchema(new SimpleSchema({
    coursecode: {
        type: String,
        label: 'Course Code',
        max: 200
    },
    moduletitle: {
        type: String,
        label: 'Module Title',
        max: 200
    }
}));

if (Meteor.isServer) {
    Modules.allow({
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

    Modules.deny({
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
