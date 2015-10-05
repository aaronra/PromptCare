Course = new Mongo.Collection('course');
Course.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    branch: {
        type: String,
        optional: false,
        label: "Branch Available",
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
