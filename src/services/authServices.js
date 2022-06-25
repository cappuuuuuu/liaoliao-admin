import xhr from './xhr'

export function loginAuth ({ body }) {
  return xhr({
    method: 'post',
    url: 'admin/login',
    data: body
  })
}

export function getOperatorAccount () {
  return xhr({
    method: 'get',
    url: 'admin/operator'
  })
}

export function operatorLogout ({ body }) {
  return xhr({
    method: 'post',
    url: 'admin/logout',
    data: body
  })
}
