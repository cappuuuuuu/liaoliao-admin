import Vue from 'vue'

function iconClass (color) {
  const className = {
    success: 'bx bx-select-multiple',
    danger: 'bx bx-bug'
  }
  return `<i class='${className[color]}' ></i>`
}

const defaultConfig = {
  notify (options) {
    return {
      position: 'top-right',
      icon: iconClass(options.color),
      flat: true
    }
  },
  loading: {
    type: 'points',
    color: '#fff',
    background: 'rgba(0, 0, 0, .85)'
  }
}

export function initialVueSax (vuesax) {
  Vue.prototype.$vs = vuesax
}

export function notify (options) {
  return Vue.prototype.$vs.notification({
    ...defaultConfig.notify(options),
    ...options
  })
}

export function loading (options) {
  return Vue.prototype.$vs.loading({
    ...defaultConfig.loading,
    ...options
  })
}
