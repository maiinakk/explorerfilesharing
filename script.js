const File= require('./models/file');
const fs=require('fs');
const connectDB=require('./config/db');

async function deletedata(){
    const pastdate :new Date(Date.now() - 24 * 60 * 60 * 1000);
    const files=await File.find({ createdAt: {$lt: pastdate}});
    if(files.length){
        for(const file of files){
            try{
                fs.unlinkSync(file.path);
            await file.remove();
            console.log(`Succesfully deleted ${file.filename}`);

            }
            catch(err)
        {
            console.log(`Error while deleting ${err}`);
        }
    }
    console.log('job done');

    }
}
deletedata().then(process.exit);