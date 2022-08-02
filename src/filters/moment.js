import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', function (daraStr, pattern = 'YYYY-MM-DD HH:mm') {
  return moment(daraStr).format(pattern)
})
