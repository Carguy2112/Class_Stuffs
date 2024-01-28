const express = require('express');
const path = require('path')

const app = express();
app.use(express.static(path.resolve(__dirname,'./public')));


app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/about',(req, res)=>{
    res.send('About Page')
})

app.get('/api/data',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './data.json'))
})

app.get('*',(req, res)=>{
    return res.status(404).send('You obviously typed that wrong.')
})


app.listen(5000, ()=>{

})


/* exercise 1
    Create a new directory for your project and navigate to it in your terminal.
    Initialize a new Node.js project using npm init -y.
    Install express and nodemon using npm.
    Create a file named app.js.
    In app.js, import the express module and initialize an Express application.
    Set up the server to listen on a port of your choice.
    Add a script in your package.json to start your server using nodemon.
    Start your server using the script you added and verify that it's running without errors.
*/
/* exercise 2
    Create a route to handle GET requests to the home page (/) that sends a simple text response.
    Create another route to handle GET requests to an /about page that sends a different text response.
    Create a catch-all route to handle all other requests and sends a 404 error response.
    Test your routes using a browser or a tool like Postman to ensure they're working as expected.
*/
/* exercise 3
    Create a folder named public in your project directory.
    Inside the public folder, create an HTML file, a CSS file, and save an image.
    Link the CSS file in the HTML file and use the image in the HTML file.
    Update your Express application to serve static files from the public folder.
    Update the route for the home page (/) to send the HTML file as the response.
    Visit your home page in a browser and ensure the HTML, CSS, and image are being displayed correctly.
*/
/* exercise 4
    Create a JSON file named data.json with some sample data.
    Create a new route to handle GET requests to /api/data.
    In the route handler, read the data from data.json and send it as the response.
    Test your API using a browser or a tool like Postman to ensure it's working as expected and returning the correct data.
*/