import Api from './api'

const MyBooksService = {
    index: () => Api.get('/dashboard')
}

const UserService = {
    index: () => Api.get(`/users`),
    show: (id) => Api.get(`/users/${id}`)
}

const TransitionService = {
    index: () => Api.get(`/transitions`),
    create: (bookId) => Api.post(`/transitions`, {book_id: bookId}),
    destroy: (id) => Api.delete(`/transitions/${id}`)
}

const BookService = {
    show: (id) => Api.get(`/books/${id}`),
    destroy: (id) => Api.delete(`/books/${id}`)
}

const InterestService = {
    create: (id) => Api.post(`/books/${id}/interests`),
    destroy: (bookId, id) => Api.delete(`/books/${bookId}/interests/${id}`)
}

const BorrowingService = {
    destroy: (bookId, id) => Api.delete(`/books/${bookId}/borrowings/${id}`)
}

export {MyBooksService, UserService, TransitionService, BookService, InterestService, BorrowingService}