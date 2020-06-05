const a = btoa(encodeURIComponent('爱我中华'))

const b = decodeURIComponent(atob(a))


console.log(a, '\n', b)