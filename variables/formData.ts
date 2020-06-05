const formData = new FormData()

formData.set('key', 'kkkk')
formData.set('key_1', 'k_1')

console.log(formData)
console.log(formData.values().next())
console.log(formData.keys().next())
console.log(formData.getAll('key'))