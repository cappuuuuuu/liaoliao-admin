import xhr from './xhr'

export function getMessage ({ body }) {
  return xhr({
    method: 'post',
    url: 'message',
    data: body
  })
}

export function deleteMessage ({ body }) {
  return xhr({
    method: 'delete',
    url: 'message',
    data: body
  })
}
