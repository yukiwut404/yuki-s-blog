import type { Locale } from "./locale";

export function t<T extends Record<string, unknown>>(record: T, field: string & keyof T, locale: Locale): string {
  if (locale === "vi") {
    const value = record[`${field}Vi` as keyof T];
    if (typeof value === "string" && value.trim()) return value;
  }
  if (locale === "ja") {
    const value = record[`${field}Ja` as keyof T];
    if (typeof value === "string" && value.trim()) return value;
  }
  const value = record[field];
  return typeof value === "string" ? value : "";
}

export function tArray<T extends Record<string, unknown>>(record: T, field: string & keyof T, locale: Locale): string[] {
  if (locale === "vi") {
    const value = record[`${field}Vi` as keyof T];
    if (Array.isArray(value) && value.length) return value as string[];
  }
  if (locale === "ja") {
    const value = record[`${field}Ja` as keyof T];
    if (Array.isArray(value) && value.length) return value as string[];
  }
  const value = record[field];
  return Array.isArray(value) ? value as string[] : [];
}

export function tJson<T extends Record<string, unknown>, R>(record: T, field: string & keyof T, locale: Locale): R {
  if (locale === "vi") {
    const value = record[`${field}Vi` as keyof T];
    if (value !== null && value !== undefined) return value as R;
  }
  if (locale === "ja") {
    const value = record[`${field}Ja` as keyof T];
    if (value !== null && value !== undefined) return value as R;
  }
  return record[field] as R;
}

