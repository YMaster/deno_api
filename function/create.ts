const createFile = async () => {
  const file = await Deno.create('./files/create_file.txt')
  console.log(file)
}
createFile()

const fileSync = Deno.createSync('./files/create_files_sync.txt')
console.log(fileSync)
