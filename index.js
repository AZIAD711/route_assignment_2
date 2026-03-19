const path=require("path")
const fs=require("fs")
const event=require("events")
const os=require("os")
const console = require("console")
// QUESTION (1)
// console.log(__filename)
// QUESTION (2)
// let pathFile=__filename
// console.log(path.basename(pathFile))
// QUESTION (3)
// let pathFile=__filename
// console.log(path.parse(pathFile))
// QUESTION (4)
// let pathFile=__filename
// console.log(path.extname(pathFile))
// QUESTION (5)
// let pathFile=path.parse(__filename)
// console.log({
//     Name:pathFile.name,
//     Ext:pathFile.ext
// })
// QUESTION (6)
// let pathFile=__filename
// console.log(path.isAbsolute(pathFile))
// QUESTION (7)
// console.log(path.join("src","components","App.js"))
// QUESTION (8)
// console.log(path.resolve("./index.js"))
// QUESTION (9)
// console.log(path.join("/folder1, folder2/file.txt","/folder1/folder2/file.txt"))
// QUESTION (10)
// const filePath=path.resolve("file.txt")
// fs.unlink(filePath,(error)=>{
// if(error){
//     console.log("PATH IS NOT FOUND !")
// }
// else{
//     console.log(`THE file.txt IS DELETED !`)
// }
// })
// QUESTION (11)
// fs.mkdirSync("./folder")
// console.log("SCCUESS")
// QUESTION (12)
// let newEvent=new event()
// newEvent.on("start",()=>{
//     console.log("Welcome event triggered !")
// })
// newEvent.emit("start")
// QUESTION (13)
// let newEvent=new event()
// newEvent.on("login",(usrename)=>{
//     console.log(`User Logged in : ${usrename}`)
// })
// newEvent.emit("login","ahmed")
// QUESTION (14)
// let filePath=path.resolve("./notes.txt")
// try {
//    let fileData=readFileSync(filePath,{encoding:"utf8"})
//    console.log(fileData) 
// } catch (error) {
//   console.log("PATH IS NOT FOUND !")  
// }
// QUESTION (15)
// let filePath = path.resolve("./async.txt");
// try {
//     fs.writeFileSync(filePath,"Async Save\n")
//     console.log("SCCUESS")
// } catch (error) {
//     console.log(`PATH IS NOT FOUND !`)
// }
// QUESTION (16)
// let filePath=path.resolve("./notes.txt")
// let exsiteFile=fs.existsSync(filePath)
// console.log(exsiteFile)
// QUESTION (17)
// console.log({
//     Platform:os.platform(),
//     Arch:os.arch()
// })

