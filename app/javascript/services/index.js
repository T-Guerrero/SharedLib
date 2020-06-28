import Api from './api'

const DashboardService = {
    index: () => Api.get('/dashboard'),
    activeBook: (id) => Api.patch(`/dashboard/active/${id}`),
    disableBook: (id) => Api.patch(`/dashboard/disable/${id}`)
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
    index: () => Api.get('/books'),
    show: (id) => Api.get(`/books/${id}`),
    destroy: (id) => Api.delete(`/books/${id}`)
}

const InterestService = {
    create: (id) => Api.post(`/books/${id}/interests`),
    destroy: (bookId, id) => Api.delete(`/books/${bookId}/interests/${id}`)
}

const BorrowingService = {
    destroyByUser: (bookId, id) => Api.delete(`/books/${bookId}/borrowings/user/${id}`),
    destroyByOwner: (bookId, id) => Api.delete(`/books/${bookId}/borrowings/owner/${id}`)
}

const SearchService = {
    index: (query) => Api.get(`/search?query=${query}`)
}

export {DashboardService, UserService, TransitionService, BookService, InterestService, BorrowingService, SearchService}
