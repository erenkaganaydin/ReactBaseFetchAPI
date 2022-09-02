import{ post,get,postJSON } from "./request.js"

export const Login = data => post('/posts',data)
export const LoginFormSubmit = data => postJSON('/posts',data)

export const getPostDetail = id => get(`/posts/${id}`)
