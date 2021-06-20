export const px2vw = (px: number, viewportBase = 375): string => {
  return `${((px / viewportBase) * 100).toFixed(6)}vw`
}
