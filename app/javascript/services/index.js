import Api from './api'

const MyBooksService = {
    index: () => Api.get('/dashboard')
}

const TransitionService = {
    index: () => Api.get(`/transitions`),
    destroy: (id) => Api.delete(`/transitions/${id}`)
}

const UserService = {
    index: () => Api.get(`/users`)
}

export {MyBooksService, TransitionService, UserService}