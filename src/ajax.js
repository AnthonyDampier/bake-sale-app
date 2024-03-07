const apiHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitialDeals() {
        const request = apiHost + '/api/deals';
        let response = await fetch(request);
        let responseJson = await response.json();
        const mockData = [{
            "title": "25% off",
            "price": 100,
            "image": "https://via.placeholder.com/150",
            "id": 1
        }, 
        {
            "title": "50% off",
            "price": 100,
            "image": "https://via.placeholder.com/150",
            "id": 2
        }];
        return mockData;
    }
}