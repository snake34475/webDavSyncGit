const fs = require('fs');
const {client}=require('./webdavClinet.js')
const path=require('path');
async function logDirectoryContents(directory) {
  const directoryItems = await client.getDirectoryContents(directory);

  const directoryItemObjects = []; // create an empty array to store objects

  for (const item of directoryItems) {
    const currentItem = {...item}; // create an empty object for the current item
    
    if (item.type === "directory") {
      console.log('item.filename',item.filename)
      currentItem.directoryContents = await logDirectoryContents(item.filename);
      
    } else {
      const downloadLink = client.getFileDownloadLink(item.filename);
      currentItem.downloadLink = downloadLink;
      const fileData = await getFileContents(item.filename);
      const localFilePath = path.join(__dirname, item.filename);
      
      const directory = path.dirname(localFilePath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      fs.writeFileSync(localFilePath, fileData);
    }
    directoryItemObjects.push(currentItem); // add the current item object to the array
  }
  return directoryItemObjects; // return the array of objects
}

async function getFileContents(filePath) {
  try {
    const fileContents = await client.getFileContents(filePath);
    return fileContents;
  } catch (error) {
    console.error(`Error while getting file contents for ${filePath}: ${error}`);
    return null; // or any other default/error value you want to return
  }
}

module.exports ={
  logDirectoryContents
}