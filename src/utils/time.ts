 const timeFmt = (time: Date | string, fmt: string = "yyyy-MM-dd hh-mm-ss") => {
  const date: Date = new Date(time)
  // console.log(date)
  fmt = fmt.replace(/ss/g, date.getSeconds().toString().padStart(2, '0'))
  .replace(/mm/g, date.getMinutes().toString().padStart(2, '0'))
  .replace(/hh/g, date.getHours().toString().padStart(2, '0'))
  .replace(/dd/g, date.getDate().toString().padStart(2, '0'))
  .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, '0'))
  fmt.replace(/(y)/g, (...args) => {
    console.log(args)
  })
  console.log(fmt.replace(/ss/g, date.getSeconds().toString()))
}

timeFmt(new Date(), "yyyy-MM-dd hh-mm-ss")