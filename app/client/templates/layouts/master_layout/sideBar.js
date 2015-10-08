Template.SideBar.rendered = function () {
    $('.collapsible').collapsible({
        accordion: false
    });
};

Template.Home.events({
    'click .collapsible':function(e){
        console.log(e);
        $(e).collapsible({
            accordion: false
        });
    }
});