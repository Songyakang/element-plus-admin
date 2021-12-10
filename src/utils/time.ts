 const timeFmt = (time: Date | string, fmt: string = "yyyy-MM-dd hh-mm-ss") => {
  const date: Date = new Date(time)
  // console.log(date)
  fmt = fmt.replace(/ss/g, date.getSeconds().toString().padStart(2, '0'))
  .replace(/mm/g, date.getMinutes().toString().padStart(2, '0'))
  .replace(/hh/g, date.getHours().toString().padStart(2, '0'))
  .replace(/dd/g, date.getDate().toString().padStart(2, '0'))
  .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, '0'))
  fmt.replace(/(y)/g, (str) => {
    console.log(str)
    return str
  })
  console.log(fmt.replace(/ss/g, date.getSeconds().toString()))
}

// timeFmt(new Date(), "yyyy-MM-dd hh-mm-ss")

const json = {
  name: 'kang',
  info: {
    year: 24
  }
}

const say = ({info}: {info: object}) => {
  console.log(info)
}

// say(json)

const a: any = {
  name: 'kang',
  year: 23,
  phone: '15199995555'
}

const b: any = {
  name: '康'
}

for(let i in a){
  !b.hasOwnProperty(i) && (b[i] = a[i])
}

console.log(b)