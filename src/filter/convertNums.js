export default function convertNums () {
  return (val) => {
    var value = val
      if (val.length >= 2 && (val[index] === 'k' || val[index] === 'K')) {
            val = val.split('').slice(0,index).join('')
            value =  val * 1000
            return value
      }
        if (val.length >= 2 && val[index] === 'm' || val[index] === 'M') {
            val = val.split('').slice(0,index).join('')
            value = val * 100000
            return value
        }
        return value
  }
}