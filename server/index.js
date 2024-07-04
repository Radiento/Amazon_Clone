//Imports From Packages
const express = require('express');
const mongoose = require('mongoose');

//Imports from other files
const authRouter = require('./routes/auth.js');
const adminRouter = require('./routes/admin.js');
const productRouter = require('./routes/product.js');
const userRouter = require('./routes/user.js');


//INIT
const PORT = process.env.PORT || 3000;
const app = express();  
const DB = 'mongodb+srv://deepak:Deepak%2312@cluster0.l0kpaiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


//Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch(e => {
    console.log(e);
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected to port ${PORT}`)
});