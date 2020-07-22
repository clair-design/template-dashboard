const user = require('./user.js')
const notice = require('./notice.js')
const chart = require('./chart.js')
const project = require('./project.js')

module.exports = {
  ...user,
  ...notice,
  ...chart,
  ...project
}
