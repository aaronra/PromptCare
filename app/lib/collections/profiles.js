Profiles = new Mongo.Collection('profiles');
Profiles.attachSchema(new SimpleSchema({
    picture: {
        type: String,
        label: "picture 1x1",
        max: 200
    },
    webBase: {
        type: Object,
        label: 'Web-Based Information System'
    },
    'webBase.ULI': {
        type: String,
        label: "ULI",
        max: 200
    },
    profile: {
        type: Object,
        label: '2. Manpower Profile'
    },
    'profile.lastname': {
        type: String,
        label: "Last Name",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.firstname': {
        type: String,
        label: "First Name",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.middlename': {
        type: String,
        label: "Middle Name",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.street': {
        type: String,
        label: "Number, Street",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.barangay': {
        type: String,
        label: "Barangay",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.district': {
        type: String,
        label: "District",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.email': {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        label: "E-mail address"
    },
    'profile.contact': {
        type: String,
        label: "Contact No",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'profile.nationality': {
        type: String,
        label: "nationality",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200,
    },
    /*3.1 personal infomatoin*/
    personal: {
        type: Object,
        label: '3. Personal Information'
    },
    'personal.sex': {
        type: String,
        label: "sex"
        /*allowedValues: ['Male', 'Female'],
         optional: true,
         autoform: {
         type: 'select-checkbox-inline',
         options: [
         {label: "Male", value: "Male"},
         {label: "Female", value: "Female"}
         ]
         }*/
    },
    'personal.civilStatus': {
        type: String,
        label: "Civil Status",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.employmentStatus': {
        type: String,
        label: "Employment Status",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.employmentType': {
        type: String,
        label: "Employment Type",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.dateOfEmployment': {
        type: String,
        label: "Date of Employment",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.occupation': {
        type: String,
        label: "Occupation",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.employer': {
        type: String,
        label: "Name of Company or Employer",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.employerAddress': {
        type: String,
        label: "Company or Employer Address",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*3.4 birthdate*/
    'personal.MonthOfBirth': {
        type: String,
        label: "Month of Birth",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.DayOfBirth': {
        type: String,
        label: "Day of Birth",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.YearOfBirth': {
        type: String,
        label: "Year of Birth",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.age': {
        type: String,
        label: "Age",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*3.4 Bplace*/
    'personal.city': {
        type: String,
        label: "City/Municipality",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.province': {
        type: String,
        label: "Province",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'personal.region': {
        type: String,
        label: "Region",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*3.5 trainee*/
    'personal.educationalAttainment': {
        type: String,
        label: "Educational Attainment",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*4 learner/trainee/student*/
    clients: {
        type: Object,
        label: '4. Leaner/Trainee/Student (Clients) Classification:'
    },
    'clients.classification': {
        type: String,
        label: "classification",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*5*/
    NCAE: {
        type: Object,
        label: '5. Taken NCAE/YP4SC Before?'
    },
    'NCAE.boolean': {
        type: String,
        label: "yes or no",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'NCAE.Location': {
        type: String,
        label: "Where",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    'NCAE.Date': {
        type: String,
        label: "When",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        },
        max: 200
    },
    /*6*/
    scholar: {
        type: Object,
        label: '6. Student/Scholar Voucher Number'
    },
    'scholar.qualification': {
        type: String,
        label: "Course/Qualification",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        }
        ,
        max: 200
    }
    ,
    /*7 scholar only*/
    'scholar.voucherNumber': {
        type: String,
        label: "scholar voucher number",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        }
        ,
        max: 200
    }
    ,
    'scholar.scholarshipPackage': {
        type: String,
        label: "Scholarship Package",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        }
        ,
        max: 200
    }
    ,
    'scholar.dateRegistered': {
        type: String,
        label: "Month of Birth",
        autoform: {
            afFormGroup: {
                'formgroup-class': 'input-field'
            }
        }
        ,
        max: 200
    }
    ,
}))
;

if (Meteor.isServer) {
    Profiles.allow({
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

    Profiles.deny({
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
