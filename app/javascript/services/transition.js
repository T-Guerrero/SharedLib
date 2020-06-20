import Api from './api';

const TransitionService = {
    index: () => Api.get(`/transitions`),
    destroy: (id) => Api.delete(`/transitions/${id}`)
}

export default TransitionService;