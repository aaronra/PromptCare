AccountsTemplates.configureRoute(
    'signIn', {layoutTemplate: 'MasterLayout', redirect: 'dashboard'}
);

AccountsTemplates.configureRoute(
    'signUp', {layoutTemplate: 'MasterLayout', redirect: 'dashboard'}
);

AccountsTemplates.configureRoute(
    'ensureSignedIn', {layoutTemplate: 'MasterLayout'}
);
AccountsTemplates.configure({
    texts: {
        button: {
            signUp: "Create Account"
        },
        title: {
            signUp: "Sign Up"
        }
    },
});
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "gender",
        type: "radio",
        displayName: "Gender",
        select: [
            {
                text: "Male",
                value: "male",
            },
            {
                text: "Female",
                value: "female",
            },
        ],
    },
    {
        _id: 'FirstName',
        type: 'text',
        displayName: "First Name",
    },
    {
        _id: 'LastName',
        type: 'text',
        displayName: "Last Name",
    },
    {
        _id: 'birthDate',
        type: 'select',
        displayName: "Birth Month",
        select: [
            {
                text: "January",
                value: "January",
            },
            {
                text: "February",
                value: "February",
            },

            {
                text: "March",
                value: "March",
            },
        ]
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    pwd
]);