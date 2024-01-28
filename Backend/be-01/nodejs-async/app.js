const fs = require("fs");

fs.writeFile("./result.txt", "Hello World", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile('./result.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
      }
      console.log(result)
  })
});
