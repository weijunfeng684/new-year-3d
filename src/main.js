import * as THREE from 'three'
import { Text } from 'troika-three-text'
import './style.css'

const canvas = document.getElementById('scene')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.setClearColor(0x0f0604, 1)

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x200b07, 6, 30)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 120)
camera.position.set(0, 0.12, 8.5)

// Lights
const keyLight = new THREE.DirectionalLight(0xffe0b8, 1.2)
keyLight.position.set(4, 6, 6)
scene.add(keyLight)

const fillLight = new THREE.DirectionalLight(0xffcaa8, 0.55)
fillLight.position.set(-4, 2, 3)
scene.add(fillLight)

const rimLight = new THREE.PointLight(0xff9a6b, 1.1, 35)
rimLight.position.set(0, 3, -6)
scene.add(rimLight)

scene.add(new THREE.AmbientLight(0xffe5cc, 0.32))

// Sunrise‑hope background (cinematic)
function makeGradientTexture() {
  const size = 1024
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')

  const grad = ctx.createLinearGradient(0, 0, 0, size)
  grad.addColorStop(0, '#2a0e08')
  grad.addColorStop(0.45, '#6a1f12')
  grad.addColorStop(0.75, '#c24a22')
  grad.addColorStop(1, '#f7c37b')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const sun = ctx.createRadialGradient(size / 2, size * 0.72, 0, size / 2, size * 0.72, size * 0.45)
  sun.addColorStop(0, 'rgba(255,240,200,0.95)')
  sun.addColorStop(0.35, 'rgba(255,200,140,0.55)')
  sun.addColorStop(1, 'rgba(255,200,140,0)')
  ctx.fillStyle = sun
  ctx.fillRect(0, 0, size, size)

  return new THREE.CanvasTexture(c)
}

const bgPlane = new THREE.Mesh(
  new THREE.PlaneGeometry(40, 24),
  new THREE.MeshBasicMaterial({ map: makeGradientTexture(), depthWrite: false })
)
bgPlane.position.set(0, 0.2, -10)
scene.add(bgPlane)

// Light shafts
function makeShaft(color, opacity) {
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  return new THREE.Mesh(new THREE.PlaneGeometry(10, 18), mat)
}

const shaftA = makeShaft(0xffcfa5, 0.2)
shaftA.position.set(-3.2, 1.2, -8)
shaftA.rotation.z = 0.12
scene.add(shaftA)

const shaftB = makeShaft(0xffd9b2, 0.16)
shaftB.position.set(3.0, 0.8, -8)
shaftB.rotation.z = -0.1
scene.add(shaftB)

// Star + ember particles
const particleCount = 2400
const positions = new Float32Array(particleCount * 3)
const colors = new Float32Array(particleCount * 3)
for (let i = 0; i < particleCount; i++) {
  const r = Math.random() * 10 + 2
  const theta = Math.random() * Math.PI * 2
  const y = (Math.random() - 0.5) * 6
  positions[i * 3] = Math.cos(theta) * r
  positions[i * 3 + 1] = y
  positions[i * 3 + 2] = Math.sin(theta) * r

  const warm = Math.random() * 0.4 + 0.6
  colors[i * 3] = 1.0
  colors[i * 3 + 1] = warm
  colors[i * 3 + 2] = 0.5 + Math.random() * 0.3
}

const particleGeo = new THREE.BufferGeometry()
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const particleMat = new THREE.PointsMaterial({
  vertexColors: true,
  size: 0.03,
  transparent: true,
  opacity: 0.7,
  depthWrite: false
})

const particles = new THREE.Points(particleGeo, particleMat)
scene.add(particles)

// Text setup
const fontUrl = '/fonts/SourceHanSerifCN-VF.otf'

function createText({ text, fontSize, position, color, opacity, maxWidth, lineHeight, depthWrite = true }) {
  const t = new Text()
  t.text = text
  t.font = fontUrl
  t.fontSize = fontSize
  t.color = color
  t.anchorX = 'center'
  t.anchorY = 'middle'
  t.position.set(position.x, position.y, position.z)
  t.maxWidth = maxWidth
  t.lineHeight = lineHeight
  t.material.transparent = true
  t.material.opacity = opacity
  t.material.depthTest = true
  t.material.depthWrite = depthWrite
  t.outlineWidth = '3%'
  t.outlineColor = 0xffc79a
  t.sync()
  return t
}

function create3DTextLayer(text, fontSize, position, colorFront, colorBack) {
  const front = createText({
    text,
    fontSize,
    position,
    color: colorFront,
    opacity: 0.0,
    maxWidth: 6.5,
    lineHeight: 1.2,
    depthWrite: true
  })
  const back = createText({
    text,
    fontSize,
    position: position.clone().add(new THREE.Vector3(0, 0, -0.08)),
    color: colorBack,
    opacity: 0.0,
    maxWidth: 6.5,
    lineHeight: 1.2,
    depthWrite: false
  })
  back.scale.setScalar(1.01)
  scene.add(back)
  scene.add(front)
  return { front, back }
}

