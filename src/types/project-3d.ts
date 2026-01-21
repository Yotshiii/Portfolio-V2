export type Project3D = {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  /** Optional gallery images for the modal (falls back to `image`). */
  images?: string[]
  /** Optional content blocks for custom content in the modal. */
  blocks?: ContentBlock[]
  /** Technologies / tags shown on the card + modal. */
  tags: string[]
  /** Small label shown in the modal header. */
  category: string
  /** Primary link used by the modal "Launch" button. */
  link: string
  /** Optional report 1 download link. */
  downloadReport1?: string
  /** Optional report 2 download link. */
  downloadReport2?: string
  /** Optional presentation slides download link. */
  downloadPresentation?: string
}

export type ContentBlock = {
  /** Title of the content block. */
  title: string
  /** Optional content of the content block. */
  content?: string
  /** Optional list of items in the content block. */
  items?: string[]
  /** Optional id to group related blocks together. */
  groupId?: string
}
