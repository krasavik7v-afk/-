import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Aurora from './Aurora'
import BorderGlow from './BorderGlow'
import portraitPhoto from './assets/portrait-cutout-clean.png'
import siteLogo from './assets/site-logo.png'
import wechatQr from './assets/wechat-qr.png'
import profileCardCover from './assets/profile-card-cover.png'
import modalCardDragon from './assets/modal-card-dragon.jpg'
import modalCardDog from './assets/modal-card-dog.jpg'
import ecomVideoCover from './assets/ecom-video-cover.png'
import aiFilmCover from './assets/ai-film-cover.png'
import aiRealDramaCover from './assets/ai-real-drama-cover.jpg'
import publicGoodCover from './assets/public-good-cover.png'
import personalIpJewelry from './assets/personal-ip/ip-jewelry.png'
import personalIpShirt from './assets/personal-ip/ip-shirt.png'
import personalIpBoard from './assets/personal-ip/ip-character-board.png'
import personalIpPlush from './assets/personal-ip/ip-plush.png'
import personalIpMerch from './assets/personal-ip/ip-merch-system.png'
import personalIpStory from './assets/personal-ip/ip-storyboard.png'
import ecomVisualIncenseOverview from './assets/ecom-visual/incense-overview.png'
import ecomVisualIncenseGiftBox from './assets/ecom-visual/incense-gift-box.png'
import ecomVisualIncenseDetail from './assets/ecom-visual/incense-detail-board.png'
import ecomVisualIncenseLifestyle from './assets/ecom-visual/incense-lifestyle-page.png'
import ecomVisualPetLongpage from './assets/ecom-visual/pet-vacuum-longpage.png'
import ecomVisualPetDetail from './assets/ecom-visual/pet-vacuum-detail.png'
import skillPs from './assets/skill-icons/ps.png'
import skillAi from './assets/skill-icons/ai.png'
import skillAe from './assets/skill-icons/ae.png'
import skillPr from './assets/skill-icons/pr.png'
import skillAu from './assets/skill-icons/au.png'
import skillDw from './assets/skill-icons/dw.png'
import skillC4d from './assets/skill-icons/c4d.png'
import skillUnity from './assets/skill-icons/unity3d.png'
import skill3dsMax from './assets/skill-icons/3dsmax.png'
import skillBlender from './assets/skill-icons/blender.png'

const contact = {
  phone: '13632563160',
  email: 'krasavik7v@gmail.com',
  qq: '774862562',
  wechat: 'QTau0314',
}

const stats = [
  { value: '500+', label: '单月定制化短视频稳定输出' },
  { value: '7', label: 'TikTok 核心市场内容覆盖' },
  { value: '+32%', label: 'AIGC 特效包装提升平均完播率' },
  { value: '7k+', label: '美区 TikTok 账号单月涨粉' },
]

const projectCategories = [
  {
    tag: 'AI FILM',
    title: 'AI 微电影叙事',
    description:
      '用于收录 AI 生成影像、剧情短片、概念预告与角色叙事类作品，突出镜头语言、氛围塑造和完整故事表达。',
    meta: 'AIGC Narrative / Concept Film',
    tone: 'project-a',
  },
  {
    tag: 'PUBLIC GOOD',
    title: 'AI 公益传播短片',
    description:
      '用于展示公益主题小广告、社会议题视觉表达与情绪化传播短片，强调创意概念、信息传达和视觉记忆点。',
    meta: 'Public Campaign / AI Spot',
    tone: 'project-b',
  },
  {
    tag: 'REAL DRAMA',
    title: 'AI 真人短剧实验',
    description:
      '用于展示 AI 真人影像、短剧段落、剧情节奏和情绪化表演生成实验，突出人物表演、镜头调度与短剧内容可用性。',
    meta: 'AI Live-action / Short Drama',
    tone: 'project-i',
  },
  {
    tag: 'PERSONAL IP',
    title: '个人 IP 内容体系',
    description:
      '用于整理角色设定、个人账号视觉、IP 短视频栏目和人设内容资产，体现持续运营和内容辨识度。',
    meta: 'Character IP / Social Identity',
    tone: 'project-c',
  },
  {
    tag: 'E-COM VIDEO',
    title: '电商转化视频',
    description:
      '用于放置产品种草、卖点拆解、详情页视频、广告素材和平台投放向短视频，突出节奏、转化逻辑和产品表达。',
    meta: 'Product Video / Conversion',
    tone: 'project-d',
  },
  {
    tag: 'ILLUSTRATION',
    title: '手绘与视觉插画',
    description:
      '用于展示 Procreate 手绘、角色草图、主题插画和视觉概念稿，体现造型能力、色彩判断和原创表达。',
    meta: 'Hand Drawing / Visual Concept',
    tone: 'project-e',
  },
  {
    tag: 'INCENSE BRAND',
    title: '线香品牌宣传视频',
    description:
      '用于沉淀线香类产品的品牌短片、氛围视频、包装视觉和生活方式内容，突出东方审美与情绪营销。',
    meta: 'Incense / Lifestyle Visual',
    tone: 'project-f',
  },
  {
    tag: 'E-COM VISUAL',
    title: '电商视觉作品',
    description:
      '用于整理详情页、Banner、包装、主图、活动视觉和独立站页面优化，体现电商设计的商业落地能力。',
    meta: 'Detail Page / Banner / Packaging',
    tone: 'project-g',
  },
  {
    tag: '3D MOTION',
    title: 'C4D 三维视觉作品',
    description:
      '用于收录 C4D 建模、产品场景、动态视觉和三维辅助设计内容，体现空间构图与动效视觉能力。',
    meta: 'C4D / 3D Scene / Motion',
    tone: 'project-h',
  },
]

const strengths = [
  {
    title: 'AI 工具链整合',
    text: '深度整合 ChatGPT、Codex、Midjourney、Runway、Pixverse 等工具，形成覆盖灵感、执行、迭代的智能创作工作流。',
    type: 'CORE',
    points: ['AI 创意探索', '工具链整合', '效率化迭代'],
  },
  {
    title: '短视频剪辑与特效包装',
    text: '能从脚本、拍摄、剪辑、字幕样式、动态图形、节奏卡点到调色完整推进短视频成片，提升内容质感与信息密度。',
    type: 'CORE',
    points: ['脚本到成片', '节奏卡点包装', '完播体验优化'],
  },
  {
    title: '海外内容本地化运营',
    text: '具备多区域 TikTok 内容经验，能根据不同市场的平台算法、视觉审美和用户偏好调整叙事节奏与画面表达。',
    type: 'SYSTEM',
    points: ['多市场适配', '平台节奏判断', '账号内容增长'],
  },
  {
    title: '复合视觉设计能力',
    text: '覆盖品牌宣传、活动主视觉、电商详情页、产品包装、视频封面、空间设计协作与 CAD 辅助制图等多种视觉场景。',
    type: 'SYSTEM',
    points: ['品牌视觉搭建', '电商页面设计', '包装与封面'],
  },
  {
    title: '跨团队协作与执行推进',
    text: '具备良好的沟通能力和自驱力，能在设计、视频、运营等多角色协作中保持高效推进，保证项目按节奏落地。',
    type: 'SYSTEM',
    points: ['子任务拆解', '交付目标清晰', '节点推进明确'],
  },
]

const experiences = [
  '重庆养品记文化传播有限公司 / 视频剪辑 / 2025.12 - 2026.03',
  '深圳市鼎派家居有限公司 / 视觉设计与自媒体运营 / 2024.09 - 2025.07',
  '深圳市海尚会传媒有限公司 / 视频剪辑与独立站运营 / 2023.06 - 2024.07',
  '深圳市鼎派家居有限公司 / 设计师助理 / 2021.04 - 2023.05',
]

const profileChips = ['AIGC 视觉生产', '短视频剪辑', 'TikTok 运营', '电商视觉优化']

