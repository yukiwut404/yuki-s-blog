import type { AboutPage, BlogPost, Certification, Education, Experience, Hero, Project, SiteSettings, Skill } from "@/lib/data/types";

const date = (value: string) => new Date(value);

export const siteSettings: SiteSettings = {
  id: "default",
  siteName: "Yuki | Portfolio",
  siteDescription: "A minimal portfolio built with Next.js.",
  email: "work.tranngochan@gmail.com",
  socialLinks: {
    github: "https://github.com/yukiwut404",
    linkedin: "https://linkedin.com/in/ngoc-han-tran",
  },
  updatedAt: date("2026-01-01"),
};

export const hero: Hero = {
  id: "hero",
  headline: "Yuki",
  headlineVi: "Yuki",
  subheadline: "Business Analyst · Software Engineering",
  subheadlineVi: "Business Analyst · Công nghệ phần mềm",
  bio: "Welcome to my personal blog where I write about technology, software, Business Analysis, and the things I’m learning along the way. It’s also a place where I share my projects, thoughts, and experiences as I explore where I fit in tech.",
  bioVi: "Chào mừng bạn đến với blog cá nhân của mình, nơi mình viết về Business Analysis, công nghệ và những điều mình đang học hỏi trên hành trình của mình. Đây cũng là portfolio, nơi mình chia sẻ các dự án, suy nghĩ và những trải nghiệm của mình khi khám phá thế giới công nghệ.",
  bioJa: "私の個人ブログへようこそ。ここでは、テクノロジーやソフトウェア、ビジネスアナリシスについて、そしてその過程で学んでいることを書いています。また、自分がテクノロジーの世界でどんな道が自分に合っているのかを探しながら、プロジェクトや考え、経験も紹介しています。",
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
    titleJa: "ポートフォリオサイト",
    shortDescription: "A personal blog where I write about technology, software, and the things I’m learning along the way.",
    shortDescriptionVi: "Một blog cá nhân, nơi mình viết về công nghệ, phần mềm và những điều mình đang học hỏi trên hành trình của mình.",
    shortDescriptionJa: "テクノロジーやソフトウェア、そして学びの中で得たことについて書く、個人ブログです。",
    description: "## Overview\n\nReplace this content with your project case study.\n\n## What I did\n\nDescribe the problem, process, decisions, and outcome.",
    problem: "The original experience needed a clearer way to present projects and skills.",
    solution: "A focused portfolio structure with reusable cards, project detail pages, and responsive layouts.",
    role: "Designer & Developer",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: [{ url: "/images/project-placeholder.svg", alt: "Project preview", order: 0 }],
    thumbnailImage: "/images/project-placeholder.svg",
    liveUrl: null,
    repoUrl: "https://github.com/yukiwut404/yuki-s-blog.git",
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
  headingJa:"私について",

  subheading: "A little about my background, skills, and interests.",
  subheadingVi: "Một chút về nền tảng, kỹ năng và những điều mình quan tâm.",
  subheadingJa: "私のこれまでの経験やスキル、興味について少しご紹介します。",

  profileName: "Tran Ngoc Han",
  profileTitle: "Business Analyst & Software Engineering",
  profileTitleVi: "Business Analyst & Công nghệ phần mềm",

  profileCompany: null,
  profileImageUrl: "/images/profile.jpg",
  introHeadline: "Hi 👋 I'm Yuki",
  introHeadlineVi: "Xin chào 👋 Mình là Yuki",
  introHeadlineJa: "こんにちは 👋 Yukiです",

  introBio: "My name is Tran Ngoc Han, but you can call me Yuki. I'm based in Ho Chi Minh City, Vietnam, with a background in Software Engineering and a growing interest in Business Analysis.\n\nThroughout my studies, I've worked on projects involving web and mobile applications, databases, APIs, and system design. These experiences helped me build a technical foundation while also making me more interested in the parts beyond coding — understanding requirements, thinking about user needs, and figuring out how different parts of a system should work together.\n\nI'm currently exploring the path toward becoming an IT Business Analyst while continuing to learn about software, product development, and technology. This blog is where I document what I'm learning, share my projects and thoughts, and explore where I fit best in tech.",

  introBioVi: "Mình tên là Trần Ngọc Hân, nhưng bạn có thể gọi mình là Yuki. Mình hiện đang ở TP. Hồ Chí Minh, với nền tảng Công nghệ phần mềm và sự quan tâm ngày càng nhiều đến Business Analysis.\n\nTrong quá trình học, mình đã thực hiện các dự án liên quan đến ứng dụng web, ứng dụng di động, cơ sở dữ liệu, API và thiết kế hệ thống. Những trải nghiệm này giúp mình xây dựng nền tảng kỹ thuật, đồng thời khiến mình quan tâm nhiều hơn đến những khía cạnh bên ngoài việc code — tìm hiểu yêu cầu, suy nghĩ về nhu cầu người dùng và xác định cách các thành phần trong một hệ thống nên kết nối với nhau.\n\nHiện tại, mình đang khám phá con đường trở thành IT Business Analyst, đồng thời tiếp tục tìm hiểu về phần mềm, phát triển sản phẩm và công nghệ. Blog này là nơi mình ghi lại những điều đang học, chia sẻ các dự án và suy nghĩ của mình, cũng như khám phá xem đâu là vị trí phù hợp nhất với mình trong thế giới công nghệ.",

  introBioJa: "Tran Ngoc Hanといいますが、Yukiと呼んでください。ベトナムのホーチミン市を拠点に、ソフトウェア工学を学んできた経験があり、現在はビジネスアナリシスに関心を持っています。\n\n大学では、Webアプリケーションやモバイルアプリケーション、データベース、API、システム設計などに関するプロジェクトに取り組んできました。そうした経験を通して技術的な基礎を身につける一方で、コーディングだけではなく、要件を理解したり、ユーザーのニーズを考えたり、システムのさまざまな部分がどのようにつながるべきかを考えることにも興味を持つようになりました。\n\n現在は、ITビジネスアナリストを目指す道を探りながら、ソフトウェアやプロダクト開発、テクノロジーについて学び続けています。このブログでは、学んでいることやプロジェクト、考えたことを記録しながら、自分がテクノロジーの世界でどんな道に向いているのかを探しています。",

  updatedAt: date("2026-01-01"),
};

