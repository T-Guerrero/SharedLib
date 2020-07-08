import Api from './api'

const apiSource = "api"

const DashboardService = {
    index: () => Api.get(`/${apiSource}/dashboard`),
    activeBook: (id) => Api.patch(`/${apiSource}/dashboard/active/${id}`),
    disableBook: (id) => Api.patch(`/${apiSource}/dashboard/disable/${id}`)
}

const UserService = {
    index: () => Api.get(`/${apiSource}/users`),
    show: (id) => Api.get(`/${apiSource}/users/${id}`)
}

const DeviseService = {
    update: (user) => Api.put(`/users`, user),
    cancelAccount: () => Api.delete('/users')
}

const TransitionService = {
    index: () => Api.get(`/${apiSource}/transitions`),
    create: (bookId) => Api.post(`/${apiSource}/transitions`, {book_id: bookId}),
    destroy: (id) => Api.delete(`/${apiSource}/transitions/${id}`)
}

const BookService = {
    index: () => Api.get(`/${apiSource}/books`),
    show: (id) => Api.get(`/${apiSource}/books/${id}`),
    destroy: (id) => Api.delete(`/${apiSource}/books/${id}`)
}

const InterestService = {
    create: (id) => Api.post(`/${apiSource}/books/${id}/interests`),
    destroy: (bookId, id) => Api.delete(`/${apiSource}/books/${bookId}/interests/${id}`)
}

const BorrowingService = {
    destroyByUser: (bookId, id) => Api.delete(`/${apiSource}/books/${bookId}/borrowings/user/${id}`),
    destroyByOwner: (bookId, id) => Api.delete(`/${apiSource}/books/${bookId}/borrowings/owner/${id}`)
}

const SearchService = {
    index: (query) => Api.get(`/${apiSource}/search?query=${query}`)
}

const CategoryService = {
    index: () => Api.get(`/${apiSource}/categories`),
    show: (id) => Api.get(`/${apiSource}/categories/${id}`)
}

export {DashboardService, UserService, TransitionService, BookService, InterestService, BorrowingService,
        SearchService, CategoryService, DeviseService}
