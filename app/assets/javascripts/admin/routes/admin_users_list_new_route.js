(function() {

  Discourse.AdminUsersListNewRoute = Discourse.Route.extend({
    setupController: function(c) {
      return this.controllerFor('adminUsersList').show('new');
    }
  });

}).call(this);
