import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, Site, SkillsShowcaseConfig, SocialLink, TagsConfig } from '~/types'

export const SITE: Site = {
  title: 'Rinkaneko',
  description: '等你读懂我的隐喻。',
  website: 'https://rinkaneko.vercel.app/',
  base: '/',
  author: 'Rinkaneko',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: '首页',
    url: '/',
  },
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
  {
    name: '标签',
    url: '/tags',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/rinkaneko',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'douyin',
    url: 'https://www.douyin.com/user/MS4wLjABAAAA-0-0000000000000000000000000000000000000000000000000000000000000000',
    icon: 'icon-[ri--tiktok-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[tabler--brand-javascript]',
        },
        {
          name: 'CSS',
          icon: 'icon-[tabler--brand-css3]',
        },
        {
          name: 'HTML',
          icon: 'icon-[tabler--brand-html5]',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[tabler--brand-typescript]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Node.js',
          icon: 'icon-[tabler--brand-nodejs]',
        },
        {
          name: 'React',
          icon: 'icon-[tabler--brand-react]',
        },
        {
          name: 'Next.js',
          icon: 'icon-[tabler--brand-nextjs]',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[tabler--brand-tailwind]',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Figma',
          icon: 'icon-[tabler--brand-figma]',
        },
        {
          name: 'Photoshop',
          icon: 'icon-[tabler--brand-adobe-photoshop]',
        },
        {
          name: 'Illustrator',
          icon: 'icon-[tabler--brand-adobe-illustrator]',
        },
        {
          name: 'Premiere',
          icon: 'icon-[tabler--brand-adobe-premier]',
        },
        {
          name: 'Blender',
          icon: 'icon-[tabler--brand-blender]',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {number} CACHE_DURATION - 缓存持续时间(秒) / Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - 开发时使用模拟数据 / Use mock data in development
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5,
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}

export const POSTS_CONFIG: PostConfig = {
  title: '文章',
  description: '记录生活灵感、兴趣分享与好物测评。',
  introduce: '记录生活灵感、兴趣分享与好物测评。',
  author: 'Rinkaneko',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  imageDarkenInDark: true,
  readMoreText: '阅读更多',
  prevPageText: '上一页',
  nextPageText: '下一页',
  tocText: '目录',
  backToPostsText: '返回文章',
  nextPostText: '下一篇',
  prevPostText: '上一篇',
}

export const TAGS_CONFIG: TagsConfig = {
  title: '标签',
  description: '所有文章的标签，你可以点击它们来过滤它们。',
  introduce: '所有文章的标签，你可以点击它们来过滤它们。',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: '项目',
  description: '自己的或参与开发的项目。',
  introduce: '自己的或参与开发的项目。',
}

// get icon https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: '开放世界生存手游 UI/UX 设计',
    description: '战斗界面、剧情抉择面板、养成系统等 30 + 核心界面设计稿。',
    githubUrl: 'javascript:void(0)',
    website: 'javascript:void(0)',
    type: 'image',
    icon: '/projects/catgirl.png',
    star: 999,
    fork: 999,
  },
]