const UI_STRINGS = {
  en: {
    home: "Home",
    projects: "Projects",
    blog: "Blog",
    about: "About",
    featuredProjects: "Featured Projects",
    recentPosts: "Recent Posts",
    viewAllProjects: "View All Projects",
    viewAllPosts: "View All Posts",

    skills: "Skills",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    problem: "Problem",
    solution: "Solution",
    role: "Role",
    technologies: "Technologies",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    readMore: "Read More",
    sharePost: "Share this post",
    tableOfContents: "Table of Contents",
    minRead: "min read",
    present: "Present",
    viewCredential: "View Credential",
    expires: "Expires",
    noExpiration: "No Expiration",
    previous: "Previous",
    next: "Next",
    availableForOpportunities: "Available for new opportunities",
    portfolio: "Portfolio",
    viewAll: "View all",
    hello: "Hello, I'm",
    allProjects: "All Projects",
    allPosts: "All Posts",
    techStack: "Tech Stack",
    theProblem: "The Problem",
    theSolution: "The Solution",
    enjoyedPost: "Enjoyed this post?",
    getLoveToHear: "— I'd love to hear your thoughts.",
    searchProjects: "Search projects...",
    defaultOrder: "Default Order",
    newestFirst: "Newest First",
    oldestFirst: "Oldest First",
    aToZ: "A → Z",
    clear: "Clear",
    noProjectsFound: "No projects found matching your criteria.",
    clearFilters: "Clear filters",
    projectsFound: "found",
    projectsPageDescription:
      "A collection of projects I've built, from full-stack applications to developer tools.",
    blogPageDescription: "Thoughts on web development, software engineering, and technology.",
    noBlogPosts: "No blog posts published yet. Check back soon!",
    posts: "Posts",
    searchPosts: "Search posts...",
    noPostsFound: "No posts found matching your criteria.",
    postsFound: "found",
    heroName: "Yuki!",
    heroNameJa: "朝倉優太です!",
    viewCertificate: "View Certificate",
    earned: "Earned",
    copyright: "Yuki | Portfolio",
    skillCategoryLanguages: "Languages",
    skillCategoryFrameworks: "Frameworks",
    skillCategoryCloud: "Cloud & DevOps",
    skillCategoryDatabases: "Databases",
    skillCategoryTools: "Tools",
    skillCategoryOther: "Other",
    pageNotFound: "Page not found",
    pageNotFoundDescription: "Sorry, the page you're looking for doesn't exist or has been moved.",
    goHome: "Go Home",
    viewProjects: "View Projects",
    readTheBlog: "Read the Blog",
    somethingWentWrong: "Something went wrong",
    unexpectedError: "Unexpected Error",
    errorPageDescription: "An error occurred while loading this page. Please try again.",
    tryAgain: "Try Again",
    errorLoadingProject: "Error loading project",
    errorProjectDescription: "Something went wrong. The project may have been removed.",
    errorLoadingPost: "Error loading post",
    errorPostDescription: "Something went wrong. The post may have been removed.",
    share: "Share",
    linkCopied: "Link copied to clipboard",
    copyFailed: "Failed to copy link",

    aboutMe: "About Me",
    aboutMeSubheading: "My skills, professional experience, education, and certifications.",
  },
  ja: {
    home: "ホーム",
    projects: "プロジェクト",
    blog: "ブログ",
    about: "自己紹介",
    featuredProjects: "注目プロジェクト",
    recentPosts: "最新記事",
    viewAllProjects: "すべてのプロジェクトを見る",
    viewAllPosts: "すべての記事を見る",

    skills: "スキル",
    experience: "職歴",
    education: "学歴",
    certifications: "資格",
    problem: "課題",
    solution: "解決策",
    role: "役割",
    technologies: "技術スタック",
    liveDemo: "デモサイト",
    sourceCode: "ソースコード",
    readMore: "続きを読む",
    sharePost: "この記事をシェア",
    tableOfContents: "目次",
    minRead: "分で読めます",
    present: "現在",
    viewCredential: "資格を確認",
    expires: "有効期限",
    noExpiration: "無期限",
    previous: "前へ",
    next: "次へ",
    availableForOpportunities: "新しい機会を探しています",
    portfolio: "ポートフォリオ",
    viewAll: "すべて見る",
    hello: "こんにちは、",
    allProjects: "すべてのプロジェクト",
    allPosts: "すべての記事",
    techStack: "技術スタック",
    theProblem: "課題",
    theSolution: "解決策",
    enjoyedPost: "この記事はいかがでしたか？",
    getLoveToHear: "ご感想をお聞かせください。",
    searchProjects: "プロジェクトを検索...",
    defaultOrder: "デフォルト順",
    newestFirst: "新しい順",
    oldestFirst: "古い順",
    aToZ: "A → Z",
    clear: "クリア",
    noProjectsFound: "条件に一致するプロジェクトが見つかりません。",
    clearFilters: "フィルターをクリア",
    projectsFound: "件",
    projectsPageDescription:
      "フルスタックアプリケーションから開発者ツールまで、私が構築したプロジェクト集です。",
    blogPageDescription: "Web開発、ソフトウェアエンジニアリング、テクノロジーについての記事。",
    noBlogPosts: "まだブログ記事がありません。近日公開予定です！",
    posts: "記事",
    searchPosts: "記事を検索...",
    noPostsFound: "条件に一致する記事が見つかりません。",
    postsFound: "件",
    heroName: "Yuki!",
    heroNameJa: "朝倉優太です!",
    viewCertificate: "証明書を見る",
    earned: "取得日",
    copyright: "Yuki | Portfolio",
    skillCategoryLanguages: "言語",
    skillCategoryFrameworks: "フレームワーク",
    skillCategoryCloud: "クラウド & DevOps",
    skillCategoryDatabases: "データベース",
    skillCategoryTools: "ツール",
    skillCategoryOther: "その他",
    pageNotFound: "ページが見つかりません",
    pageNotFoundDescription:
      "申し訳ございません。お探しのページは存在しないか、移動された可能性があります。",
    goHome: "ホームへ戻る",
    viewProjects: "プロジェクトを見る",
    readTheBlog: "ブログを読む",
    somethingWentWrong: "エラーが発生しました",
    unexpectedError: "予期せぬエラー",
    errorPageDescription: "ページの読み込み中にエラーが発生しました。もう一度お試しください。",
    tryAgain: "再試行",
    errorLoadingProject: "プロジェクトの読み込みエラー",
    errorProjectDescription: "エラーが発生しました。プロジェクトが削除された可能性があります。",
    errorLoadingPost: "記事の読み込みエラー",
    errorPostDescription: "エラーが発生しました。記事が削除された可能性があります。",
    share: "シェア",
    linkCopied: "リンクをコピーしました",
    copyFailed: "リンクのコピーに失敗しました",

    aboutMe: "自己紹介",
    aboutMeSubheading: "スキル、職務経歴、学歴、および資格について。",
  },
} as const;

