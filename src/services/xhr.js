import { Notification } from 'element-ui'
import router from '@/router'
import axios from 'axios'
import { timeout } from '@/utils'
import CONSTANT_MESSAGE from '@/constants/message'
const { VUE_APP_SERVER_ORIGIN: SERVER_ORIGIN } = process.env

export default function xhr ({
  method = 'get',
  url = '/',
  data = null,
  params = null
}) {
  const options = {
    method,
    url: SERVER_ORIGIN + 'admin' + url,
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
        const isTokenExpired = errorMessage === CONSTANT_MESSAGE.api.error.TOKEN_EXPIRED

        // Because token is expired, router will redirect to login page
        if (isTokenExpired) {
          Notification.error({
            dangerouslyUseHTMLString: true,
            message: CONSTANT_MESSAGE.notification.error.RELOGIN
          })

          await timeout(1000)
          router.push('/')
        } else {
          Notification.error({
            message: errorMessage
          })
        }

        reject(err)
      })
  })
}
