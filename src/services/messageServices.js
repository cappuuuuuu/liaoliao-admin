import xhr from './xhr'

export function getMessage (params) {
  return xhr({
    method: 'get',
    url: 'message',
    params
  })
}
