const yargs = require('yargs');
const { argv } = require('yargs');
const fs = require('fs');
const { addnote, removenote, readnote, listnote, updatenote } = require('./notes');


yargs.command({
    command : 'add',
    describe : 'adding',
    builder : {

        title : {
            describe : 'adding title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'adding body',
            demandOption : true,
            type : 'string'
        }
 
    },
    handler : function() {
        addnote(argv.title,argv.body)
    }

})

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder : {
        title : {
            describe : 'Removing a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function () {
            removenote(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'readind notes',
    builder : {
        title : {
            describe : 'reading a note',
            demandOption : 'true',
            type : 'string'
        }
    },
    handler : function (argv) {
        readnote(argv.title)        
    }
}).argv
 
yargs.command({
    command : 'list',
    describe : 'notes list',
    handler : function () {
        listnote();
    }
})

yargs.command({
    command : 'update',
    describe : 'Updating note',
    builder : {
        title : {
            describe : 'update title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'update body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        updatenote(argv.title,argv.body)
    }
})

yargs.parse();