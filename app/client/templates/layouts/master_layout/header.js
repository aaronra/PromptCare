Template.Header.helpers({
    //add you helpers here
});

Template.Header.events({
    //add your events here
});

Template.Header.onCreated(function () {
    //add your statement here
});

Template.Header.onRendered(function () {
    //add your statement here
});

Template.Header.onDestroyed(function () {
    //add your statement here
});
Template.Header.rendered = function(){
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
};