const titleLayer = create3DTextLayer(
  '李婷，新年快乐',
  0.9,
  new THREE.Vector3(0, 0.55, 0.0),
  0xfff3dd,
  0xe19a67
)

const footerLayer = create3DTextLayer(
  '愿你我如星与风，岁岁相依。',
  0.34,
  new THREE.Vector3(0, -0.35, 0.0),
  0xffead0,
  0xd9a27a
)

// Big fireworks bursts
const burstCount = 900
const burstGeo = new THREE.BufferGeometry()
const burstPositions = new Float32Array(burstCount * 3)
const burstVel = new Float32Array(burstCount * 3)
for (let i = 0; i < burstCount; i++) {
  const v = new THREE.Vector3(
    (Math.random() - 0.5),
    (Math.random() - 0.5),
    (Math.random() - 0.5)
  ).normalize().multiplyScalar(Math.random() * 4.5 + 1.6)
  burstVel[i * 3] = v.x
  burstVel[i * 3 + 1] = v.y
  burstVel[i * 3 + 2] = v.z
}

burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPositions, 3))
const burstMat = new THREE.PointsMaterial({
  color: 0xfff0c2,
  size: 0.08,
  transparent: true,
  opacity: 0.0,
  depthWrite: false
})
const burst = new THREE.Points(burstGeo, burstMat)
scene.add(burst)

let burstStart = 0
let burstActive = false

// Impact ring
const ringGeo = new THREE.RingGeometry(0.35, 0.44, 72)
const ringMat = new THREE.MeshBasicMaterial({
  color: 0xffd0a3,
  transparent: true,
  opacity: 0.0,
  side: THREE.DoubleSide,
  blending: THREE.AdditiveBlending
})
const ring = new THREE.Mesh(ringGeo, ringMat)
ring.rotation.x = Math.PI / 2
scene.add(ring)

// Orbs around text
function makeGlowTexture(color, hot = 0.6) {
  const size = 256
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, color)
  g.addColorStop(0.35, `rgba(255,255,255,${hot})`)
  g.addColorStop(0.7, 'rgba(255,255,255,0.15)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(c)
}