const VI_UI_OVERRIDES: Partial<Record<UIStringKey, string>> = {
  home: "Trang chủ", projects: "Dự án", blog: "Blog", about: "Giới thiệu",
  featuredProjects: "Dự án nổi bật", recentPosts: "Bài viết mới", viewAllProjects: "Xem tất cả dự án", viewAllPosts: "Xem tất cả bài viết",
  skills: "Kỹ năng", experience: "Kinh nghiệm", education: "Học vấn", certifications: "Chứng chỉ",
  problem: "Vấn đề", solution: "Giải pháp", role: "Vai trò", technologies: "Công nghệ", liveDemo: "Demo", sourceCode: "Mã nguồn", readMore: "Đọc thêm",
  sharePost: "Chia sẻ bài viết", tableOfContents: "Mục lục", minRead: "phút đọc", present: "Hiện tại", previous: "Trước", next: "Sau",
  availableForOpportunities: "Sẵn sàng cho cơ hội mới", portfolio: "Portfolio", viewAll: "Xem tất cả", hello: "Xin chào, mình là",
  allProjects: "Tất cả dự án", allPosts: "Tất cả bài viết", techStack: "Công nghệ sử dụng", theProblem: "Vấn đề", theSolution: "Giải pháp",
  enjoyedPost: "Bạn thấy bài viết này thú vị?", getLoveToHear: "— Mình rất muốn nghe suy nghĩ của bạn.",
  searchProjects: "Tìm kiếm dự án...", defaultOrder: "Mặc định", newestFirst: "Mới nhất", oldestFirst: "Cũ nhất", aToZ: "A → Z", clear: "Xóa",
  noProjectsFound: "Không tìm thấy dự án phù hợp.", clearFilters: "Xóa bộ lọc", projectsFound: "kết quả",
  projectsPageDescription: "Tổng hợp những dự án mình đã thực hiện, từ ứng dụng web đến các sản phẩm và công cụ cá nhân.",
  blogPageDescription: "Những ghi chú về phát triển web, phần mềm, thiết kế và công nghệ.", noBlogPosts: "Chưa có bài viết nào. Hãy quay lại sau nhé!",
  posts: "bài viết", searchPosts: "Tìm kiếm bài viết...", noPostsFound: "Không tìm thấy bài viết phù hợp.", postsFound: "kết quả",
  viewCertificate: "Xem chứng chỉ", earned: "Ngày cấp", skillCategoryLanguages: "Ngôn ngữ", skillCategoryFrameworks: "Framework",
  skillCategoryCloud: "Cloud & DevOps", skillCategoryDatabases: "Cơ sở dữ liệu", skillCategoryTools: "Công cụ", skillCategoryOther: "Khác",
  pageNotFound: "Không tìm thấy trang", pageNotFoundDescription: "Trang bạn đang tìm không tồn tại hoặc đã được chuyển đi.", goHome: "Về trang chủ",
  viewProjects: "Xem dự án", readTheBlog: "Đọc blog", somethingWentWrong: "Đã xảy ra lỗi", unexpectedError: "Lỗi không mong muốn",
  errorPageDescription: "Có lỗi xảy ra khi tải trang. Vui lòng thử lại.", tryAgain: "Thử lại", errorLoadingProject: "Không thể tải dự án",
  errorProjectDescription: "Đã xảy ra lỗi. Có thể dự án đã bị xóa.", errorLoadingPost: "Không thể tải bài viết", errorPostDescription: "Đã xảy ra lỗi. Có thể bài viết đã bị xóa.",
  share: "Chia sẻ", linkCopied: "Đã sao chép liên kết", copyFailed: "Không thể sao chép liên kết",
aboutMe: "Về mình", aboutMeSubheading: "Kỹ năng, kinh nghiệm, học vấn và chứng chỉ của mình."
};

export type UIStringKey = keyof (typeof UI_STRINGS)["en"];

export function ui(key: UIStringKey, locale: Locale): string {
  if (locale === "vi") return VI_UI_OVERRIDES[key] ?? UI_STRINGS.en[key];
  return UI_STRINGS[locale][key];
}

const SKILL_CATEGORY_MAP: Record<string, string> = {
  Languages: "言語",
  Frontend: "フロントエンド",
  Backend: "バックエンド",
  Frameworks: "フレームワーク",
  Design: "デザイン",
  "Business Analysis": "ビジネスアナリシス",
  "Cloud & DevOps": "クラウド & DevOps",
  "AWS Services": "AWSサービス",
  Databases: "データベース",
  Database: "データベース",
  Tools: "ツール",
  Other: "その他",
};

export function localizeSkillCategory(category: string, locale: Locale): string {
  if (locale === "ja" && SKILL_CATEGORY_MAP[category]) {
    return SKILL_CATEGORY_MAP[category];
  }
  if (locale === "vi") {
    const map: Record<string, string> = {
      Languages: "Ngôn ngữ",
      Frontend: "Frontend",
      Backend: "Backend",
      Frameworks: "Framework",
      Design: "Thiết kế",
      "Business Analysis": "Phân tích nghiệp vụ",
      "Cloud & DevOps": "Cloud & DevOps",
      "AWS Services": "AWS Services",
      Databases: "Cơ sở dữ liệu",
      Database: "Cơ sở dữ liệu",
      Tools: "Công cụ",
      Other: "Khác",
    };
    return map[category] ?? category;
  }
  return category;
}
