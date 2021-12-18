import axios from 'axios'

const API = axios.create({
	baseURL: 'https://meuapp.carlosdias2.repl.co'
})

export default API;