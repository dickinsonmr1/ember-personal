App.Router.map(function () {
    this.resource('index', { path: '/' });
    this.resource('coding');
    this.resource('gamecoding');
    this.resource('dancing');
    this.resource('music');   
    //this.resource('resume');
    this.resource('contact');
});

App.IndexRoute = Ember.Route.extend({
    model: function () { return Ember.$.getJSON("https://api.github.com/users/dickinsonmr1"); }
});

App.CodingRoute = Ember.Route.extend({
    //model: function (params) { return Ember.$.getJSON("https://api.github.com/users/" + params.login); }
    model: function () { return Ember.$.getJSON("https://api.github.com/users/dickinsonmr1"); }
});

App.GamecodingRoute = Ember.Route.extend({
    model: function() { return games; }
});

App.DancingRoute = Ember.Route.extend({
    model: function () { return games; }
});

App.MusicRoute = Ember.Route.extend({
    model: function () { return songs; }
});

//App.ResumeRoute = Ember.Route.extend({
//    model: function () { return songs; }
//});

App.ContactRoute = Ember.Route.extend({
    model: function () { return games; }
});

//App.MusicController = Ember.ObjectController.extend({
//    needs: ["music"],
//    repo: Ember.computed.alias("controllers.repository"),
//    issue: function () {
//        return Github.Issue.create();
//    }.property("repo.model"),
//    actions: {
//        submitIssue: function () {
//            var vals = this.getProperties("title", "body");
//            console.log(vals);

//            var issue = this.get("issue");


//            //var title = $("#new-issue-title").val();
//            //var body = $("#new-issue-body").val();
//            //var url = this.get("repo").get("issues_url");

//            alert("Issue faux submitted");
//            //console.log("Submitted " + issue.get("title") + " to " + url);


//            // reset it
//            this.set("issue", Github.Issue.create());
//            this.transitionToRoute("issues");

//            //Ember.$.post(url, {title: title, body: body}, function(result){
//            //success...
//            //});

//        }
//    }
//});
//App.UserIndexRoute = Ember.Route.extend({
//    model: function () { return this.modelFor('user'); }
//});