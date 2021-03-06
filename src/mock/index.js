import Mock from 'mockjs'

import {
  getUserInfo
} from './response/user'

import {
  getTableData
} from './response/data'

const Random = Mock.Random
/* Mock.mock('http://localhost:3000/getUserInfo', getUserInfo) */
/* Mock.mock(/\/getUserInfo/, 'post', {
  name: 'Magty'
}) */

Random.extend({
  fruit() {
    const fruit = ['apple', 'peach', 'banana']
    return this.pick(fruit)
  }
})

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)
/* Mock.setup({
  timeout: 500
}) */
export default Mock
