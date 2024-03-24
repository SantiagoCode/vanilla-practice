import './public/style.css'
import { setupCounter } from './counter.js'

setupCounter(document.querySelector('#counter'), document.querySelector('#reset'))

document.querySelector('#openNewWindow').addEventListener('click', () => {
  const currentUrl = window.location.href
  window.open(currentUrl, '_blank')
})
