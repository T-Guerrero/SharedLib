import Api from './api';

const MyBooksService = {
  index: () => Api.get('/dashboard')
}

export default MyBooksService;
