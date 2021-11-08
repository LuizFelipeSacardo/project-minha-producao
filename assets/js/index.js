import {DateHelpers} from './DateHelpers.js'

const welcomeTemplate = document.querySelector('#loginDate');
welcomeTemplate.innerText = `${DateHelpers.displayDate()}`

