const fs = require("fs");
//Create
fs.writeFile("darsh.txt", "Bonjour just created the file!!", (err) => {
if (err) throw err;
console.log("File created successfully.");
});
//write
const newData = "THis is the new data added Holla";
fs.writeFile("darsh.txt", newData, (err) => {
if (err) throw err;
console.log("Data written to the file successfully.");
});
//read
fs.readFile("darsh.txt", "utf8", (err, data) => {
if (err) throw err;
console.log("File contents:", data);
});
//rename
fs.rename("darsh.txt", "dmz.txt", (err) => {
if (err) throw err;
console.log("File renamed successfully.");
});
//append
const appendData = "\n Chess is passion in this passionate world";
fs.appendFile("dmz.txt", appendData, (err) => {
if (err) throw err;
console.log("Data appended to the file successfully.");
});
//create file and delete
fs.writeFile("del.txt", "Works on.", (err) => {
if (err) throw err;
console.log("File created successfully.");
});
fs.unlink("del.txt", (err) => {
if (err) throw err;
console.log("File deleted successfully.");
});
