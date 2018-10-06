class BookModel {
    static mapToBookModel = (book) => ({
        id: book.id,
        title: book.title,
        coverImageUrl: (book.imageLinks && book.imageLinks.thumbnail) 
            ? book.imageLinks.thumbnail : 'https://png.icons8.com/windows/96/000000/book.png',
        authors: (book.authors) ? book.authors : [],
        shelf: (book.shelf) ? book.shelf : 'none'
    })
}

export default BookModel