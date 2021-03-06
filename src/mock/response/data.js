import {
  doCustomTimes
} from '@/lib/tools'
import Mock from 'mockjs'

export const getTableData = () => {
  const template = {
    name: '@cname',
    'age|18-25': 0,
    email: '@email'
  }
  const arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
