const path=require("path")
const fs=require("fs")
const event=require("events")
const os=require("os")
// QUESTION (1)
// function getCurrentPath(){
//     console.log({
//     File : __filename,
//     Dir:   __dirname
// })
// }
// getCurrentPath()
// QUESTION (2)
// let pathFile="/user/files/report.pdf"
// function getFileName(filePath){
//     console.log(path.basename(filePath))
    

// }
// getFileName(pathFile)
// QUESTION (3)
// function createFilePath() {
//     const pathFile = path.format({
//         dir: "/folder",
//         name: "app",
//         ext: ".js"
//     });
//     console.log(pathFile);
// }
// createFilePath();
// QUESTION (4)
// function parseFilePath(filePath) {
//     return path.parse(filePath);
// }
// console.log(parseFilePath("/docs/readme.md"));
// QUESTION (5)
// function getFileInfo(filePath) {
//     const pathFile = path.parse(filePath);
//     console.log({
//         Name: pathFile.name,
//         Ext: pathFile.ext
//     });
// }
// getFileInfo("/home/app/main.js");
// QUESTION (6)
// function checkIfAbsolute(filePath) {
//     return path.isAbsolute(filePath);
// }
// console.log(checkIfAbsolute("/home/user/file.txt"));
// QUESTION (7)
// function buildPath(...segments) {
//     return path.join(...segments);
// }
// console.log(buildPath("src", "components", "App.js"));
// QUESTION (8)
// function resolvePath(filePath) {
//     return path.resolve(filePath);
// }
// console.log(resolvePath("./index.js"));
// QUESTION (9)
// function joinPaths() {
//     return path.join("/folder1", "folder2", "file.txt");
// }
// console.log(joinPaths());
// QUESTION (10)
// function deleteFile(fileName) {
//     const filePath = path.resolve(fileName);
//     fs.unlink(filePath, (error) => {
//         if (error) {
//             console.log("PATH IS NOT FOUND !");
//         } else {
//             console.log(`${fileName} IS DELETED !`);
//         }
//     });
// }
// deleteFile("file.txt");
// QUESTION (11)
// function createFolder(folderName) {
//     try {
//         fs.mkdirSync(folderName);
//         console.log("SUCCESS");
//     } catch (error) {
//         console.log("FOLDER HAS BEEN ALREADY !");
//     }
// }

// createFolder("./folder");
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
// try {
//    const filePath = path.resolve(__dirname, "notes.txt");
//    let fileData=fs.readFileSync(filePath,{encoding:"utf8"})
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

