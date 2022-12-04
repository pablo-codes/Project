import http from '../http-common'

const getAll = () => {
   return http.get("/all-users")
}
const update = (id, data) => {
   return http.put(`/edit-topic/${id}`, data)
}
const get = (id) => {
   return http.get(`/get-topic/${id}`)
}
const blogService = { getAll, get,update }
export default blogService