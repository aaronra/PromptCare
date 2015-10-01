/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
    'submit #register-form': function (e, t) {
        e.preventDefault();
        var email = t.find('#account-email').value,
            password = t.find('#account-password').value,
            firstName = t.find('#first_name').value;

        Accounts.createUser({email: email, password: password, firstName: firstName}, function (err) {
            if (err) {
                // Inform the user that account creation failed
            } else {
                // Success. Account has been created and the user
                // has logged in successfully.
            }

        });

        return false;
    }
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};
