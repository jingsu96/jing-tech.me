import {
  Github,
  Twitter,
  LinkedinIcon,
  Instagram,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  ArmchairIcon,
} from 'lucide-react';

export const PROFILES = {
  substack: {
    title: 'Substack',
    url: 'https://jingtech.substack.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" height={16} width={16} id="menu-icon">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/jing.tech',
    icon: <Instagram size={16} />,
  },
  thread: {
    title: 'thread',
    url: 'https://www.threads.net/@jing.tech',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Threads"
        viewBox="0 0 192 192"
        height={16}
        width={16}
        id="menu-icon"
      >
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
      </svg>
    ),
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/jingsu96',
    icon: <Github size={16} />,
  },
  buyMeACoffee: {
    title: 'Buy Me A Coffee',
    url: 'https://www.buymeacoffee.com/jingtech',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        role="img"
        id="menu-icon"
      >
        <path d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z" />
      </svg>
    ),
  },
};

export const COLLECTION_IDS = [18259129];

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />,
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <PencilLineIcon size={16} />,
  },
  // {
  //   href: '/journey',
  //   label: 'Journey',
  //   icon: <NavigationIcon size={16} />,
  // },
  // {
  //   href: '/stack',
  //   label: 'Stack',
  //   icon: <Wand2Icon size={16} />,
  // },
  // {
  //   href: '/workspace',
  //   label: 'Workspace',
  //   icon: <ArmchairIcon size={16} />,
  // },
  // {
  //   href: '/bookmarks',
  //   label: 'Bookmarks',
  //   icon: <BookmarkIcon size={16} />,
  // },
];

export const WORKSPACE_ITEMS = [
  {
    title: 'Richard Lampert Eiermann 2 Desk',
    url: 'https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/',
    specs: 'White, 80x160cm',
  },
];

export const SCROLL_AREA_ID = 'scroll-area';
export const MOBILE_SCROLL_THRESHOLD = 20;
export const SUPABASE_TABLE_NAME = 'pages';

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark';
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day.";
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5;
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount';

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook',
};

export const WORK_EXPERIENCE = [
  {
    name: 'Houzz',
    link: 'https://www.houzz.com',
    image: '/static/images/experience/houzz.png',
    experience: [
      {
        title: 'Software Engineer',
        level: 'L4',
        period: 'November 2022 - Present',
      },
      {
        title: 'Software Engineer',
        level: 'L3',
        period: 'January-October 2022',
      },
    ],
  },
  {
    name: 'Jkopay',
    link: 'https://www.jkopay.com',
    image: '/static/images/experience/jkopay.png',
    experience: [
      {
        title: 'Frontend Engineer',
        period: 'October 2019 - October 2021',
      },
    ],
  },
];

export const ORDER = {
  'writing/rust/beginner': {
    基本介紹: 1,
    書籍: 2,
    實作: 3,
  },
  'writing/rust/beginner/100-exercises-to-learn-rust': {
    基本介紹: 1,
    筆記: 2,
  },
  'writing/design-system': {
    基本介紹: 1,
    無障礙設計: 2,
    基本設置: 3,
    核心概念: 4,
    組件設計: 5,
    開發流程: 6,
  },
  'writing/experiences': {
    學習: 1,
    面試: 2,
    職涯: 3,
  },
  'writing/others': {
    部落格: 1,
  },
  'writing/user-experiences/practical': {
    使用者介面: 1,
  },
  'writing/javascript/lodash': {
    基本介紹: 1,
    '主題 - 陣列': 2,
  },
  'writing/javascript/lodash/array': {
    基本題型: 1,
  },
  'writing/dsa': {
    基本介紹: 1,
    '資料結構 101': 2,
    實作: 3,
  },
};

export const TOPIC_EN_TO_ZH = {
  'design-system': '設計系統',
  career: '職涯',
  rust: 'Rust',
  javascript: 'JavaScript',
  'user-experiences': '使用者體驗',
  others: '隨記',
  dsa: '資結與演算法',
  experiences: '經驗分享',
};
