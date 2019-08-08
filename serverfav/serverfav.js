// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

function httpfcn(filename, response) {
    fs.readFile(__dirname + filename, function(err, data) {
                if (err) throw err;
                // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
                // an html file.
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
              });
}
// Create a function for handling the requests and responses coming into our server
function handleRequest(req, response) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        // case "/":
        //     return displayRoot(res)
            // fs.readFile(__dirname + "/home.html", function(err, data) {
            //     if (err) throw err;
            //     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            //     // an html file.
            //     res.writeHead(200, { "Content-Type": "text/html" });
            //     res.end(data);
            //   });

        case "/favfoods":
            return httpfcn(path + ".html", response);
        //     return fs.readFile(__dirname + "/favfoods.html", function(err, data) {
        //         if (err) throw err;
        //         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        //         // an html file.
        //         res.writeHead(200, { "Content-Type": "text/html" });
        //         res.end(data);
        //       });

        // case "/favframeworks":
        //     return fs.readFile(__dirname + "/favframeworks.html", function(err, data) {
        //         if (err) throw err;
        //         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        //         // an html file.
        //         res.writeHead(200, { "Content-Type": "text/html" });
        //         res.end(data);
        //       });

        // case "/favmovies":
        //     return fs.readFile(__dirname + "/favmovies.html", function(err, data) {
        //         if (err) throw err;
        //         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        //         // an html file.
        //         res.writeHead(200, { "Content-Type": "text/html" });
        //         res.end(data);
        //       });

        default:
            return httpfcn("/home.html", response);
            // fs.readFile(__dirname + "/home.html", function(err, data) {
            //     if (err) throw err;
            //     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            //     // an html file.
            //     res.writeHead(200, { "Content-Type": "text/html" });
            //     res.end(data);
            //   });
    }

}

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});