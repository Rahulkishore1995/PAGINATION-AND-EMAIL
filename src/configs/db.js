const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://rahulkishore425:kishore_1995@myfirstdatabasecluster0.ad5cz.mongodb.net/PAGINATIONandEMAIL?authSource=admin&replicaSet=atlas-kc6aw3-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
        );
};

module.exports=connect;