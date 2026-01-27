const fs = require('fs');
const path = require("path");

const filePath = path.join(__dirname, "hello.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(data);
  }
});



// fs.mkdir("Coders", (err)=>{
//     if(err){
//         console.log("Error: ",err);
//     }else{
//         console.log("Folder created..");
//     }
// })

// console.log([] == ![]);  // True.