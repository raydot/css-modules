import greetings from './robot.js'
import styles from './app.css'
var faker = require('faker')

document.write(greetings("Affirmative", "Dave"))

let element = `
  <div class="${styles.element}">
    <p>${faker.lorem.paragraph()}</p>
  </div>
`
document.write(element)
