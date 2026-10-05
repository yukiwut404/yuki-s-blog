import type { AboutPage, BlogPost, Certification, Education, Experience, Hero, Project, SiteSettings, Skill } from "@/lib/data/types";

const date = (value: string) => new Date(value);

export const siteSettings: SiteSettings = {
  id: "default",
  siteName: "Your Name | Portfolio",
  siteDescription: "A minimal portfolio built with Next.js.",
  email: "hello@example.com",
  socialLinks: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
  updatedAt: date("2026-01-01"),
};

export const hero: Hero = {
  id: "hero",
  headline: "Your Name",
  headlineVi: "Your Name",
  subheadline: "UI/UX Designer · IT Student",
  subheadlineVi: "UI/UX Designer · Sinh viên CNTT",
  bio: "I enjoy turning ideas into simple, thoughtful digital experiences. This starter portfolio is ready for you to replace with your own work.",
  bioVi: "Mình thích biến ý tưởng thành những trải nghiệm số đơn giản và có chủ đích. Portfolio mẫu này đã sẵn sàng để bạn thay bằng câu chuyện và dự án của riêng mình.",
  resumeUrl: null,
  ctaButtons: [
    { label: "View Projects", url: "/projects", variant: "primary" },
  ],
  updatedAt: date("2026-01-01"),
};

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "portfolio-website",
    title: "Portfolio Website",
    titleVi: "Website Portfolio",
    shortDescription: "A minimal personal portfolio focused on projects, case studies, and a clear visual system.",
    shortDescriptionVi: "Portfolio cá nhân tối giản, tập trung vào dự án, case study và hệ thống thị giác rõ ràng.",
    description: "## Overview\n\nReplace this content with your project case study.\n\n## What I did\n\nDescribe the problem, process, decisions, and outcome.",
    problem: "The original experience needed a clearer way to present projects and skills.",
    solution: "A focused portfolio structure with reusable cards, project detail pages, and responsive layouts.",
    role: "Designer & Developer",
    techTags: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],
    images: [{ url: "/images/project-placeholder.svg", alt: "Project preview", order: 0 }],
    thumbnailImage: "/images/project-placeholder.svg",
    liveUrl: null,
    repoUrl: "https://github.com/yourname/portfolio",
    featured: true,
    displayOrder: 0,
    status: "PUBLISHED",
    startDate: date("2026-01-01"),
    endDate: null,
    createdAt: date("2026-01-01"),
    updatedAt: date("2026-01-01"),
  },
  {
    id: "project-2",
    slug: "sample-app",
    title: "Sample Application",
    titleVi: "Ứng dụng mẫu",
    shortDescription: "A second project placeholder for your portfolio.",
    shortDescriptionVi: "Một dự án mẫu thứ hai cho portfolio của bạn.",
    description: "Add your project story here.",
    problem: null,
    solution: null,
    role: "Developer",
    techTags: ["React", "TypeScript"],
    images: [{ url: "/images/project-placeholder.svg", alt: "Project preview", order: 0 }],
    thumbnailImage: "/images/project-placeholder.svg",
    liveUrl: null,
    repoUrl: null,
    featured: false,
    displayOrder: 1,
    status: "PUBLISHED",
    startDate: date("2025-06-01"),
    endDate: date("2025-12-01"),
    createdAt: date("2026-01-01"),
    updatedAt: date("2026-01-01"),
  },
];

export const posts: BlogPost[] = [
  {
    id: "post-1",
    slug: "building-this-portfolio",
    title: "Building This Portfolio",
    titleVi: "Mình xây portfolio này như thế nào",
    excerpt: "A short note about designing and building a minimal portfolio.",
    excerptVi: "Một ghi chú ngắn về quá trình thiết kế và xây dựng portfolio tối giản.",
    content: "# Building This Portfolio\n\nThis is sample seed content. Replace it with your own writing.\n\n## Keep it simple\n\nA portfolio should make your work easy to understand.",
    featuredImage: "/images/blog-placeholder.svg",
    tags: ["Portfolio", "Next.js", "Design"],
    readTime: 2,
    status: "PUBLISHED",
    publishedAt: date("2026-01-15"),
    createdAt: date("2026-01-15"),
    updatedAt: date("2026-01-15"),
  },
];

export const about: AboutPage = {
  id: "default",
  heading: "About Me",
  headingVi: "Về mình",
  subheading: "A little about my background, skills, and interests.",
  subheadingVi: "Một chút về nền tảng, kỹ năng và những điều mình quan tâm.",
  profileName: "Your Name",
  profileTitle: "UI/UX Designer & IT Student",
  profileTitleVi: "UI/UX Designer & Sinh viên CNTT",
  profileCompany: null,
  profileImageUrl: null,
  introHeadline: "I like solving problems through design and technology.",
  introHeadlineVi: "Mình thích giải quyết vấn đề bằng thiết kế và công nghệ.",
  introBio: "Tell visitors who you are, what you care about, and the kind of work you want to do.",
  introBioVi: "Hãy kể cho người xem bạn là ai, bạn quan tâm điều gì và bạn muốn làm những công việc như thế nào.",
  updatedAt: date("2026-01-01"),
};

export const skills: Skill[] = [
  { id:"s1", name:"Figma", category:"Design", proficiencyLevel:"ADVANCED", displayOrder:0, visible:true },
  { id:"s2", name:"UI/UX", category:"Design", proficiencyLevel:"ADVANCED", displayOrder:1, visible:true },
  { id:"s3", name:"HTML/CSS", category:"Frontend", proficiencyLevel:"INTERMEDIATE", displayOrder:2, visible:true },
  { id:"s4", name:"JavaScript", category:"Languages", proficiencyLevel:"INTERMEDIATE", displayOrder:3, visible:true },
  { id:"s5", name:"React", category:"Frontend", proficiencyLevel:"INTERMEDIATE", displayOrder:4, visible:true },
  { id:"s6", name:"Next.js", category:"Frontend", proficiencyLevel:"INTERMEDIATE", displayOrder:5, visible:true },
];

export const experiences: Experience[] = [
  {
    id:"e1", company:"Your Company", role:"Intern / Designer", location:"Vietnam",
    startDate:date("2026-01-01"), endDate:null,
    description:"Replace this with your internship or work experience.",
    highlights:["Describe an achievement","Describe a responsibility"],
    techTags:["Figma","Research"], displayOrder:0, visible:true, highlightsJa:[]
  }
];

export const education: Education[] = [
  {
    id:"ed1", institution:"Your University", degree:"Bachelor",
    field:"Information Technology", startDate:date("2022-09-01"), endDate:date("2026-06-01"),
    achievements:"Add awards, projects, or relevant coursework.",
    displayOrder:0, visible:true
  }
];

export const certifications: Certification[] = [
  {
    id:"c1", name:"Your Certification", issuer:"Issuer",
    dateEarned:date("2026-01-01"), expirationDate:null,
    credentialId:null, credentialUrl:null, badgeImage:null, certificateImage:null,
    displayOrder:0, visible:true
  }
];
