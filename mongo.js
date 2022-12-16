// test this with node mongo.js <password>
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstackopen:${password}@cluster0.nlkhh49.mongodb.net/noteApp?retryWrites=true&w=majority
`;

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Creating a new note
mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");

    const note = new Note({
      content: "More content my friend",
      date: new Date(),
      important: false,
    });

    return note.save();
  })
  .then(() => {
    console.log("note saved!");
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));

// print all the notes in the database
// mongoose
//   .connect(url)
//   .then(() => {
//     Note.find({}).then((result) => {
//       console.log(result);
//       result.forEach((note) => {
//         console.log(note);
//       });
//       mongoose.connection.close();
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