export const skills: Skill[] = [
  // Frontend
  { id: "s1", name: "HTML/CSS", category: "Frontend", icon: "html", proficiencyLevel: "INTERMEDIATE", displayOrder: 0, visible: true },
  { id: "s2", name: "JavaScript", category: "Frontend", icon: "javascript", proficiencyLevel: "INTERMEDIATE", displayOrder: 1, visible: true },
  { id: "s3", name: "TypeScript", category: "Frontend", icon: "typescript", proficiencyLevel: "INTERMEDIATE", displayOrder: 2, visible: true },
  { id: "s4", name: "React", category: "Frontend", icon: "react", proficiencyLevel: "INTERMEDIATE", displayOrder: 3, visible: true },
  { id: "s5", name: "Next.js", category: "Frontend", icon: "nextjs", proficiencyLevel: "INTERMEDIATE", displayOrder: 4, visible: true },
  { id: "s6", name: "Tailwind CSS", category: "Frontend", icon: "tailwind", proficiencyLevel: "INTERMEDIATE", displayOrder: 5, visible: true },
  { id: "s7", name: "Flutter", category: "Frontend", icon: "flutter", proficiencyLevel: "INTERMEDIATE", displayOrder: 6, visible: true },

  // Backend
  { id: "s8", name: "Node.js", category: "Backend", icon: "nodejs", proficiencyLevel: "INTERMEDIATE", displayOrder: 7, visible: true },
  { id: "s9", name: "Express.js", category: "Backend", icon: "express", proficiencyLevel: "INTERMEDIATE", displayOrder: 8, visible: true },
  { id: "s10", name: "REST API", category: "Backend", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 9, visible: true },

  // Design
  { id: "s11", name: "UI/UX", category: "Design", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 10, visible: true },
  { id: "s12", name: "Wireframing", category: "Design", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 11, visible: true },
  { id: "s13", name: "Prototyping", category: "Design", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 12, visible: true },

  // Business Analysis
  { id: "s14", name: "Requirements Analysis", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 13, visible: true },
  { id: "s15", name: "User Stories", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 14, visible: true },
  { id: "s16", name: "Use Cases", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 15, visible: true },
  { id: "s17", name: "Acceptance Criteria", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 16, visible: true },
  { id: "s18", name: "Process Modeling", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 17, visible: true },
  { id: "s19", name: "System Modeling", category: "Business Analysis", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 18, visible: true },

  // Tools
  { id: "s20", name: "Figma", category: "Tools", icon: "figma", proficiencyLevel: "INTERMEDIATE", displayOrder: 19, visible: true },
  { id: "s21", name: "Jira", category: "Tools", icon: "jira", proficiencyLevel: "INTERMEDIATE", displayOrder: 20, visible: true },
  { id: "s22", name: "Git", category: "Tools", icon: "git", proficiencyLevel: "INTERMEDIATE", displayOrder: 21, visible: true },
  { id: "s23", name: "GitHub", category: "Tools", icon: "github", proficiencyLevel: "INTERMEDIATE", displayOrder: 22, visible: true },
  { id: "s24", name: "draw.io", category: "Tools", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 23, visible: true },
  { id: "s25", name: "StarUML", category: "Tools", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 24, visible: true },
  { id: "s26", name: "Mermaid", category: "Tools", icon: "mermaid", proficiencyLevel: "INTERMEDIATE", displayOrder: 25, visible: true },
  { id: "s27", name: "ERDPlus", category: "Tools", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 26, visible: true },

  // Database
  { id: "s28", name: "MySQL", category: "Database", icon: "mysql", proficiencyLevel: "INTERMEDIATE", displayOrder: 27, visible: true },
  { id: "s29", name: "SQL Server", category: "Database", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 28, visible: true },
  { id: "s30", name: "MongoDB", category: "Database", icon: "mongodb", proficiencyLevel: "INTERMEDIATE", displayOrder: 29, visible: true },
  { id: "s31", name: "SQL", category: "Database", icon: null, proficiencyLevel: "INTERMEDIATE", displayOrder: 30, visible: true },
];

export const experiences: Experience[] = [
  {
    id:"e1", company:"Your Company", role:"Intern", location:"Vietnam",
    startDate:date("2026-01-01"), endDate:null,
    description:"Replace this with your internship or work experience.",
    highlights:["Describe an achievement","Describe a responsibility"],
    techTags:["Figma","Research"], displayOrder:0, visible:true, highlightsJa:[]
  }
];

export const education: Education[] = [
  {
    id:"ed1", institution:"HCMC University of Foreign Languages - Information Technology (HUFLIT) ", degree:"Bachelor - Information Technology",
    field:"Software Engineering", startDate:date("2022-09-01"), endDate:date("2026-06-01"),
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
