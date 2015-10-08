/*****************************************************************************/
/* DateInput: Event Handlers */
/*****************************************************************************/
Template.DateInput.events({});

/*****************************************************************************/
/* DateInput: Helpers */
/*****************************************************************************/
Template.DateInput.helpers({});

/*****************************************************************************/
/* DateInput: Lifecycle Hooks */
/*****************************************************************************/
Template.DateInput.created = function () {
};

Template.DateInput.rendered = function () {
    this.$('#at-field-birthDate').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year
        onOpen: function () {
            this.clear();
        },
        onSet: function () {
            var x, y, year, date, month;
            x = $('#at-field-birthDate').pickadate().val().toString();
            y = x.split(/[ ,]+/);
            date = y[0];
            month = y[1];
            year = y[2];
            console.log(y[0] + " " + y[1] + " " + y[2]);
            if (date && month && year) {
                this.close();
            }
        }
    });
};

Template.DateInput.destroyed = function () {
};
