import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strapi.myidea.fr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const login = async (credentials) => {
  const response = await api.post('/auth/local', credentials)
  return response.data
}

const register = async (userData) => {
  try {
    const response = await api.post('/auth/local/register', userData)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getRestaurant = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  login,
  register,
  getRestaurants,
  getRestaurant
}
