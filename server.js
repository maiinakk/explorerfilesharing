const  express=require('express');
const app=express();
const dotenv =require("dotenv");
const connectDatabase=require("./config/db");
const path=require('path');


dotenv.config({path:"./config/.env"});

connectDatabase();
//Template design
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.static('public'));




//routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));




app.listen(process.env.PORT,()=>{

    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
