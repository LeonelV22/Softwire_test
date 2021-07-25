
function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export async function useUploadFile(payload) {
  const result = await fetch("/api/hello", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  return {
    invalidRows: result,
  }
}
