/**
 * Returns the basePath prefix for GitHub Pages deployment.
 * In production (GitHub Pages), this will be "/Portfolio-V2".
 * In local dev, this will be "".
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/**
 * Prepends the basePath to a public asset path.
 * Example: withBase("/logo.png") => "/Portfolio-V2/logo.png"
 */
export function withBase(path: string): string {
    return `${basePath}${path}`
}
