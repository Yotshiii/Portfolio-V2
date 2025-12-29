export type Project3D = {
  id: string
  title: string
  description: string
  /**
   * Path to an image in /public (e.g. "/projects/my-project.jpg").
   * Used as a background image for the 3D card.
   */
  image: string
  /** Optional gallery images for the modal (falls back to `image`). */
  images?: string[]
  /** Technologies / tags shown on the card + modal. */
  tags: string[]
  /** Small label shown in the modal header. */
  category: string
  /** Primary link used by the modal "Launch" button. */
  link: string
}
