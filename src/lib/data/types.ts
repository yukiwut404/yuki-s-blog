export type LocaleText = { titleJa?: string | null; titleVi?: string | null; shortDescriptionJa?: string | null; shortDescriptionVi?: string | null; descriptionJa?: string | null };

export type Hero = {
  id: string;
  headline: string;
  subheadline?: string | null;
  bio: string;
  resumeUrl?: string | null;
  ctaButtons?: Array<{label: string; url: string; variant?: string}> | null;
  headlineJa?: string | null;
  headlineVi?: string | null;
  subheadlineJa?: string | null;
  subheadlineVi?: string | null;
  bioJa?: string | null;
  bioVi?: string | null;
  ctaButtonsJa?: Array<{label: string; url: string; variant?: string}> | null;
  updatedAt: Date;
};

export type Project = {
  id: string; slug: string; title: string; shortDescription: string;
  description?: string | null; problem?: string | null; solution?: string | null;
  role?: string | null; techTags: string[]; images: unknown; thumbnailImage: string;
  liveUrl?: string | null; repoUrl?: string | null; featured: boolean;
  displayOrder: number; status: "DRAFT" | "PUBLISHED"; startDate?: Date | null; endDate?: Date | null;
  titleJa?: string | null; titleVi?: string | null; shortDescriptionJa?: string | null; shortDescriptionVi?: string | null; descriptionJa?: string | null; descriptionVi?: string | null;
  problemJa?: string | null; solutionJa?: string | null; roleJa?: string | null; problemVi?: string | null; solutionVi?: string | null; roleVi?: string | null;
  createdAt: Date; updatedAt: Date;
};
export type PublicProject = Pick<Project,"id"|"slug"|"title"|"shortDescription"|"techTags"|"featured"|"displayOrder"|"startDate"|"endDate"|"liveUrl"|"repoUrl"|"titleJa"|"titleVi"|"shortDescriptionJa"|"shortDescriptionVi">;
export type FeaturedProject = Pick<Project,"id"|"slug"|"title"|"shortDescription"|"techTags"|"liveUrl"|"repoUrl"|"titleJa"|"titleVi"|"shortDescriptionJa"|"shortDescriptionVi">;
export type AdjacentProjects = {prev:{slug:string;title:string;titleJa:string|null;titleVi:string|null}|null;next:{slug:string;title:string;titleJa:string|null;titleVi:string|null}|null};

export type BlogPost = {
  id:string; slug:string; title:string; content:string; excerpt:string; featuredImage?:string|null;
  tags:string[]; readTime?:number|null; status:"DRAFT"|"PUBLISHED"; publishedAt?:Date|null;
  titleJa?:string|null; contentJa?:string|null; excerptJa?:string|null; titleVi?:string|null; contentVi?:string|null; excerptVi?:string|null; createdAt:Date; updatedAt:Date;
};
export type PublicBlogPost = Pick<BlogPost,"id"|"slug"|"title"|"excerpt"|"featuredImage"|"tags"|"readTime"|"publishedAt"|"titleJa"|"excerptJa"|"titleVi"|"excerptVi">;

export type Skill = {id:string;name:string;category:string;icon?:string|null;iconUrl?:string|null;proficiencyLevel?:"BEGINNER"|"INTERMEDIATE"|"ADVANCED"|"EXPERT"|null;displayOrder:number;visible:boolean};
export type Experience = {id:string;company:string;role:string;location?:string|null;startDate:Date;endDate?:Date|null;description:string;highlights:string[];techTags:string[];logoUrl?:string|null;companyUrl?:string|null;displayOrder:number;visible:boolean;roleJa?:string|null;descriptionJa?:string|null;highlightsJa:string[]};
export type Education = {id:string;institution:string;degree:string;field:string;startDate?:Date|null;endDate?:Date|null;achievements?:string|null;logoUrl?:string|null;institutionUrl?:string|null;documentUrl?:string|null;displayOrder:number;visible:boolean;degreeJa?:string|null;achievementsJa?:string|null};
export type Certification = {id:string;name:string;issuer:string;dateEarned:Date;expirationDate?:Date|null;credentialId?:string|null;credentialUrl?:string|null;badgeImage?:string|null;certificateImage?:string|null;displayOrder:number;visible:boolean};
export type AboutPage = {id:string;heading:string;subheading:string;profileName?:string|null;profileTitle?:string|null;profileCompany?:string|null;profileImageUrl?:string|null;introHeadline?:string|null;introBio?:string|null;headingJa?:string|null;subheadingJa?:string|null;profileTitleJa?:string|null;introHeadlineJa?:string|null;introBioJa?:string|null;headingVi?:string|null;subheadingVi?:string|null;profileTitleVi?:string|null;introHeadlineVi?:string|null;introBioVi?:string|null;updatedAt:Date};
export type SiteSettings = {id:string;siteName:string;siteDescription?:string|null;socialLinks?:unknown;email:string;googleAnalyticsId?:string|null;siteDescriptionJa?:string|null;updatedAt:Date};
export type ProjectStatus = "DRAFT"|"PUBLISHED";
export type PostStatus = "DRAFT"|"PUBLISHED";
export type ProficiencyLevel = "BEGINNER"|"INTERMEDIATE"|"ADVANCED"|"EXPERT";
