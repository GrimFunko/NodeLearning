const fs = require('fs')
function getNotes() {
    data = fs.readFileSync('./Notes App/notes.txt','utf-8')
    return data
}

function writeNotes(note) {

}

module.exports = getNotes


// console.log('Welcome to the course!')
// function my_function(name,favourite_cereal) {
//     con = favourite_cereal.charAt(favourite_cereal.length - 1) == 's' ? 'are' : 'is'    
//     console.log(`Hello ${name}, just want you to know that ${favourite_cereal} ${con} soooo boring!!` )
// }
// module.exports = my_function