import { uploadFile } from '@/services/fileUpload/fileUploadApi';

export async function fileUploadService(file: any, id: any) {
  return await uploadFile(file, id);
}
