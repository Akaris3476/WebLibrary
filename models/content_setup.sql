/*present relations*/
CREATE DATABASE Library;

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title varchar(32) NOT NULL UNIQUE,
    author varchar(32) DEFAULT 'Unknown',
    production_year integer CHECK (production_year >= 1000 AND production_year <= 9999) DEFAULT NULL
    
    /*add description default null*/
);

CREATE TABLE book_content (
    content_id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(book_id),
    content TEXT NOT NULL
);

/*sample data*/
INSERT INTO books(title,author,production_year) VALUES ('Harry Potter', 'JK Rowling', '2001'); 
INSERT INTO books(title,author,production_year) VALUES ('The Witcher', 'Andrzej Sapkowski', '2004'); 
INSERT INTO books(title,author,production_year) VALUES ('The Lord of the Rings', 'Tolkien', '1999');

INSERT INTO book_content(book_id, content) VALUES (1, 'placeholder blablablablabla');
