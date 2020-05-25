import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = options => {
  // console.log(options)
  /* return {
    name: 'Magty'
  } */
  const template = {
    'str|2-4': 'Magty',
    'name|5': 'Magty',
    'age|+2': 18,
    'num|4-18': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true,
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr1|2': ['a', 'b'],
    func: () => {
      return 'this is create by function'
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    email1: Mock.mock('@email'),
    range: Random.range(3, 10, 2),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    dateTime: Random.datetime('yyyy-MM-dd hh:mm'),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    img: Random.image('100x200', '#0f0', '#fff', 'Magty'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('的都发生过的个还好点发过来就', 2, 5),
    cname: Random.cname(),
    email2: Random.email('magty.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    // upperFirstletter: Random.upperfirstletter(),
    upperFirstLetter: Random.capitalize(),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    id: Random.id(),
    fruit: Random.fruit(),
    fruit2: '@fruit'
  }
  /* let i = 3
  const arr = []
  while (i--) {
    arr.push(template)
  } */
  return Mock.mock(template)
}
