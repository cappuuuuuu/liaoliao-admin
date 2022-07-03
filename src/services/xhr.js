import { notify } from '@/library/vuesax'
import router from '@/router'
import axios from 'axios'
import { timeout } from '@/utils'
import CONSTANT_MESSAGE from '@/constants/message'
const { VUE_APP_SERVER_ORIGIN: SERVER_ORIGIN } = process.env

const errorHandle = {
  // 401: access_token is not valid, router will redirect to login page
  401: async function () {
    notify({ text: CONSTANT_MESSAGE.notification.error.RELOGIN, color: 'danger' })

    await timeout(1000)
    router.push('/')
  }
}

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
    params,
    withCredentials: true
  }

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data)
      })
      .catch(async err => {
        const errorMessage = err.response.data?.message ?? CONSTANT_MESSAGE.api.error.UNKNOWN
        const errorStatus = err.response.status

        errorHandle[errorStatus]
          ? errorHandle[errorStatus]()
          : notify({ text: errorMessage, color: 'danger' })

        reject(err)
      })
  })
}
