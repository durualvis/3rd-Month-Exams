function Printfile(filename) {
    let newfilename = filename.split(".")
    console.log(newfilename.at(-1))

}
Printfile("index.html")