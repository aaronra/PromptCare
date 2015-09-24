
if (Admin.find({}).count() === 0) {
    var defaultAdmins = ['admin@admin.com'];
    for (var admins in defaultAdmins) {
        var admin = {email: defaultAdmins[admins]};
        Admin.insert(admin);
    }
}