import Api from './api';

const UserService = {
    index: () => Api.get(`/users`)
}

export default UserService;