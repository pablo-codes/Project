import http from '../http-common'

const getAll = () => {
   return http.get("/all-blogs")
}
const update = (id, data) => {
   return http.put(`/edit-topic/${id}`, data)
}
const updateImages = (id, data) => {
   return http.put(`/edit-image/${id}`, data)
}
const get = (id) => {
   return http.get(`/get-topic/${id}`)
}
const getImages = (id) => {
   return http.get(`/get-image/${id}`)
}

const blogService = { getAll, get, update, getImages, updateImages }
export default blogService