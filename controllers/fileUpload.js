 const File = require("../models/File");

 //localFileupload ->handler function

 exports.localFileUpload = async (req,res)=>{
    try{
        //fetch file from request
        const file = req.files.file; // fetch file from ....
        console.log("file aa gaye ->" , file );

        // create path where file need to be stored on server
        let path = __dirname + "/files/"+ Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->", path)

        //add path to the move ftn
        file.mv(path, (err)=>{
            console.log(err);
        });

        //create a successful response
        res.json({
            success: true,
            message : "Local file upload Successfully",
        });
    }
    catch(error){
        console.log(error);
    }
 }