const skillBadges = [
  { image: skillPs, name: 'Photoshop', accent: '#72d7ff', glow: '#1d6dff', size: 'compact', x: '-11px', y: '-5px' },
  { image: skillAi, name: 'Illustrator', accent: '#ffbe62', glow: '#ff7a1a', size: 'compact', x: '0px', y: '-5px' },
  { image: skillAe, name: 'After Effects', accent: '#c6a3ff', glow: '#7a55ff', size: 'compact', x: '-11px', y: '0px' },
  { image: skillPr, name: 'Premiere Pro', accent: '#f7a1ff', glow: '#aa63ff', size: 'compact', x: '0px', y: '0px' },
  { image: skillAu, name: 'Audition', accent: '#88a8ff', glow: '#3675ff', size: 'compact', x: '-11px', y: '0px' },
  { image: skillDw, name: 'Dreamweaver', accent: '#73ffe9', glow: '#2de0d0', size: 'compact', x: '0px', y: '0px' },
  { image: skillC4d, name: 'Cinema 4D', accent: '#a8efff', glow: '#3aa6ff', size: 'wide', x: '-11px', y: '0px' },
  { image: skillUnity, name: 'Unity 3D', accent: '#e4edf4', glow: '#6aaee9', size: 'wide', x: '0px', y: '0px' },
  { image: skill3dsMax, name: '3ds Max', accent: '#8ef3dd', glow: '#2eb8ca', size: 'wide', x: '-7px', y: '0px' },
  { image: skillBlender, name: 'Blender', accent: '#ffb26a', glow: '#ff7d2f', size: 'wide', x: '0px', y: '0px' },
]

const glowProps = {
  edgeSensitivity: 28,
  glowColor: '4 100 62',
  backgroundColor: '#080808',
  borderRadius: 8,
  glowRadius: 34,
  glowIntensity: 0.9,
  coneSpread: 24,
  colors: ['#ff2b20', '#f5d26a', '#8bd4cd'],
}

const resumeModalArtworks = [
  {
    src: modalCardDog,
    label: 'ILLUSTRATION 01',
    title: 'Cyber Pet Identity',
  },
  {
    src: modalCardDragon,
    label: 'ILLUSTRATION 02',
    title: 'Blue Dragon Motion',
  },
]

const personalIpArtworks = [
  {
    src: personalIpJewelry,
    label: 'IP MERCH 01',
    title: 'Accessory System',
  },
  {
    src: personalIpShirt,
    label: 'IP MERCH 02',
    title: 'Apparel Mockup',
  },
  {
    src: personalIpBoard,
    label: 'CHARACTER 03',
    title: 'Rebel-2077 Guide',
  },
  {
    src: personalIpPlush,
    label: 'CHARACTER 04',
    title: 'Plush Figure',
  },
  {
    src: personalIpMerch,
    label: 'BRAND SYSTEM 05',
    title: 'Merchandise Matrix',
  },
  {
    src: personalIpStory,
    label: 'STORYBOARD 06',
    title: 'Narrative World',
  },
]

const ecomVisualCategories = [
  {
    label: 'Incense Brand Visual',
    title: '线香品牌视觉',
    description: '包装设计、详情页、礼盒结构和生活方式视觉，突出东方气质、材质表现与高端礼赠感。',
    items: [
      {
        src: ecomVisualIncenseOverview,
        label: 'INCENSE 01',
        title: 'Rose Incense Overview',
      },
      {
        src: ecomVisualIncenseGiftBox,
        label: 'INCENSE 02',
        title: 'Packaging Design',
      },
      {
        src: ecomVisualIncenseDetail,
        label: 'INCENSE 03',
        title: 'Detail Page System',
      },
      {
        src: ecomVisualIncenseLifestyle,
        label: 'INCENSE 04',
        title: 'Lifestyle Selling Page',
      },
    ],
  },
  {
    label: 'Pet Cleaning Commerce',
    title: '宠物清洁电商视觉',
    description: '长图详情页与卖点拆解，用明亮产品视觉呈现功能、场景、清洁逻辑和转化表达。',
    items: [
      {
        src: ecomVisualPetLongpage,
        label: 'PET 01',
        title: 'Smart Grooming Longpage',
      },
      {
        src: ecomVisualPetDetail,
        label: 'PET 02',
        title: 'Fur Pickup Detail',
      },
    ],
  },
]

const ecomVideos = [
  {
    label: 'Ring Showcase',
    meta: 'Jewelry Detail / Conversion Cut',
    src: './media/optimized/ecom-ring-showcase-web.mp4',
  },
  {
    label: 'Incense Story',
    meta: 'Lifestyle Product / Atmosphere Film',
    src: './media/optimized/ecom-incense-story-web.mp4',
  },
  {
    label: 'Pet Supplies',
    meta: 'TikTok Product / Soft Selling',
    src: './media/optimized/ecom-pet-supplies-web.mp4',
  },
]

const publicGoodVideo = {
  label: 'Public Good AI Spot',
  meta: 'AI Public Campaign / Cinematic Short',
  src: './media/optimized/public-good-ai-spot-web.mp4',
}

const aiFilmVideo = {
  label: 'Xiaohongshu AI Film',
  meta: 'AIGC Narrative / Concept Film',
  src: './media/optimized/ai-film-narrative-web.mp4',
}

const aiRealDramaVideo = {
  label: 'AI Live-action Drama',
  meta: 'Short Drama / Performance Test',
  src: './media/optimized/ai-real-drama-experiment-web.mp4',
}

