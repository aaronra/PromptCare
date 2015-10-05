/*****************************************************************************/
/* Updatebranch: Event Handlers */
/*****************************************************************************/
Template.Updatebranch.events({
});

/*****************************************************************************/
/* Updatebranch: Helpers */
/*****************************************************************************/
Template.Updatebranch.helpers({
    selectedBranch:function(){
        return Branches.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* Updatebranch: Lifecycle Hooks */
/*****************************************************************************/
Template.Updatebranch.created = function () {
};

Template.Updatebranch.rendered = function () {
};

Template.Updatebranch.destroyed = function () {
};
