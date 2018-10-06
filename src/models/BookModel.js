class BookModel {
    static mapToBookModel = (book) => ({
        id: book.id,
        title: book.title,
        coverImageUrl: book.imageLinks.thumbnail,
        authors: book.authors,
        shelf: book.shelf
    })
}

export default BookModel