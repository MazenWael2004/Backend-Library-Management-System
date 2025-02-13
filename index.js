import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB.password,
  port: process.env.DB_PORT
});

db.connect();



const app = express();
const port = 3000;

// const books = [{
//     bookName: "Rudest Book Ever",
//     bookAuthor: "Shwetabh Gangwar",
//     bookPages: 200,
//     bookPrice: 240,
//     bookState: "Available"
// },
// {
//     bookName: "Do Epic Shit",
//     bookAuthor: "Ankur Wariko",
//     bookPages: 200,
//     bookPrice: 240,
//     bookState: "Available"
// }
// ]

app.use(bodyParser.urlencoded({ extended: true }));

// Get all books.
app.get('/',  async (req, res) => { 
  const result = await db.query('SELECT * FROM books ORDER BY id ASC');
  const books = result.rows;
   res.render("home.ejs",{Books: books});
});

// Create a book.
app.post("/",(req,res)=>{
const bookName = req.body.bookName;
const bookAuthor = req.body.bookAuthor;
const bookPages = req.body.bookPages;
const bookPrice = req.body.bookPrice;
const bookState = "Available";

db.query('INSERT INTO books(name,author,pages,price,state) VALUES($1,$2,$3,$4,$5)',[bookName,bookAuthor,bookPages,bookPrice,bookState]);





res.redirect("/");// Don't forget the response 

});

// Issue Books
app.post("/issue", async (req, res) => {
  const bookName = req.body.bookName;
  console.log(bookName);

  db.query('UPDATE books SET state = $1 WHERE name = $2', ["Issued", bookName], (err, result) => {
    if (err) {
      console.error("Error updating book state:", err.message);
      return res.status(500).send("Database error");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Book not found");
    }

    console.log("Book issued successfully!");
    res.redirect("/");
  });
});


// Return Books
app.post("/return",(req,res)=>{
  const bookName = req.body.bookName;
  db.query('UPDATE books SET state = $1 WHERE name = $2', ["Returned", bookName], (err, result) => {
    if (err) {
      console.error("Error updating book state:", err.message);
      return res.status(500).send("Database error");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Book not found");
    }

    console.log("Book Returned successfully!");
   
  });
  // for(let i = 0; i< books.length; i++){
  //   if(books[i].bookName=== bookName){
  //     books[i].bookState = "Returned";
  //   }
  // }
  res.redirect("/");// Don't forget the response 
});

app.post("/delete",(req,res)=>{
 const bookName = req.body.bookName;
  // for(let i = 0; i< books.length; i++){
  //   if(books[i].bookName=== bookName){
  //     books.splice(i,1);
  //   }
  // }
 db.query('DELETE FROM books WHERE name = $1',[bookName],(err,result)=>{
  if(err){
    console.error("Error deleting book: ", err.message);
    return res.status(500).send("Database error");
  }
  console.log("Book deleted Sucessfully!");
  res.redirect("/");
 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});