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
    book_id INT  NOT NULL REFERENCES books(book_id) ON DELETE CASCADE,
    chapter_id NOT NULL INT,
    content TEXT NOT NULL,
    CONSTRAINT one_chap_per_book UNIQUE (chapter_id, book_id)
);

/*sample data*/
INSERT INTO books(title,author,production_year) VALUES ('Harry Potter', 'JK Rowling', '2001'); 
INSERT INTO books(title,author,production_year) VALUES ('The Witcher', 'Andrzej Sapkowski', '2004'); 
INSERT INTO books(title,author,production_year) VALUES ('The Lord of the Rings', 'Tolkien', '1999');

INSERT INTO book_content(book_id, chapter_id, content) VALUES (1, 1, 'placeholder blablablablabla');
INSERT INTO book_content(book_id, chapter_id, content) VALUES (1, 2, 'placeholder2 blablablabla');
