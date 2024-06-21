export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `query Categories {Categories:limmit(300){
  docs{
   id
   title
   media{
        alt
        width
        height
        url
           }
}
}}`
