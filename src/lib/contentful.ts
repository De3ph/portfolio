import contentful, { type EntryFieldTypes } from "contentful"

export interface Author {
  contentTypeId: "author"
  fields: {
    name: EntryFieldTypes.Text
    avatar: EntryFieldTypes.AssetLink
  }
}

export interface BlogPost {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Text
    author: Author
    content: EntryFieldTypes.RichText
    featuredImage: EntryFieldTypes.AssetLink
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com"
})

export const getAuthors = async () => {
  const res = await contentfulClient.getEntries<Author>({
    content_type: "author"
  })

  return res?.items
}

export const getPosts = async () => {
  const res = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost"
  })

  const posts = res.items.map((item) => {
    return {
      id: item?.sys.id,
      createdAt: item?.sys.createdAt,
      fields: {
        title: item.fields.title,
        content: item.fields.content.content,
        author: item.fields?.author?.fields?.name,
        image: item.fields.featuredImage
      }
    }
  })

  return posts
}
