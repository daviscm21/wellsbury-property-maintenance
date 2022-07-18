import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'previousjobs' 

export const getJobs = async (type) => {
     const request = axios.get(`${baseUrl}?type=${type}`)
     return request.then(response => response)

    }