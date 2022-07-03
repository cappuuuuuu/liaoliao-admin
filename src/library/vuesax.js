import Vue from 'vue'

function iconClass (color) {
  const className = {
    success: 'bx bx-select-multiple',
    danger: 'bx bx-bug'
  }
  return `<i class='${className[color]}' ></i>`
}

export function initialVueSax (vuesax) {
  Vue.prototype.$vs = vuesax
}

export function notify (options) {
  const defaultConfig = {
    position: 'top-right',
    icon: iconClass(options.color),
    flat: true
  }

  return Vue.prototype.$vs.notification({
    ...defaultConfig,
    ...options
  })
}
