    CREATE TABLE books(
        id serial PRIMARY KEY,
        name varchar(50),
        author varchar(30),
        pages int,
        price int,
        state varchar(25)
    );

    INSERT INTO books (name, author, pages, price, state)
VALUES
    ('The Silent Patient', 'Alex Michaelides', 336, 15, 'Available'),
    ('Atomic Habits', 'James Clear', 320, 20, 'Available'),
    ('Dune', 'Frank Herbert', 412, 18, 'Available'),
    ('The Hobbit', 'J.R.R. Tolkien', 310, 25, 'Available'),
    ('The Pragmatic Programmer', 'Andrew Hunt', 352, 30, 'Available'),
    ('Clean Code', 'Robert C. Martin', 464, 28, 'Available'),
    ('The Alchemist', 'Paulo Coelho', 208, 12, 'Available'),
    ('Sapiens', 'Yuval Noah Harari', 498, 22, 'Available'),
    ('1984', 'George Orwell', 328, 15, 'Available'),
    ('To Kill a Mockingbird', 'Harper Lee', 281, 18, 'Available');