export default function App() {
  const shellRef = useRef(null)
  const heroVideoRef = useRef(null)
  const modalTiltRef = useRef(null)
  const artworkTiltRef = useRef(null)
  const personalIpTiltRef = useRef(null)
  const ecomVisualTiltRef = useRef(null)
  const ecomTiltRef = useRef(null)
  const ecomVideoRef = useRef(null)
  const publicGoodTiltRef = useRef(null)
  const publicGoodVideoRef = useRef(null)
  const aiFilmTiltRef = useRef(null)
  const aiFilmVideoRef = useRef(null)
  const aiRealDramaTiltRef = useRef(null)
  const aiRealDramaVideoRef = useRef(null)
  const skillRailRef = useRef(null)
  const skillDragRef = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const warmedVideosRef = useRef(new Set())
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [resumeArtworkIndex, setResumeArtworkIndex] = useState(0)
  const [isIllustrationModalOpen, setIsIllustrationModalOpen] = useState(false)
  const [illustrationArtworkIndex, setIllustrationArtworkIndex] = useState(0)
  const [isPersonalIpModalOpen, setIsPersonalIpModalOpen] = useState(false)
  const [personalIpArtworkIndex, setPersonalIpArtworkIndex] = useState(0)
  const [isEcomVisualModalOpen, setIsEcomVisualModalOpen] = useState(false)
  const [ecomVisualCategoryIndex, setEcomVisualCategoryIndex] = useState(0)
  const [ecomVisualArtworkIndex, setEcomVisualArtworkIndex] = useState(0)
  const [isEcomModalOpen, setIsEcomModalOpen] = useState(false)
  const [activeEcomVideoIndex, setActiveEcomVideoIndex] = useState(0)
  const [isEcomVideoLoading, setIsEcomVideoLoading] = useState(false)
  const [isPublicGoodModalOpen, setIsPublicGoodModalOpen] = useState(false)
  const [isPublicGoodVideoLoading, setIsPublicGoodVideoLoading] = useState(false)
  const [isAiFilmModalOpen, setIsAiFilmModalOpen] = useState(false)
  const [isAiFilmVideoLoading, setIsAiFilmVideoLoading] = useState(false)
  const [hasAiFilmVideoError, setHasAiFilmVideoError] = useState(false)
  const [isAiRealDramaModalOpen, setIsAiRealDramaModalOpen] = useState(false)
  const [isAiRealDramaVideoLoading, setIsAiRealDramaVideoLoading] = useState(false)
  const [isNavFloating, setIsNavFloating] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 760px)').matches : false
  )

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 760px)')
    const updateMobileState = () => setIsMobileViewport(mobileQuery.matches)

    updateMobileState()
    mobileQuery.addEventListener?.('change', updateMobileState)

    return () => mobileQuery.removeEventListener?.('change', updateMobileState)
  }, [])

  useEffect(() => {
    if (!isEcomModalOpen) return undefined

    setIsEcomVideoLoading(true)
    const video = ecomVideoRef.current
    if (!video) return undefined

    video.load()

    const markReady = () => setIsEcomVideoLoading(false)
    const markLoading = () => setIsEcomVideoLoading(true)
    const checkReady = () => {
      if (video.readyState >= 1) markReady()
    }

    video.addEventListener('loadedmetadata', checkReady)
    video.addEventListener('loadeddata', markReady)
    video.addEventListener('canplay', markReady)
    video.addEventListener('canplaythrough', markReady)
    video.addEventListener('playing', markReady)
    video.addEventListener('waiting', markLoading)

    const frameId = window.requestAnimationFrame(checkReady)
    const timeoutId = window.setTimeout(checkReady, 900)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      video.removeEventListener('loadedmetadata', checkReady)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
      video.removeEventListener('canplaythrough', markReady)
      video.removeEventListener('playing', markReady)
      video.removeEventListener('waiting', markLoading)
    }
  }, [isEcomModalOpen, activeEcomVideoIndex])

  useEffect(() => {
    if (!isPublicGoodModalOpen) return undefined

    setIsPublicGoodVideoLoading(true)
    const video = publicGoodVideoRef.current
    if (!video) return undefined

    video.load()

    const markReady = () => setIsPublicGoodVideoLoading(false)
    const markLoading = () => setIsPublicGoodVideoLoading(true)
    const checkReady = () => {
      if (video.readyState >= 1) markReady()
    }

    video.addEventListener('loadedmetadata', checkReady)
    video.addEventListener('loadeddata', markReady)
    video.addEventListener('canplay', markReady)
    video.addEventListener('canplaythrough', markReady)
    video.addEventListener('playing', markReady)
    video.addEventListener('waiting', markLoading)

    const frameId = window.requestAnimationFrame(checkReady)
    const timeoutId = window.setTimeout(checkReady, 900)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      video.removeEventListener('loadedmetadata', checkReady)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
      video.removeEventListener('canplaythrough', markReady)
      video.removeEventListener('playing', markReady)
      video.removeEventListener('waiting', markLoading)
    }
  }, [isPublicGoodModalOpen])

  useEffect(() => {
    if (!isAiFilmModalOpen) return undefined

    setIsAiFilmVideoLoading(true)
    setHasAiFilmVideoError(false)
    const video = aiFilmVideoRef.current
    if (!video) return undefined

    video.load()

    const markReady = () => setIsAiFilmVideoLoading(false)
    const markLoading = () => setIsAiFilmVideoLoading(true)
    const checkReady = () => {
      if (video.readyState >= 1) markReady()
    }

    video.addEventListener('loadedmetadata', checkReady)
    video.addEventListener('loadeddata', markReady)
    video.addEventListener('canplay', markReady)
    video.addEventListener('canplaythrough', markReady)
    video.addEventListener('playing', markReady)
    video.addEventListener('waiting', markLoading)
    const markError = () => {
      setHasAiFilmVideoError(true)
      markReady()
    }

    video.addEventListener('error', markError)

    const frameId = window.requestAnimationFrame(checkReady)
    const timeoutId = window.setTimeout(checkReady, 900)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      video.removeEventListener('loadedmetadata', checkReady)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
      video.removeEventListener('canplaythrough', markReady)
      video.removeEventListener('playing', markReady)
      video.removeEventListener('waiting', markLoading)
      video.removeEventListener('error', markError)
    }
  }, [isAiFilmModalOpen])

  useEffect(() => {
    if (!isAiRealDramaModalOpen) return undefined

    setIsAiRealDramaVideoLoading(true)
    const video = aiRealDramaVideoRef.current
    if (!video) return undefined

    video.load()

    const markReady = () => setIsAiRealDramaVideoLoading(false)
    const markLoading = () => setIsAiRealDramaVideoLoading(true)
    const checkReady = () => {
      if (video.readyState >= 1) markReady()
    }

    video.addEventListener('loadedmetadata', checkReady)
    video.addEventListener('loadeddata', markReady)
    video.addEventListener('canplay', markReady)
    video.addEventListener('canplaythrough', markReady)
    video.addEventListener('playing', markReady)
    video.addEventListener('waiting', markLoading)

    const frameId = window.requestAnimationFrame(checkReady)
    const timeoutId = window.setTimeout(checkReady, 900)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      video.removeEventListener('loadedmetadata', checkReady)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
      video.removeEventListener('canplaythrough', markReady)
      video.removeEventListener('playing', markReady)
      video.removeEventListener('waiting', markLoading)
    }
  }, [isAiRealDramaModalOpen])

  useEffect(() => {
    if (!isPersonalIpModalOpen) return undefined

    const intervalId = window.setInterval(() => {
      setPersonalIpArtworkIndex((current) => (current + 1) % personalIpArtworks.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [isPersonalIpModalOpen])

  useEffect(() => {
    if (!isEcomVisualModalOpen) return undefined

    const intervalId = window.setInterval(() => {
      setEcomVisualArtworkIndex((current) => {
        const itemCount = ecomVisualCategories[ecomVisualCategoryIndex].items.length
        return (current + 1) % itemCount
      })
    }, 3800)

    return () => window.clearInterval(intervalId)
  }, [isEcomVisualModalOpen, ecomVisualCategoryIndex])

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = './files/qi-wantong-resume.docx'
    link.download = '齐婉彤简历.docx'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setIsResumeModalOpen(false)
  }

  const scheduleIdleTask = (callback, timeout = 2200) => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(callback, { timeout })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(callback, timeout)
    return () => window.clearTimeout(timeoutId)
  }

  const warmVideo = (src, preload = 'metadata') => {
    const warmKey = `${preload}:${src}`
    if (!src || warmedVideosRef.current.has(warmKey)) return
    warmedVideosRef.current.add(warmKey)

    const video = document.createElement('video')
    video.src = src
    video.preload = preload
    video.muted = true
    video.playsInline = true
    video.style.position = 'fixed'
    video.style.width = '1px'
    video.style.height = '1px'
    video.style.opacity = '0'
    video.style.pointerEvents = 'none'
    video.style.left = '-10px'
    video.style.top = '-10px'
    video.setAttribute('aria-hidden', 'true')
    document.body.appendChild(video)
    video.load()
    window.setTimeout(() => video.remove(), preload === 'auto' ? 90000 : 45000)
  }

  useEffect(() => {
    return scheduleIdleTask(() => {
      if (isMobileViewport) return

      warmVideo(aiFilmVideo.src, 'metadata')
      warmVideo(publicGoodVideo.src, 'metadata')
      warmVideo(aiRealDramaVideo.src, 'metadata')

      window.setTimeout(() => warmVideo(ecomVideos[0].src, 'metadata'), 1600)
      window.setTimeout(() => warmVideo(ecomVideos[1].src, 'metadata'), 3200)
      window.setTimeout(() => warmVideo(ecomVideos[2].src, 'metadata'), 4200)
    }, 2600)
  }, [isMobileViewport])

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
          return
        }

        video.pause()
      },
      { threshold: 0.12 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const rail = skillRailRef.current
    if (!rail) return undefined

    let frameId = 0
    let lastTime = performance.now()

    const normalizeScroll = () => {
      const halfWidth = rail.scrollWidth / 2
      if (halfWidth <= 0) return
      if (rail.scrollLeft >= halfWidth) rail.scrollLeft -= halfWidth
      if (rail.scrollLeft <= 0) rail.scrollLeft += halfWidth
    }

    const tick = (time) => {
      const delta = Math.min(time - lastTime, 48)
      lastTime = time

      if (!skillDragRef.current.active && !document.hidden) {
        rail.scrollLeft += delta * 0.045
        normalizeScroll()
      }

      frameId = window.requestAnimationFrame(tick)
    }

    rail.scrollLeft = 1
    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleSkillPointerDown = (event) => {
    const rail = skillRailRef.current
    if (!rail) return

    skillDragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: rail.scrollLeft,
    }
    rail.classList.add('is-dragging')
    rail.setPointerCapture?.(event.pointerId)
  }

  const handleSkillPointerMove = (event) => {
    const rail = skillRailRef.current
    const drag = skillDragRef.current
    if (!rail) return

    const panel = rail.closest('.skill-flow-inner')
    const panelRect = panel?.getBoundingClientRect()
    if (panel && panelRect) {
      const pointerX = Math.min(Math.max(((event.clientX - panelRect.left) / panelRect.width) * 100, 0), 100)
      panel.style.setProperty('--skill-flow-x', `${pointerX}%`)
    }

    if (!drag.active) return

    const halfWidth = rail.scrollWidth / 2
    if (halfWidth <= 0) return
    const nextLeft = drag.scrollLeft + (drag.startX - event.clientX) * 1.15
    rail.scrollLeft = ((nextLeft % halfWidth) + halfWidth) % halfWidth
  }

  const releaseSkillDrag = (event) => {
    const rail = skillRailRef.current
    if (!rail) return

    skillDragRef.current.active = false
    rail.classList.remove('is-dragging')
    rail.releasePointerCapture?.(event.pointerId)
  }

  const handleResumeModalPointerMove = (event) => {
    const card = modalTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 8
    const rotateY = (percentX - 50) / 10

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 7}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 8}px`)
  }

  const handleResumeModalPointerLeave = () => {
    const card = modalTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handleIllustrationModalPointerMove = (event) => {
    const card = artworkTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 8
    const rotateY = (percentX - 50) / 10

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 7}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 8}px`)
  }

  const handleIllustrationModalPointerLeave = () => {
    const card = artworkTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handleEcomModalPointerMove = (event) => {
    const card = ecomTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 9
    const rotateY = (percentX - 50) / 11

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 8}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 9}px`)
  }

  const handleEcomModalPointerLeave = () => {
    const card = ecomTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handlePublicGoodModalPointerMove = (event) => {
    const card = publicGoodTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 11
    const rotateY = (percentX - 50) / 13

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 10}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 11}px`)
  }

  const handlePublicGoodModalPointerLeave = () => {
    const card = publicGoodTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handleAiFilmModalPointerMove = (event) => {
    const card = aiFilmTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 11
    const rotateY = (percentX - 50) / 13

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 10}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 11}px`)
  }

  const handleAiFilmModalPointerLeave = () => {
    const card = aiFilmTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handleAiRealDramaModalPointerMove = (event) => {
    const card = aiRealDramaTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 11
    const rotateY = (percentX - 50) / 13

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 10}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 11}px`)
  }

  const handleAiRealDramaModalPointerLeave = () => {
    const card = aiRealDramaTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handlePersonalIpModalPointerMove = (event) => {
    const card = personalIpTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 13
    const rotateY = (percentX - 50) / 14

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 10}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 12}px`)
  }

  const handlePersonalIpModalPointerLeave = () => {
    const card = personalIpTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const handleEcomVisualModalPointerMove = (event) => {
    const card = ecomVisualTiltRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const percentX = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    const percentY = Math.min(Math.max((y / rect.height) * 100, 0), 100)
    const rotateX = (50 - percentY) / 13
    const rotateY = (percentX - 50) / 14

    card.style.setProperty('--modal-pointer-x', `${percentX}%`)
    card.style.setProperty('--modal-pointer-y', `${percentY}%`)
    card.style.setProperty('--modal-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--modal-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--modal-shift-x', `${(percentX - 50) / 10}px`)
    card.style.setProperty('--modal-shift-y', `${(percentY - 50) / 12}px`)
  }

  const handleEcomVisualModalPointerLeave = () => {
    const card = ecomVisualTiltRef.current
    if (!card) return

    card.style.setProperty('--modal-pointer-x', '50%')
    card.style.setProperty('--modal-pointer-y', '50%')
    card.style.setProperty('--modal-rotate-x', '0deg')
    card.style.setProperty('--modal-rotate-y', '0deg')
    card.style.setProperty('--modal-shift-x', '0px')
    card.style.setProperty('--modal-shift-y', '0px')
  }

  const changeResumeArtwork = (direction) => {
    setResumeArtworkIndex((current) => (
      current + direction + resumeModalArtworks.length
    ) % resumeModalArtworks.length)
  }

  const changeIllustrationArtwork = (direction) => {
    setIllustrationArtworkIndex((current) => (
      current + direction + resumeModalArtworks.length
    ) % resumeModalArtworks.length)
  }

  const changePersonalIpArtwork = (direction) => {
    setPersonalIpArtworkIndex((current) => (
      current + direction + personalIpArtworks.length
    ) % personalIpArtworks.length)
  }

  const changeEcomVisualArtwork = (direction) => {
    setEcomVisualArtworkIndex((current) => {
      const itemCount = ecomVisualCategories[ecomVisualCategoryIndex].items.length
      return (current + direction + itemCount) % itemCount
    })
  }

  const selectEcomVisualCategory = (index) => {
    setEcomVisualCategoryIndex(index)
    setEcomVisualArtworkIndex(0)
  }

  const openIllustrationModal = () => {
    setIllustrationArtworkIndex(0)
    setIsIllustrationModalOpen(true)
  }

  const openPersonalIpModal = () => {
    setPersonalIpArtworkIndex(0)
    setIsPersonalIpModalOpen(true)
  }

  const openEcomVisualModal = () => {
    setEcomVisualCategoryIndex(0)
    setEcomVisualArtworkIndex(0)
    setIsEcomVisualModalOpen(true)
  }

  const openEcomModal = () => {
    setActiveEcomVideoIndex(0)
    setIsEcomVideoLoading(true)
    warmVideo(ecomVideos[0].src, 'metadata')
    setIsEcomModalOpen(true)
  }

  const openPublicGoodModal = () => {
    setIsPublicGoodVideoLoading(true)
    warmVideo(publicGoodVideo.src, 'metadata')
    setIsPublicGoodModalOpen(true)
  }

  const openAiFilmModal = () => {
    setIsAiFilmVideoLoading(true)
    setHasAiFilmVideoError(false)
    warmVideo(aiFilmVideo.src, 'metadata')
    setIsAiFilmModalOpen(true)
  }

  const openAiRealDramaModal = () => {
    setIsAiRealDramaVideoLoading(true)
    warmVideo(aiRealDramaVideo.src, 'metadata')
    setIsAiRealDramaModalOpen(true)
  }

  const closeEcomModal = () => {
    ecomVideoRef.current?.pause()
    setIsEcomModalOpen(false)
    setIsEcomVideoLoading(false)
  }

  const closePublicGoodModal = () => {
    publicGoodVideoRef.current?.pause()
    setIsPublicGoodModalOpen(false)
    setIsPublicGoodVideoLoading(false)
  }

  const closeAiFilmModal = () => {
    aiFilmVideoRef.current?.pause()
    setIsAiFilmModalOpen(false)
    setIsAiFilmVideoLoading(false)
    setHasAiFilmVideoError(false)
  }

  const closeAiRealDramaModal = () => {
    aiRealDramaVideoRef.current?.pause()
    setIsAiRealDramaModalOpen(false)
    setIsAiRealDramaVideoLoading(false)
  }

  const selectEcomVideo = (index) => {
    if (index === activeEcomVideoIndex) return
    warmVideo(ecomVideos[index].src, 'metadata')
    setActiveEcomVideoIndex(index)
    setIsEcomVideoLoading(true)
  }

  const handleEcomOptionPointer = (event) => {
    const option = event.target.closest('[data-video-index]')
    if (!option) return
    selectEcomVideo(Number(option.dataset.videoIndex))
  }

  const handleIllustrationProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openIllustrationModal()
  }

  const handlePersonalIpProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openPersonalIpModal()
  }

  const handleEcomVisualProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openEcomVisualModal()
  }

  const handleEcomProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openEcomModal()
  }

  const handlePublicGoodProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openPublicGoodModal()
  }

  const handleAiFilmProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openAiFilmModal()
  }

  const handleAiRealDramaProjectKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openAiRealDramaModal()
  }

  useEffect(() => {
    let ticking = false
    let currentState = false

    const updateNavState = () => {
      ticking = false
      const nextState = window.scrollY > window.innerHeight * 0.72
      if (nextState !== currentState) {
        currentState = nextState
        setIsNavFloating(nextState)
      }
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateNavState)
    }

    updateNavState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (window.matchMedia('(max-width: 760px), (prefers-reduced-motion: reduce)').matches) {
        gsap.set('.opening-mask', { autoAlpha: 0 })
        gsap.set('.nav, .poster-labels, .poster-title, .poster-bottom', { autoAlpha: 1 })
        gsap.set('.hero-video', { scale: 1.02 })
        return
      }

      gsap.set('.nav, .poster-labels, .poster-title, .poster-bottom', {
        autoAlpha: 0,
      })
      gsap.set('.poster-title', { yPercent: 34, scaleX: 0.86, filter: 'blur(10px)' })
      gsap.set('.poster-bottom > *', { y: 80, autoAlpha: 0 })
      gsap.set('.hero-video', { scale: 1.12 })

      const opening = gsap.timeline({ defaults: { ease: 'power4.out' } })
      opening
        .to('.opening-panel-left', { xPercent: -102, duration: 1.35, ease: 'expo.inOut' }, 0.15)
        .to('.opening-panel-right', { xPercent: 102, duration: 1.35, ease: 'expo.inOut' }, 0.15)
        .to('.opening-line', { scaleX: 1, duration: 0.78, ease: 'power3.inOut' }, 0.08)
        .to('.opening-line', { scaleX: 0, transformOrigin: 'right center', duration: 0.62, ease: 'power3.inOut' }, 0.78)
        .to('.opening-mark span', { yPercent: -115, duration: 0.8, stagger: 0.08, ease: 'power3.inOut' }, 0.34)
        .to('.opening-mask', { autoAlpha: 0, duration: 0.45 }, 1.28)
        .to('.hero-video', { scale: 1.06, duration: 1.35 }, 0.62)
        .to('.nav', { autoAlpha: 1, duration: 0.86, clearProps: 'transform' }, 0.86)
        .to('.poster-labels', { autoAlpha: 1, y: 0, duration: 0.72 }, 1.02)
        .to('.poster-title', { autoAlpha: 1, yPercent: 0, scaleX: 1.08, filter: 'blur(0px)', duration: 1.15 }, 1.08)
        .to('.poster-bottom > *', { autoAlpha: 1, y: 0, duration: 0.86, stagger: 0.14 }, 1.32)

      gsap.utils.toArray('.section').forEach((section) => {
        const heading = section.querySelector('.section-heading h2, .profile-section-title')
        const kicker = section.querySelector('.section-kicker')
        const cards = section.querySelectorAll(
          '.profile-portrait-glow, .profile-detail, .project-glow, .strength-glow'
        )
        const visuals = section.querySelectorAll('.project-visual')

        if (kicker) {
          gsap.from(kicker, {
            scrollTrigger: { trigger: section, start: 'top 78%', once: true },
            y: 36,
            autoAlpha: 0,
            duration: 0.95,
            ease: 'power3.out',
          })
        }

        if (heading) {
          gsap.from(heading, {
            scrollTrigger: { trigger: section, start: 'top 76%', once: true },
            xPercent: -18,
            y: 80,
            scale: 1.18,
            autoAlpha: 0,
            filter: 'blur(8px)',
            duration: 1.18,
            ease: 'power4.out',
          })
        }

        if (cards.length) {
          gsap.from(cards, {
            scrollTrigger: { trigger: section, start: 'top 68%', once: true },
            y: 96,
            autoAlpha: 0,
            clipPath: 'inset(18% 0% 0% 0%)',
            duration: 1.05,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'clipPath',
          })
        }

        section.querySelectorAll('.portrait-card, .project-card').forEach((card) => {
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
            y: -22,
            ease: 'none',
          })
        })

        visuals.forEach((visual) => {
          gsap.to(visual, {
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
            y: -26,
            scale: 1.035,
            ease: 'none',
          })
        })
      })

      gsap.from('.contact-finale .finale-copy > *', {
        scrollTrigger: { trigger: '.contact-finale', start: 'top 72%', once: true },
        y: 84,
        autoAlpha: 0,
        duration: 1.05,
        stagger: 0.13,
        ease: 'power4.out',
      })

      gsap.from('.contact-card', {
        scrollTrigger: { trigger: '.contact-finale', start: 'top 68%', once: true },
        x: 120,
        rotateY: -10,
        autoAlpha: 0,
        duration: 1.25,
        ease: 'power4.out',
      })
    }, shellRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="site-shell" ref={shellRef}>
      <div className="opening-mask" aria-hidden="true">
        <div className="opening-panel opening-panel-left" />
        <div className="opening-panel opening-panel-right" />
        <div className="opening-line" />
        <div className="opening-mark">
          <span>QI</span>
          <span>WANTONG</span>
        </div>
      </div>
      <section
        className="hero poster-hero dragon-hero video-hero"
        id="home"
      >
        <video
          ref={heroVideoRef}
          className="hero-video portfolio-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="./media/optimized/hero-video-web.mp4" type="video/mp4" />
        </video>
        <div className="hero-fallback" />

        <nav className={`nav poster-nav ${isNavFloating ? 'nav-floating' : ''}`}>
          <a href="#home" className="brand">
            <img src={siteLogo} alt="QI WANTONG logo" />
            <strong>QI WANTONG</strong>
          </a>
          <div className="nav-links" aria-label="页面导航">
            <a href="#home">首页</a>
            <a href="#profile">经历</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
          </div>
          <a className="nav-contact" href="#contact">联系我</a>
        </nav>

        <div className="poster-frame">
          <div className="poster-labels">
            <span>PORTFOLIO</span>
            <span>AIGC DESIGNER</span>
          </div>
          <h1 className="poster-title">QIWANTONG</h1>
        </div>

        <div className="poster-bottom">
          <div className="poster-metric">
            <strong>500+</strong>
            <span>Custom short videos<br />delivered monthly</span>
          </div>
          <div className="poster-intro">
            <p>
              无界 · 无尽 · 无终
              <span>Boundless · Endless · Timeless</span>
            </p>
            <span>AIGC 设计师 / 视频剪辑师 / TikTok 运营</span>
          </div>
          <div className="poster-slogan">
            <b>CONTENT</b>
            <strong>IS NOT DECORATION</strong>
          </div>
        </div>

        <section className="skill-flow" aria-label="创作软件技能">
          <div className="skill-flow-inner">
            <div className="skill-flow-heading">
              <span>TOOL STACK</span>
              <strong>AI Design · Video · 3D · Motion</strong>
            </div>
            <div
              ref={skillRailRef}
              className="skill-rail"
              onPointerDown={handleSkillPointerDown}
              onPointerMove={handleSkillPointerMove}
              onPointerUp={releaseSkillDrag}
              onPointerCancel={releaseSkillDrag}
              onPointerLeave={releaseSkillDrag}
            >
              <div className="skill-track">
                {[...skillBadges, ...skillBadges].map((skill, index) => (
                  <article
                    className={`skill-badge skill-badge-${skill.size}`}
                    key={`${skill.name}-${index}`}
                    style={{
                      '--skill-accent': skill.accent,
                      '--skill-glow': skill.glow,
                      '--skill-icon-x': skill.x,
                      '--skill-icon-y': skill.y,
                    }}
                  >
                    <div className="skill-glass-shell">
                      <img className="skill-icon-image" src={skill.image} alt={skill.name} draggable="false" />
                    </div>
                    <small>{skill.name}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="middle-content">
        {!isMobileViewport && (
          <div className="page-aurora" aria-hidden="true">
            <Aurora
              colorStops={['#06B6D4', '#B497CF', '#5227FF']}
              blend={0.46}
              amplitude={0.78}
              speed={0.36}
            />
          </div>
        )}

      <section className="profile section" id="profile">
        <div className="section-inner profile-showcase">
          <p className="profile-section-title">个人经历</p>
          <div className="profile-panel">
            <BorderGlow className="portrait-glow profile-portrait-glow" animated {...glowProps}>
              <div className="portrait-card profile-portrait-card" aria-label="人物形象展示">
                <div className="profile-card-cover" aria-hidden="true">
                  <img src={profileCardCover} alt="" />
                  <div className="profile-card-cover-meta">
                    <span>REBEL-2077</span>
                    <strong>QI WANTONG</strong>
                    <small>AIGC / VIDEO / TIKTOK</small>
                  </div>
                </div>
                <div className="portrait-orbit" />
                <div className="portrait-photo-shell">
                  <img className="portrait-photo" src={portraitPhoto} alt="齐婉彤个人照片" />
                </div>
                <div className="portrait-nameplate">
                  <span>QI WANTONG</span>
                  <strong>AIGC / VIDEO / TIKTOK</strong>
                </div>
              </div>
            </BorderGlow>

            <div className="profile-detail">
              <p className="section-kicker">ABOUT ME</p>
              <h2>Hi, I am Qi Wantong!</h2>
              <p className="profile-lead">
                我是具备 AIGC 内容生产、短视频剪辑、海外账号运营和复合视觉设计经验的创作者。擅长把 AI 工具链接入内容生产，从选题、脚本、剪辑、特效包装到发布运营，持续提升内容效率、视觉质感与增长结果。
              </p>

              <div className="profile-info-grid">
                <div>
                  <span>求职意向</span>
                  <strong>AIGC / 视频剪辑</strong>
                </div>
                <div>
                  <span>服务方向</span>
                  <strong>Video / Visual / TikTok</strong>
                </div>
                <div>
                  <span>手机</span>
                  <strong>{contact.phone}</strong>
                </div>
                <div>
                  <span>邮箱</span>
                  <strong>{contact.email}</strong>
                </div>
              </div>

              <div className="profile-stat-strip">
                {stats.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="profile-lower">
                <div>
                  <span>NOW BUILDING</span>
                  <div className="profile-chips">
                    {profileChips.map((item) => (
                      <b key={item}>{item}</b>
                    ))}
                  </div>
                </div>
                <div className="profile-current">
                  <span>近期经历</span>
                  <strong>{experiences[0]}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">SELECTED WORKS</p>
            <h2>精选项目</h2>
          </div>
          <div className="project-grid project-category-grid">
            {projectCategories.map((project, index) => (
              <BorderGlow
                className="project-glow"
                key={project.title}
                animated={index === 0}
                fillOpacity={0.32}
                {...glowProps}
              >
                {(() => {
                  const isIllustrationProject = project.tone === 'project-e'
                  const isEcomProject = project.tone === 'project-d'
                  const isPublicGoodProject = project.tone === 'project-b'
                  const isAiFilmProject = project.tone === 'project-a'
                  const isAiRealDramaProject = project.tone === 'project-i'
                  const isPersonalIpProject = project.tone === 'project-c'
                  const isEcomVisualProject = project.tone === 'project-g'
                  const isInteractiveProject = isIllustrationProject || isEcomProject || isPublicGoodProject || isAiFilmProject || isAiRealDramaProject || isPersonalIpProject || isEcomVisualProject
                  const openProject = isIllustrationProject
                    ? openIllustrationModal
                    : isEcomProject
                      ? openEcomModal
                      : isPublicGoodProject
                        ? openPublicGoodModal
                        : isAiFilmProject
                          ? openAiFilmModal
                          : isAiRealDramaProject
                            ? openAiRealDramaModal
                            : isPersonalIpProject
                              ? openPersonalIpModal
                              : isEcomVisualProject
                                ? openEcomVisualModal
                                : undefined
                  const handleProjectKeyDown = isIllustrationProject
                    ? handleIllustrationProjectKeyDown
                    : isEcomProject
                      ? handleEcomProjectKeyDown
                      : isPublicGoodProject
                        ? handlePublicGoodProjectKeyDown
                        : isAiFilmProject
                          ? handleAiFilmProjectKeyDown
                          : isAiRealDramaProject
                            ? handleAiRealDramaProjectKeyDown
                            : isPersonalIpProject
                              ? handlePersonalIpProjectKeyDown
                              : isEcomVisualProject
                                ? handleEcomVisualProjectKeyDown
                                : undefined
                  const warmProjectVideo = isEcomProject
                    ? () => warmVideo(ecomVideos[0].src, 'metadata')
                    : isPublicGoodProject
                      ? () => warmVideo(publicGoodVideo.src, 'metadata')
                      : isAiFilmProject
                        ? () => warmVideo(aiFilmVideo.src, 'metadata')
                        : isAiRealDramaProject
                          ? () => warmVideo(aiRealDramaVideo.src, 'metadata')
                          : undefined

                  return (
                <article
                  className={`project-card ${project.tone}${isInteractiveProject ? ' is-clickable' : ''}`}
                  role={isInteractiveProject ? 'button' : undefined}
                  tabIndex={isInteractiveProject ? 0 : undefined}
                  onClick={openProject}
                  onKeyDown={handleProjectKeyDown}
                  onPointerEnter={warmProjectVideo}
                  onFocus={warmProjectVideo}
                  aria-label={isIllustrationProject ? '打开手绘与视觉插画作品预览' : isEcomProject ? '打开电商转化视频作品预览' : isPublicGoodProject ? '打开 AI 公益传播短片预览' : isAiFilmProject ? '打开 AI 微电影叙事作品预览' : isAiRealDramaProject ? '打开 AI 真人短剧实验预览' : undefined}
                >
                  <div className="project-visual">
                    {isIllustrationProject && (
                      <img className="project-cover-image" src={modalCardDragon} alt="蓝龙手绘插画封面" loading="lazy" decoding="async" />
                    )}
                    {isAiFilmProject && (
                      <img className="project-cover-image ai-film-project-cover" src={aiFilmCover} alt="AI 微电影叙事封面" loading="lazy" decoding="async" />
                    )}
                    {isPublicGoodProject && (
                      <img className="project-cover-image public-good-project-cover" src={publicGoodCover} alt="AI 公益传播短片封面" loading="lazy" decoding="async" />
                    )}
                    {isAiRealDramaProject && (
                      <img className="project-cover-image ai-real-drama-project-cover" src={aiRealDramaCover} alt="AI 真人短剧实验封面" loading="lazy" decoding="async" />
                    )}
                    {isEcomProject && (
                      <img className="project-cover-image ecom-project-cover" src={ecomVideoCover} alt="电商转化视频封面" loading="lazy" decoding="async" />
                    )}
                    {isPersonalIpProject && (
                      <img className="project-cover-image personal-ip-project-cover" src={personalIpMerch} alt="Personal IP visual system cover" loading="lazy" decoding="async" />
                    )}
                    {isEcomVisualProject && (
                      <div className="ecom-visual-project-cover" aria-hidden="true">
                        <img src={ecomVisualIncenseGiftBox} alt="" loading="lazy" decoding="async" />
                        <img src={ecomVisualPetLongpage} alt="" loading="lazy" decoding="async" />
                      </div>
                    )}
                    <span>{project.tag}</span>
                  </div>
                  <div className="project-info">
                    <p>{project.meta}</p>
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                    {isPublicGoodProject && <b className="project-open-hint">View public spot</b>}
                    {isAiFilmProject && <b className="project-open-hint">View AI film</b>}
                    {isAiRealDramaProject && <b className="project-open-hint">View drama test</b>}
                    {isPersonalIpProject && <b className="project-open-hint">View IP system</b>}
                    {isEcomVisualProject && <b className="project-open-hint">View visual works</b>}
                    {isIllustrationProject && <b className="project-open-hint">查看插画作品</b>}
                    {isEcomProject && <b className="project-open-hint">查看视频案例</b>}
                  </div>
                </article>
                  )
                })()}
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="section-kicker">CAPABILITY</p>
            <h2>个人优势</h2>
          </div>
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <BorderGlow className="strength-glow" key={item.title} {...glowProps}>
                <article className="strength-card">
                  <div className="strength-card-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <small>{item.type}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="strength-points" aria-label={`${item.title}细节`}>
                    {item.points.map((point, pointIndex) => (
                      <span key={point} className={`strength-point point-${pointIndex + 1}`}>
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="contact-finale" id="contact">
        <div className="section-inner finale-inner">
          <div className="finale-copy">
            <p className="section-kicker">联系方式</p>
            <h2>
              Elevate the next video,
              <span>the next visual</span>
              <em>
                craft content that lingers.
                <b>↘</b>
              </em>
            </h2>
            <p className="finale-subtitle">AIGC Design · Short Video · TikTok Operation</p>
            <div className="finale-actions">
              <a href={`mailto:${contact.email}`}>发送邮件</a>
              <button className="resume-trigger" type="button" onClick={() => setIsResumeModalOpen(true)}>
                下载简历
              </button>
            </div>
          </div>

          <div className="contact-card" aria-label="联系信息与微信二维码">
            <p>CONTACT</p>
            <div className="contact-card-list">
              <a href={`tel:${contact.phone}`}>
                <span>手机</span>
                <strong>{contact.phone}</strong>
              </a>
              <span>
                <span>微信号</span>
                <strong>{contact.wechat}</strong>
              </span>
              <span>
                <span>QQ</span>
                <strong>{contact.qq}</strong>
              </span>
              <a href={`mailto:${contact.email}`}>
                <span>邮箱</span>
                <strong>{contact.email}</strong>
              </a>
            </div>
            <small>Visual, Brand & AI Content</small>
            <div className="qr-frame">
              <img src={wechatQr} alt="微信二维码" />
            </div>
            <b>扫码添加微信</b>
          </div>
        </div>
      </section>

      <div
        className={`resume-modal-layer ecom-video-modal-layer ai-film-modal-layer ${isAiFilmModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isAiFilmModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="Close AI film video preview"
          onClick={closeAiFilmModal}
        />
        <section
          ref={aiFilmTiltRef}
          className="resume-modal ecom-video-modal public-good-modal ai-film-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-film-modal-title"
          onPointerMove={handleAiFilmModalPointerMove}
          onPointerLeave={handleAiFilmModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close" type="button" aria-label="Close AI film video preview" onClick={closeAiFilmModal}>
            <span>Close</span>
            <b>×</b>
          </button>
          <aside className="video-option-panel public-good-panel ai-film-panel">
            <p>AIGC NARRATIVE</p>
            <h2 id="ai-film-modal-title">AI CONCEPT FILM</h2>
            <div className="public-good-meta">
              <span>01</span>
              <strong>{aiFilmVideo.label}</strong>
              <small>{aiFilmVideo.meta}</small>
            </div>
          </aside>

          <div className="video-stage public-good-stage ai-film-stage">
            <div className="video-frame public-good-frame ai-film-frame">
              {isAiFilmVideoLoading && (
                <div className="video-loading">
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                </div>
              )}
              {isAiFilmModalOpen && (
                <video
                  ref={aiFilmVideoRef}
                  src={aiFilmVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={aiFilmCover}
                  onLoadStart={() => setIsAiFilmVideoLoading(true)}
                  onWaiting={() => setIsAiFilmVideoLoading(true)}
                  onLoadedMetadata={() => setIsAiFilmVideoLoading(false)}
                  onLoadedData={() => setIsAiFilmVideoLoading(false)}
                  onCanPlay={() => setIsAiFilmVideoLoading(false)}
                  onError={() => {
                    setHasAiFilmVideoError(true)
                    setIsAiFilmVideoLoading(false)
                  }}
                />
              )}
              {hasAiFilmVideoError && (
                <div className="ai-film-empty">
                  <span>等待放入小红书视频文件</span>
                  <strong>public/media/optimized/ai-film-narrative-web.mp4</strong>
                </div>
              )}
            </div>
            <div className="video-stage-caption">
              <span>{aiFilmVideo.label}</span>
              <strong>{aiFilmVideo.meta}</strong>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`resume-modal-layer ecom-video-modal-layer ai-film-modal-layer ai-real-drama-modal-layer ${isAiRealDramaModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isAiRealDramaModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="Close AI live-action drama preview"
          onClick={closeAiRealDramaModal}
        />
        <section
          ref={aiRealDramaTiltRef}
          className="resume-modal ecom-video-modal public-good-modal ai-film-modal ai-real-drama-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-real-drama-modal-title"
          onPointerMove={handleAiRealDramaModalPointerMove}
          onPointerLeave={handleAiRealDramaModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close" type="button" aria-label="Close AI live-action drama preview" onClick={closeAiRealDramaModal}>
            <span>Close</span>
            <b>×</b>
          </button>
          <aside className="video-option-panel public-good-panel ai-film-panel">
            <p>LIVE-ACTION TEST</p>
            <h2 id="ai-real-drama-modal-title">AI SHORT DRAMA EXPERIMENT</h2>
            <div className="public-good-meta">
              <span>01</span>
              <strong>{aiRealDramaVideo.label}</strong>
              <small>{aiRealDramaVideo.meta}</small>
            </div>
          </aside>

          <div className="video-stage public-good-stage ai-film-stage ai-real-drama-stage">
            <div className="video-frame public-good-frame ai-film-frame ai-real-drama-frame">
              {isAiRealDramaVideoLoading && (
                <div className="video-loading">
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                </div>
              )}
              {isAiRealDramaModalOpen && (
                <video
                  ref={aiRealDramaVideoRef}
                  src={aiRealDramaVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={aiRealDramaCover}
                  onLoadStart={() => setIsAiRealDramaVideoLoading(true)}
                  onWaiting={() => setIsAiRealDramaVideoLoading(true)}
                  onLoadedMetadata={() => setIsAiRealDramaVideoLoading(false)}
                  onLoadedData={() => setIsAiRealDramaVideoLoading(false)}
                  onCanPlay={() => setIsAiRealDramaVideoLoading(false)}
                />
              )}
            </div>
            <div className="video-stage-caption">
              <span>{aiRealDramaVideo.label}</span>
              <strong>{aiRealDramaVideo.meta}</strong>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`resume-modal-layer ecom-video-modal-layer public-good-modal-layer ${isPublicGoodModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isPublicGoodModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="Close AI public campaign video preview"
          onClick={closePublicGoodModal}
        />
        <section
          ref={publicGoodTiltRef}
          className="resume-modal ecom-video-modal public-good-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="public-good-modal-title"
          onPointerMove={handlePublicGoodModalPointerMove}
          onPointerLeave={handlePublicGoodModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close" type="button" aria-label="Close AI public campaign video preview" onClick={closePublicGoodModal}>
            <span>Close</span>
            <b>×</b>
          </button>
          <aside className="video-option-panel public-good-panel">
            <p>PUBLIC CAMPAIGN</p>
            <h2 id="public-good-modal-title">AI PUBLIC GOOD SPOT</h2>
            <div className="public-good-meta">
              <span>01</span>
              <strong>{publicGoodVideo.label}</strong>
              <small>{publicGoodVideo.meta}</small>
            </div>
          </aside>

          <div className="video-stage public-good-stage">
            <div className="video-frame public-good-frame">
              {isPublicGoodVideoLoading && (
                <div className="video-loading">
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                </div>
              )}
              {isPublicGoodModalOpen && (
                <video
                  ref={publicGoodVideoRef}
                  src={publicGoodVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={publicGoodCover}
                  onLoadStart={() => setIsPublicGoodVideoLoading(true)}
                  onWaiting={() => setIsPublicGoodVideoLoading(true)}
                  onLoadedData={() => setIsPublicGoodVideoLoading(false)}
                  onCanPlay={() => setIsPublicGoodVideoLoading(false)}
                />
              )}
            </div>
            <div className="video-stage-caption">
              <span>{publicGoodVideo.label}</span>
              <strong>{publicGoodVideo.meta}</strong>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`resume-modal-layer ecom-video-modal-layer ${isEcomModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isEcomModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="关闭电商转化视频预览"
          onClick={closeEcomModal}
        />
        <section
          ref={ecomTiltRef}
          className="resume-modal ecom-video-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ecom-video-modal-title"
          onPointerMove={handleEcomModalPointerMove}
          onPointerLeave={handleEcomModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close" type="button" aria-label="关闭电商转化视频预览" onClick={closeEcomModal}>
            <span>Close</span>
            <b>×</b>
          </button>
          <aside className="video-option-panel" aria-label="E-commerce video categories">
            <p>VIDEO SELECTION</p>
            <h2 id="ecom-video-modal-title">E-COM CONVERSION CUTS</h2>
            <nav
              className="video-option-list"
              onPointerDownCapture={handleEcomOptionPointer}
              onClickCapture={handleEcomOptionPointer}
            >
              {ecomVideos.map((video, index) => (
                <button
                  className={activeEcomVideoIndex === index ? 'is-active' : ''}
                  data-video-index={index}
                  key={video.label}
                  type="button"
                  onPointerDown={() => selectEcomVideo(index)}
                  onMouseDown={() => selectEcomVideo(index)}
                  onClick={() => selectEcomVideo(index)}
                  onPointerEnter={() => warmVideo(video.src, 'metadata')}
                  onFocus={() => warmVideo(video.src, 'metadata')}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{video.label}</strong>
                  <small>{video.meta}</small>
                </button>
              ))}
            </nav>
          </aside>

          <div className="video-stage">
            <div className="video-frame">
              {isEcomVideoLoading && (
                <div className="video-loading">
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                  <span>视频现场生成中。。。</span>
                </div>
              )}
              {isEcomModalOpen && (
                <video
                  ref={ecomVideoRef}
                  key={ecomVideos[activeEcomVideoIndex].src}
                  src={ecomVideos[activeEcomVideoIndex].src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={ecomVideoCover}
                  onLoadStart={() => setIsEcomVideoLoading(true)}
                  onWaiting={() => setIsEcomVideoLoading(true)}
                  onLoadedMetadata={() => setIsEcomVideoLoading(false)}
                  onLoadedData={() => setIsEcomVideoLoading(false)}
                  onCanPlay={() => setIsEcomVideoLoading(false)}
                />
              )}
            </div>
            <div className="video-stage-caption">
              <span>{ecomVideos[activeEcomVideoIndex].label}</span>
              <strong>{ecomVideos[activeEcomVideoIndex].meta}</strong>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`resume-modal-layer ecom-visual-modal-layer ${isEcomVisualModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isEcomVisualModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="Close e-commerce visual gallery"
          onClick={() => setIsEcomVisualModalOpen(false)}
        />
        <section
          ref={ecomVisualTiltRef}
          className="resume-modal personal-ip-modal ecom-visual-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ecom-visual-modal-title"
          onPointerMove={handleEcomVisualModalPointerMove}
          onPointerLeave={handleEcomVisualModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close ecom-visual-close" type="button" aria-label="Close e-commerce visual gallery" onClick={() => setIsEcomVisualModalOpen(false)}>
            <span>Close</span>
            <b>×</b>
          </button>

          <aside className="ecom-visual-sidebar" aria-label="E-commerce visual categories">
            <p>E-COM VISUAL</p>
            <h2 id="ecom-visual-modal-title">COMMERCE VISUAL SYSTEM</h2>
            <nav>
              {ecomVisualCategories.map((category, index) => (
                <button
                  className={ecomVisualCategoryIndex === index ? 'is-active' : ''}
                  type="button"
                  key={category.label}
                  onClick={() => selectEcomVisualCategory(index)}
                >
                  <i aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{category.label}</strong>
                  <small>{category.title}</small>
                </button>
              ))}
            </nav>
            <em>{ecomVisualCategories[ecomVisualCategoryIndex].description}</em>
          </aside>

          <div className="personal-ip-stage ecom-visual-stage" aria-label="E-commerce visual image gallery">
            <div className="personal-ip-hero-card ecom-visual-hero-card">
              <div
                className="personal-ip-track"
                style={{ transform: `translateX(-${ecomVisualArtworkIndex * 100}%)` }}
              >
                {ecomVisualCategories[ecomVisualCategoryIndex].items.map((artwork) => (
                  <figure className="personal-ip-slide ecom-visual-slide" key={artwork.src}>
                    <img src={artwork.src} alt={artwork.title} loading="lazy" decoding="async" />
                    <figcaption>
                      <span>{artwork.label}</span>
                      <strong>{artwork.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="personal-ip-controls ecom-visual-controls">
              <button type="button" aria-label="Previous e-commerce visual image" onClick={() => changeEcomVisualArtwork(-1)}>
                ←
              </button>
              <span>
                {String(ecomVisualArtworkIndex + 1).padStart(2, '0')} / {String(ecomVisualCategories[ecomVisualCategoryIndex].items.length).padStart(2, '0')}
              </span>
              <button type="button" aria-label="Next e-commerce visual image" onClick={() => changeEcomVisualArtwork(1)}>
                →
              </button>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`resume-modal-layer personal-ip-modal-layer ${isPersonalIpModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isPersonalIpModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="Close personal IP gallery"
          onClick={() => setIsPersonalIpModalOpen(false)}
        />
        <section
          ref={personalIpTiltRef}
          className="resume-modal personal-ip-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="personal-ip-modal-title"
          onPointerMove={handlePersonalIpModalPointerMove}
          onPointerLeave={handlePersonalIpModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <button className="ecom-modal-close personal-ip-close" type="button" aria-label="Close personal IP gallery" onClick={() => setIsPersonalIpModalOpen(false)}>
            <span>Close</span>
            <b>×</b>
          </button>

          <div className="personal-ip-stage" aria-label="Personal IP image gallery">
            <div className="personal-ip-hero-card">
              <div
                className="personal-ip-track"
                style={{ transform: `translateX(-${personalIpArtworkIndex * 100}%)` }}
              >
                {personalIpArtworks.map((artwork) => (
                  <figure className="personal-ip-slide" key={artwork.src}>
                    <img src={artwork.src} alt={artwork.title} loading="lazy" decoding="async" />
                    <figcaption>
                      <span>{artwork.label}</span>
                      <strong>{artwork.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="personal-ip-controls">
              <button type="button" aria-label="Previous personal IP image" onClick={() => changePersonalIpArtwork(-1)}>
                ←
              </button>
              <span>{String(personalIpArtworkIndex + 1).padStart(2, '0')} / {String(personalIpArtworks.length).padStart(2, '0')}</span>
              <button type="button" aria-label="Next personal IP image" onClick={() => changePersonalIpArtwork(1)}>
                →
              </button>
            </div>
          </div>

          <aside className="personal-ip-copy">
            <p>PERSONAL IP SYSTEM</p>
            <h2 id="personal-ip-modal-title">REBEL-2077 IP WORLD</h2>
            <span>角色设定、周边延展、服装载体与故事分镜组合呈现，展示从单一角色到商业化视觉资产的完整内容系统。</span>
            <div className="personal-ip-bento" aria-label="Personal IP thumbnails">
              {personalIpArtworks.map((artwork, index) => (
                <button
                  className={personalIpArtworkIndex === index ? 'is-active' : ''}
                  type="button"
                  key={artwork.src}
                  onClick={() => setPersonalIpArtworkIndex(index)}
                  aria-label={`Show ${artwork.title}`}
                >
                  <img src={artwork.src} alt="" loading="lazy" decoding="async" />
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </button>
              ))}
            </div>
          </aside>
        </section>
      </div>

      <div
        className={`resume-modal-layer artwork-modal-layer ${isIllustrationModalOpen ? 'is-open' : ''}`}
        aria-hidden={!isIllustrationModalOpen}
      >
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="关闭插画作品预览"
          onClick={() => setIsIllustrationModalOpen(false)}
        />
        <section
          ref={artworkTiltRef}
          className="resume-modal artwork-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="illustration-modal-title"
          onPointerMove={handleIllustrationModalPointerMove}
          onPointerLeave={handleIllustrationModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <div className="resume-modal-gallery artwork-modal-gallery" aria-label="插画作品预览">
            <div
              className="resume-modal-track"
              style={{ transform: `translateX(-${illustrationArtworkIndex * 100}%)` }}
            >
              {resumeModalArtworks.map((artwork) => (
                <figure className="resume-modal-art" key={artwork.src}>
                  <img src={artwork.src} alt={artwork.title} loading="lazy" decoding="async" />
                  <figcaption>
                    <span>{artwork.label}</span>
                    <strong>{artwork.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="resume-modal-switch" aria-label="切换插画作品">
              <button type="button" aria-label="上一张插画作品" onClick={() => changeIllustrationArtwork(-1)}>
                ←
              </button>
              <span>{String(illustrationArtworkIndex + 1).padStart(2, '0')} / 02</span>
              <button type="button" aria-label="下一张插画作品" onClick={() => changeIllustrationArtwork(1)}>
                →
              </button>
            </div>
          </div>
          <div className="resume-modal-copy artwork-modal-copy">
            <p>SELECTED ILLUSTRATION</p>
            <h2 id="illustration-modal-title">手绘与视觉插画</h2>
            <span>将角色设定、主题插画和视觉概念稿集中呈现，保留手绘质感，同时用低饱和玻璃层与流光边框融入个人站的暗色科技背景。</span>
            <button className="artwork-modal-close" type="button" onClick={() => setIsIllustrationModalOpen(false)}>
              关闭预览
            </button>
          </div>
        </section>
      </div>

      <div className={`resume-modal-layer ${isResumeModalOpen ? 'is-open' : ''}`} aria-hidden={!isResumeModalOpen}>
        <button
          className="resume-modal-backdrop"
          type="button"
          aria-label="关闭下载确认弹窗"
          onClick={() => setIsResumeModalOpen(false)}
        />
        <section
          ref={modalTiltRef}
          className="resume-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          onPointerMove={handleResumeModalPointerMove}
          onPointerLeave={handleResumeModalPointerLeave}
        >
          <div className="resume-modal-orbit" aria-hidden="true" />
          <div className="resume-modal-gallery" aria-label="插画预览">
            <div
              className="resume-modal-track"
              style={{ transform: `translateX(-${resumeArtworkIndex * 100}%)` }}
            >
              {resumeModalArtworks.map((artwork) => (
                <figure className="resume-modal-art" key={artwork.src}>
                  <img src={artwork.src} alt={artwork.title} loading="lazy" decoding="async" />
                  <figcaption>
                    <span>{artwork.label}</span>
                    <strong>{artwork.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="resume-modal-switch" aria-label="切换插画">
              <button type="button" aria-label="上一张插画" onClick={() => changeResumeArtwork(-1)}>
                ←
              </button>
              <span>{String(resumeArtworkIndex + 1).padStart(2, '0')} / 02</span>
              <button type="button" aria-label="下一张插画" onClick={() => changeResumeArtwork(1)}>
                →
              </button>
            </div>
          </div>
          <div className="resume-modal-copy">
            <p>RESUME DOWNLOAD</p>
            <h2 id="resume-modal-title">是否下载齐婉彤的个人简历</h2>
            <span>将下载 Word 简历附件，便于离线查看完整教育经历、项目经验与联系方式。</span>
            <div className="resume-modal-actions">
              <button type="button" onClick={handleResumeDownload}>是</button>
              <button type="button" onClick={() => setIsResumeModalOpen(false)}>我再想想</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
