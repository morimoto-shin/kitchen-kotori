import { storage } from '~/plugins/firebase'

const uploadFile = async (filePath: string, file: File) => {
  try {
    const uploadTask = await storage.ref(filePath).put(file)
    const imageUrl = await uploadTask.ref.getDownloadURL()
    return imageUrl
  } catch (error) {
    return Promise.reject(error)
  }
}

const deleteFile = async (filePath: string) => {
  try {
    console.log('ファイル削除', filePath)
    const ref = storage.ref(filePath)

    await ref.delete()
    console.log('ファイル削除 成功', filePath)
  } catch (error) {
    return Promise.reject(error)
  }
}

export { uploadFile, deleteFile }
