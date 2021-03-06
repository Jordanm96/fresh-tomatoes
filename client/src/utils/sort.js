const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

  export const AZ = arr => arr.sort(compareKey('title'))
  export const ZA = arr => arr.sort(compareKey('title')).reverse()
  
  // export const lowestFirst = arr => arr.sort((a, b) => parseInt(a.rating) - parseInt(b.rating))
  // export const highestFirst = arr => arr.sort((a, b) => parseInt(b.rating) - parseInt(a.rating))
