const mongoose= require("mongoose");

const connectDatabase=()=>{
    const URI = process.env.DB_URI;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!');
console.log(URI);
});
}
module.exports=connectDatabase;