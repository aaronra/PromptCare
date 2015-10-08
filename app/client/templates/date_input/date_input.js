/*****************************************************************************/
/* DateInput: Event Handlers */
/*****************************************************************************/
Template.DateInput.events({
});

/*****************************************************************************/
/* DateInput: Helpers */
/*****************************************************************************/
Template.DateInput.helpers({
});

/*****************************************************************************/
/* DateInput: Lifecycle Hooks */
/*****************************************************************************/
Template.DateInput.created = function () {
};

Template.DateInput.rendered = function () {
    this.$('input').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year
        onSet: function () {
            this.close();
        }

    });
};

Template.DateInput.destroyed = function () {
};
