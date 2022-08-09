import xhr from './xhr'

export function getMessage (params) {
  return xhr({
    method: 'get',
    url: 'message',
    params
  })
}

export function deleteMessage ({ body }) {
  return xhr({
    method: 'delete',
    url: 'message',
    data: body
  })
}
