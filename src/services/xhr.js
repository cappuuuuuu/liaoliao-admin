import { Notification } from 'element-ui'
const axios = require('axios')
const { VUE_APP_SERVER_ORIGIN: SERVER_ORIGIN } = process.env

export default function xhr ({
  method = 'get',
  url = '/',
  data = null,
  params = null
}) {
  const options = {
    method,
    url: SERVER_ORIGIN + url,
    data,
    params
  }

  const response = axios(options)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      Notification.error({
        message: err.response.data?.message ?? 'Unknown Error'
      })

      return Promise.reject(err)
    })

  return response
}
