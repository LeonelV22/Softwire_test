
export async function useUploadFile(payload) {
  return await fetch("/api/hello", {
    method: "POST",
    body: payload,
  })
}