function createOrb(colorHex, hot = 0.6) {
  const color = new THREE.Color(colorHex)
  const mat = new THREE.SpriteMaterial({
    map: makeGlowTexture(color.getStyle(), hot),
    color,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(1.2, 1.2, 1.2)
  return sprite
}

const orbA = createOrb(0xffd7a6, 0.6)
const orbB = createOrb(0x9ad9ff, 0.6)
scene.add(orbA)
scene.add(orbB)

// Heart meteors
function makeHeartTexture(color = '#ffd1c2') {
  const size = 128
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')
  ctx.translate(size / 2, size / 2)
  ctx.scale(1, -1)
  ctx.beginPath()
  for (let t = 0; t <= Math.PI * 2; t += 0.02) {
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
    ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = color
  ctx.globalAlpha = 0.95
  ctx.fill()
  ctx.globalAlpha = 0.6
  ctx.shadowColor = 'rgba(255,160,130,0.8)'
  ctx.shadowBlur = 20
  ctx.fill()
  return new THREE.CanvasTexture(c)
}

function createMeteor() {
  const head = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: makeHeartTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  )
  head.scale.set(0.35, 0.35, 0.35)

  const trailCount = 16
  const trailPositions = new Float32Array(trailCount * 3)
  const trailGeo = new THREE.BufferGeometry()
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
  const trailMat = new THREE.LineBasicMaterial({
    color: 0xffc7a8,
    transparent: true,
    opacity: 0.6
  })
  const trail = new THREE.Line(trailGeo, trailMat)

  return {
    head,
    trail,
    start: 0,
    duration: 2.6 + Math.random() * 0.8,
    delay: 1 + Math.random() * 4,
    curve: null
  }
}

const meteors = Array.from({ length: 10 }, () => createMeteor())
meteors.forEach((m) => {
  scene.add(m.trail)
  scene.add(m.head)
})

// Timeline
const tText = 0.6
const tReveal = 1.5
const tBurst = 3.0

const clock = new THREE.Clock()
const fallback = document.querySelector('.fallback-text')
let fallbackHidden = false

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function animate() {
  requestAnimationFrame(animate)
  const elapsed = clock.getElapsedTime()

  // Camera cinematic drift + push + shake
  const push = elapsed < 2.2 ? elapsed * 0.4 : 0.9
  const shake = elapsed < 3.2 ? Math.sin(elapsed * 40) * 0.015 : 0
  camera.position.z = 8.5 - push + shake
  camera.position.x = Math.sin(elapsed * 0.25) * 0.32 + shake
  camera.position.y = 0.12 + Math.sin(elapsed * 0.2) * 0.05
  camera.lookAt(0, 0.08, 0)

  // Particle flow
  particles.rotation.y += 0.0005
  particles.rotation.x += 0.00012

  // Light shafts subtle motion
  shaftA.rotation.z = 0.12 + Math.sin(elapsed * 0.3) * 0.02
  shaftB.rotation.z = -0.1 + Math.cos(elapsed * 0.25) * 0.02

  // Text reveal with depth
  const revealP = Math.min(Math.max((elapsed - tText) / tReveal, 0), 1)
  const reveal = easeInOut(revealP)
  const flicker = 0.88 + Math.sin(elapsed * 18) * 0.08
  titleLayer.front.material.opacity = reveal * flicker
  titleLayer.back.material.opacity = reveal * 0.6
  footerLayer.front.material.opacity = Math.max(reveal - 0.2, 0)
  footerLayer.back.material.opacity = Math.max(reveal - 0.25, 0) * 0.6
  const scale = THREE.MathUtils.lerp(1.55, 1.0, reveal)
  titleLayer.front.scale.setScalar(scale)
  titleLayer.back.scale.setScalar(scale * 1.01)
  footerLayer.front.scale.setScalar(scale)
  footerLayer.back.scale.setScalar(scale * 1.01)

  // Impact ring before text
  if (elapsed < tText) {
    ringMat.opacity = Math.min(elapsed / tText, 1) * 0.6
    const s = 0.4 + elapsed * 1.4
    ring.scale.set(s, s, s)
  } else {
    ringMat.opacity = Math.max(0.6 - (elapsed - tText) * 0.8, 0)
  }

  // Orbs orbit counterclockwise around text with depth
  {
    const tt = elapsed * 0.9
    const radius = 3.2
    // When x ~ 0 (centered on text), z reaches max/min
    const xA = Math.sin(tt) * radius
    const yA = Math.sin(tt) * 0.6
    const zA = Math.cos(tt) * 1.1
    const xB = Math.sin(tt + Math.PI) * radius
    const yB = Math.sin(tt + Math.PI) * 0.6
    const zB = Math.cos(tt + Math.PI) * 1.1
    orbA.position.set(xA, yA, zA)
    orbB.position.set(xB, yB, zB)

    // Perspective scale: bigger when closer (front), smaller when behind
    const base = 1.2
    const scaleA = THREE.MathUtils.clamp(base + zA * 0.18, 0.7, 1.8)
    const scaleB = THREE.MathUtils.clamp(base + zB * 0.18, 0.7, 1.8)
    orbA.scale.set(scaleA, scaleA, scaleA)
    orbB.scale.set(scaleB, scaleB, scaleB)
  }

  // Heart meteors (staggered, not simultaneous)
  for (const m of meteors) {
    if (elapsed < m.delay) {
      m.head.visible = false
      m.trail.visible = false
      continue
    }
    if (!m.curve || elapsed > m.start + m.duration + m.delay) {
      m.start = elapsed
      m.delay = 2 + Math.random() * 4
      const x0 = -8 + Math.random() * 3.5
      const y0 = 2.6 + Math.random() * 1.8
      const z0 = -2.5 + Math.random() * 4.0
      const x3 = 4.5 + Math.random() * 4.0
      const y3 = -2.2 + Math.random() * 2.0
      const z3 = -3.0 + Math.random() * 3.5
      const c1 = new THREE.Vector3(x0 + 2.0, y0 - 0.5, z0 - 0.4)
      const c2 = new THREE.Vector3(x3 - 2.0, y3 + 0.6, z3 - 0.4)
      m.curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(x0, y0, z0),
        c1,
        c2,
        new THREE.Vector3(x3, y3, z3)
      )
    }

    const t = (elapsed - m.start) / m.duration
    if (t >= 0 && t <= 1) {
      m.head.visible = true
      m.trail.visible = true
      const headPos = m.curve.getPoint(t)
      m.head.position.copy(headPos)
      const posAttr = m.trail.geometry.getAttribute('position')
      for (let i = 0; i < posAttr.count; i++) {
        const tt = Math.max(t - i * 0.03, 0)
        const p = m.curve.getPoint(tt)
        posAttr.array[i * 3] = p.x
        posAttr.array[i * 3 + 1] = p.y
        posAttr.array[i * 3 + 2] = p.z
      }
      posAttr.needsUpdate = true
      m.trail.material.opacity = 0.6 * (1 - t)
      m.head.material.opacity = 1 - t * 0.2
    } else {
      m.head.visible = false
      m.trail.visible = false
    }
  }

  // Big fireworks burst (true explosion)
  if (!burstActive && elapsed >= tBurst) {
    burstActive = true
    burstStart = elapsed
    burstMat.opacity = 1.0
  }
  if (burstActive) {
    const dt = elapsed - burstStart
    const fade = Math.max(1 - dt / 2.0, 0)
    burstMat.opacity = fade
    const pos = burstGeo.getAttribute('position')
    for (let i = 0; i < burstCount; i++) {
      pos.array[i * 3] = burstVel[i * 3] * dt
      pos.array[i * 3 + 1] = burstVel[i * 3 + 1] * dt
      pos.array[i * 3 + 2] = burstVel[i * 3 + 2] * dt
    }
    pos.needsUpdate = true
  }

  if (!fallbackHidden && titleLayer.front.textRenderInfo && fallback) {
    fallback.style.opacity = '0'
    fallbackHidden = true
  }

  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
})
