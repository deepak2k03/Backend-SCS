const fs=require('fs');

// Create a new file and write to it
fs.writeFile("hey.txt","Hello World",function(err) {
    if (err) {
        return console.error(err);
    }
    else{
        console.log("file created successfully");
    }
});

// append content to the file
fs.appendFile('hey.txt', ' This is appended text.', function (err) {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended successfully');
});

// Read the content of the file
fs.readFile('hey.txt', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

//rename the file
fs.rename("hey.txt", "renamed_hey.txt", function (err) {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});

// copy the file
fs.copyFile('renamed_hey.txt', './copy/hey_copy.txt', (err) => {
    if (err) {
        console.error('Error copying file:', err);
        return;
    }
    console.log('File copied successfully');
});