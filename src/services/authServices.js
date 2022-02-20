import xhr from './xhr'

export default function loginAuth ({ body }) {
  return xhr({
    method: 'post',
    url: 'admin/auth',
    data: body
  })
}
