import { Notification } from 'element-ui'
import router from '@/router'
import axios from 'axios'
import { timeout } from '@/utils'
import { constants } from '@/constants'
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
    params,
    withCredentials: true
  }

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data)
      })
      .catch(async err => {
        const errorMessage = err.response.data?.message ?? constants.apiErrorMessage.default.UNKNOWN

        // Because token is expired, router will redirect to login page
        if (errorMessage === constants.apiErrorMessage.auth.TOKEN_EXPIRED) {
          Notification.error({
            message: constants.notification.error.RELOGIN
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
