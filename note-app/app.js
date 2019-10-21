const yargs = require('yargs');
const chalk = require('chalk');
const note = require('./note.js');

// 10-19 version
// console.log(getNotes());
// console.log(validator.isEmail("sd50712naver.com"));
// const msg = chalk.green.bold.inverse('Success!');
// console.log(msg);

//Customizing yargs
yargs.version('1.1.0');

//yargs create command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        note.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('remove a note');
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('read a note');
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('list notes');
    }
})


//add, remove, read, list

yargs.parse();
// console.log(yargs.argv);


