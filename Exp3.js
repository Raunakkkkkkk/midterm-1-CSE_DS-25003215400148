

const fs = require('fs');


fs.writeFile('student.txt', 'Hello! My name is Raunak Mishra.', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }
    console.log('File created successfully!');

    
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File Content:', data);

        
        fs.appendFile('student.txt', '\nI am a B.Tech CSE student.', (err) => {
            if (err) {
                console.log('Error updating file:', err);
                return;
            }
            console.log('File updated successfully!');

            
            fs.readFile('student.txt', 'utf8', (err, updatedData) => {
                if (err) {
                    console.log('Error reading updated file:', err);
                    return;
                }
                console.log('Updated Content:', updatedData);

                
                fs.unlink('student.txt', (err) => {
                    if (err) {
                        console.log('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully!');
                });
            });
        });
    });
});
