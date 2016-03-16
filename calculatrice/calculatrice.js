var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

function encapsulerContenu(valeur) {
    return "" + valeur + "";
}

router.get("/addition/:un/:deux").handler(function (routingContext) {
    var un = parseInt(routingContext.request().getParam("un"));
    var deux = parseInt(routingContext.request().getParam("deux"));

    routingContext.response().end(encapsulerContenu(un + deux));
});

router.get("/soustraction/:un/:deux").handler(function (routingContext) {
    var un = parseInt(routingContext.request().getParam("un"));
    var deux = parseInt(routingContext.request().getParam("deux"));

    routingContext.response().end(encapsulerContenu(un - deux));
});

router.get("/multiplication/:un/:deux").handler(function (routingContext) {
    var un = parseInt(routingContext.request().getParam("un"));
    var deux = parseInt(routingContext.request().getParam("deux"));

    routingContext.response().end(encapsulerContenu(un * deux));
});

router.get("/division/:un/:deux").handler(function (routingContext) {
    var un = parseInt(routingContext.request().getParam("un"));
    var deux = parseInt(routingContext.request().getParam("deux"));

    routingContext.response().end(encapsulerContenu(un / deux));
});

server.requestHandler(router.accept).listen(80);
