const fs = require('fs');

const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    const note = loadNote();
    const duplicateNote = note.filter(function (notedata) {
        return notedata.title === title;
    })

    if (duplicateNote.length === 0) {

        note.push({
            'title': title,
            'body': body
        })

        saveData(note);
        console.log("new data")
    } else {
        console.log('duplicate data')
    }

}

function saveData(note) {
    const JSONData = JSON.stringify(note);
    fs.writeFileSync('note.json', JSONData);
}

const loadNote = function () {

    try {
        const jsonBuffer = fs.readFileSync('note.json');
        const jsonData = jsonBuffer.toString();
        return JSON.parse(jsonData);
    } catch (e) {
        return [];
    }


}

module.exports = {
    "getNotes": getNotes,
    "addNote": addNote
}