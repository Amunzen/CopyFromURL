

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export function setsAreEqual<T>(setA: Set<T>, setB: Set<T>): boolean {
  // Check if both sets have the same size
  if (setA.size !== setB.size) return false

  // Check if every element in setA is also in setB
  for (const elem of setA) {
    if (!setB.has(elem)) return false
  }

  return true
}


export function validateSquareImage(file: File) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("The provided file is not an image."))
      return
    }

    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url) // Clean up the URL object
      if (img.width === img.height) {
        resolve(true)
      } else {
        resolve(false)
      }
    }

    img.onerror = () => {
      URL.revokeObjectURL(url) // Clean up the URL object
      reject(new Error("There was an error loading the image."))
    }

    img.src = url
  })
}

export const slashSeparatedStringRegex = /^(?!\/)(?!.*\/$)(?!.*\/ )(?!.* \/).*$/
