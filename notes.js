const fs = require('fs');

const listnote = () => {
    const notes = loadnotes();

    return console.log(notes);
}

const updatenote = (title,body) => {
    const notes = loadnotes();

    const duplicatenote = notes.find((note) => {
        return note.title === title
    })

    if (duplicatenote) {

        if (duplicatenote.body === body) {
            return console.log('Body Element Is Same As Previous')
        }
        else {
            duplicatenote.body = body

            const newvalue = {
                title : title,
                body : duplicatenote.body
            }
    
            console.log(`New Body of Title ${newvalue.title} is ${newvalue.body}`); 
           
            savenote(notes);
        }
    }

    else{
        return console.log("No Such Item Found In Title To Update")
    }
}

const readnote = (title) => {
    const notes = loadnotes();

    var notetoread = notes.find((note) => {
       return  note.title === title
    })

    if (notetoread) {
      return  console.log(`Your Searching Title is ${notetoread.title} and body is ${notetoread.body}`) 
    }
    else{
         return console.log('No Such Item Found')
    }
}


const removenote = (title) => {

    const notes = loadnotes();



    const notestokeep = notes.filter((note) => {
        return note.title != title
    })

    console.log(notestokeep);

    if (notes.length > notestokeep.length) {
        savenote(notestokeep)

        console.log(`Node Deleted Having Title = ${title}`)
    }

    else{
        return console.log('No Note Matched')    
    }

     
    }

const addnote = (title,body) => {
    const notes = loadnotes()
    
    const newdata = {
        title : title,
        body : body
    }

    const duplicatenode = notes.filter((note) => {
        return note.title === title
    })


    if (duplicatenode.length) {
       return console.log('Note Title Already Exists')
    }

    else{

        console.log(`Note Added! New Note Title is ${newdata.title} and Body is ${newdata.body}`)

        notes.push(newdata)

        savenote(notes);
    }


    
}

const loadnotes = () => {
    try{
        const datbuffr = fs.readFileSync('notes.json')
        const data_to_string = datbuffr.toString()
        const data_json = JSON.parse(data_to_string)
    
        return data_json
    }
    catch{
        return []
    }
}

const savenote = (notes) => {

    notes_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_string);
    
}

module.exports = {
    addnote,removenote,readnote,listnote, updatenote
}