import { API_ENDPOINT } from ".";

export const getJobs = async (type) => {

     const res = await fetch(`${API_ENDPOINT}/previousjobs?type=${type}`)
     const previousjobs = await res.json(); 
     return previousjobs;

    }