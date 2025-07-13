import type { Author, BlogPost, Project, WorkExperience } from "@/types"
import contentful from "contentful"

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
        slug: item.fields.slug,
        content: item.fields.content,
        author: item.fields?.author?.["fields"]?.["name"],
        image: {
          url: (item.fields.featuredImage as any)?.fields?.file?.url,
          alt: (item.fields.featuredImage as any)?.fields?.file?.fileName
        }
      }
    }
  })

  return posts
}

export const getSlugs = async () => {
  const res = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost"
  })

  const slugs = res.items.map((item) => {
    return {
      slug: item.fields.slug
    }
  })

  return slugs
}

export const getProjects = async () => {
  const projects = await contentfulClient.getEntries({
    content_type: "projects"
  })

  const res = projects.items.map((element) => {
    return {
      ...element.fields,
      image: {
        url: (element.fields.image as any)?.fields?.file?.url,
        alt: (element.fields.image as any)?.fields?.file?.fileName
      },
      tags: element.metadata.tags.map((e) => e.sys.id)
    } as Project
  })

  return res
}

export const getWorkExperiences = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "workExperience",
    order: ["-fields.startDate"]
  })

  const experiences = entries.items.map((item: any) => {
    return {
      companyName: item.fields.companyName,
      role: item.fields.role,
      startDate: item.fields.startDate,
      endDate: item.fields.endDate,
      description: item.fields.description,
      companyLogo: {
        url: `https:${item.fields.companyLogo?.fields?.file?.url}`,
        alt: item.fields.companyLogo?.fields?.title
      },
      companyWebsiteUrl: item.fields.companyWebsiteUrl,
      techs: item.fields.techs
    } as WorkExperience
  })

  return experiences
}
