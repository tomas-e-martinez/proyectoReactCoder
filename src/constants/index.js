export const BASE_URL = 'https://6499986279fbe9bcf83f9202.mockapi.io'

export const API_URLS = {
    PRODUCTS : {
        url: `${BASE_URL}/products`,
        config: {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
          }
        }
    }
}