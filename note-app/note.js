const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
    const notes = loadNote();
    // const duplicateNote = note.filter((notedata) => {
    //     return notedata.title === title;
    // })
    const duplicateNotes = notes.find((note) => {
        return note.title === title;
    })

    debugger

    if (!duplicateNotes) {

        notes.push({
            'title': title,
            'body': body
        })

        saveData(notes);
        console.log("new data")
    } else {
        console.log('duplicate data')
    }

}

const removeNote = (title) => {
    const note = loadNote();

    const removedNote = note.filter(function (notedata) {
        return notedata.title !== title;
    })

    if (note.length === removedNote.length) {
        const msg = 'no note found';
        console.log(chalk.red.inverse(msg))
    } else {
        const msg = 'note remove';
        console.log(chalk.green.inverse(msg))
    }

    saveData(removedNote);

}

const listNote = () => {

    const notes = loadNote();

    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {

    const notes = loadNote();

    const getNote = notes.find((note) => {
        return note.title === title;
    })

    if (getNote) {
        console.log(chalk.green.inverse(JSON.stringify(getNote)))
    } else {
        console.log(chalk.red.inverse("No matched"))
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
    "addNote": addNote,
    "removeNote": removeNote,
    "listNote": listNote,
    "readNote": readNote
}