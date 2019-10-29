# node.js_app
Node.js application consists of 3 landing pages with a music theme. The server side was implemented using express.js.
By clicking the "Join Now" button on the "join.html" page, the user sends a POST request and sends the form data (for example,
name, email address and password) as a JSON file. On the server side, we catch the request, analyze the incoming JSON. A primitive 
authentication mechanism was implemented - by default user.json holds one user - Peter. Comparing the input from the user and the 
data from Peter, the server will forward the response. It will be passed as an argument to the window.alert() method.
