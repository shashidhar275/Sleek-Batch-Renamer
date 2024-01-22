const fs = require('fs');
const path = require('path');
const {replaceThis,replaceWith,preview,folder} = require('./config/configFile');
console.log(folder);
try{
    fs.readdir(folder,(err,files)=>{
        if(err){
            console.error(err);
        }else{
            console.log(files);
            files.forEach(file=>{
                const oldFile=path.join(folder,file);
                const newFile = path.join(folder,file.replaceAll(replaceThis,replaceWith));
                if(!preview)
                {
                    if(oldFile !== newFile)
                    {
                        fs.rename(oldFile,newFile,()=>{  //The reason for callBack(cb) is to get clarified weather the rename happened 
                            console.log("Rename Successful");
                        });                        
                    }
                }else{
                    if(oldFile !== newFile) console.log(oldFile + ' will be replaced with ' + newFile);  
                }
            })
        }
    })
}catch(error){
    console.error(error);
}
