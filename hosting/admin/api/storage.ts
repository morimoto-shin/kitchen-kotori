import { storage } from '~/plugins/firebase'

const upload = async (filePath: string, filePayload: File) => {
  try {
    if (!filePath) {
      throw new Error('filePath is required')
    }
    const uploadTask = await storage.ref(filePath).put(filePayload)
    const imageUrl = await uploadTask.ref.getDownloadURL()
    return imageUrl
  } catch (error) {
    return Promise.reject(error)
  }
}

const deleteDoc = async (filePath: string) => {
  try {
    console.log('ファイル削除', filePath)
    const ref = storage.ref(filePath)

    await ref.delete()
    console.log('ファイル削除 成功', filePath)
  } catch (error) {
    return Promise.reject(error)
  }
}

export { upload, deleteDoc }
