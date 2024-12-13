const fs = require("fs");

// Asynchronous Directory Creation and Deletion
fs.mkdir("Async", { recursive: true }, (err) => {
    if (err) {
        console.error("Error creating directory asynchronously:", err);
        return;
    }
    console.log("Asynchronous directory created successfully!");

// Delete the directory asynchronously
    // fs.rm("Async", { recursive: true, force: true }, (err) => {
    //     if (err) {
    //         console.error("Error deleting directory asynchronously:", err);
    //         return;
    //     }
    //     console.log("Asynchronous directory deleted successfully!");
    // });
});

// Synchronous Directory Creation and Deletion
try {
    fs.mkdirSync("Sync", { recursive: true });
    console.log("Synchronous directory created successfully!");

// Delete the directory synchronously
    // fs.rmSync("Sync", { recursive: true, force: true });
    // console.log("Synchronous directory deleted successfully!");
} catch (err) {
    console.error("Error creating or deleting directory synchronously:", err);
}
