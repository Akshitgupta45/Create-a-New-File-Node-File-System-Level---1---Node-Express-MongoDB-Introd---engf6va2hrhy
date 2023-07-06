const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = () => {
	// write code here
	// dont change function name

	fs.writeFile(fileName, fileContent, (error) => {
		if (error) {
			console.log("Error while creating file");
		}
		console.log("file is created");
	});
};
writeFile();

module.exports = { writeFile };
