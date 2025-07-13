import type { EntryFieldTypes } from "contentful"

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
    slug: EntryFieldTypes.Text
    author: Author
    content: EntryFieldTypes.RichText
    featuredImage: EntryFieldTypes.AssetLink
  }
}

export interface Project {
  id: string
  title: string
  link: string
  image: {
    url: string
    alt: string
  }
  tags: Array<string>
}

export interface WorkExperience {
  companyName: string
  role: string
  startDate: EntryFieldTypes.Date
  endDate?: EntryFieldTypes.Date
  description: EntryFieldTypes.RichText
  companyLogo: {
    url: string
    alt: string
  }
  companyWebsiteUrl: string
  techs: string[]
}

declare type NavLink = {
  title: string
  href: string
}
