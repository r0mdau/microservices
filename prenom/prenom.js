var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

function encapsulerContenu(valeur) {
    return "" + valeur + "";
}

router.route("/:prenom").handler(function (routingContext) {
    var prenom = routingContext.request().getParam("prenom");

    routingContext.response().end(encapsulerContenu("Hello " + prenom));
});

router.route("/nombreDeLettre/:prenom").handler(function (routingContext) {
    var prenom = routingContext.request().getParam("prenom");

    routingContext.response().end(encapsulerContenu(prenom.length));
});

server.requestHandler(router.accept).listen(7001);