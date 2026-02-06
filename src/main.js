import * as THREE from 'three'
import { Text } from 'troika-three-text'
import './style.css'

const canvas = document.getElementById('scene')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x1a0b06, 6, 18)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0.2, 7.5)

// Lights
const keyLight = new THREE.DirectionalLight(0xffd6aa, 1.2)
keyLight.position.set(4, 6, 6)
scene.add(keyLight)

const fillLight = new THREE.DirectionalLight(0xffc7a1, 0.5)
fillLight.position.set(-4, 2, 3)
scene.add(fillLight)

const rimLight = new THREE.PointLight(0xffaa66, 0.9, 20)
rimLight.position.set(0, 3, -4)
scene.add(rimLight)

// Warm ambient
scene.add(new THREE.AmbientLight(0xffe5cc, 0.35))

// Floating particles (gold dust)
const particleCount = 1200
const positions = new Float32Array(particleCount * 3)
const sizes = new Float32Array(particleCount)
for (let i = 0; i < particleCount; i++) {
  const r = Math.random() * 7 + 2
  const theta = Math.random() * Math.PI * 2
  const y = (Math.random() - 0.5) * 4
  positions[i * 3] = Math.cos(theta) * r
  positions[i * 3 + 1] = y
  positions[i * 3 + 2] = Math.sin(theta) * r
  sizes[i] = Math.random() * 1.5 + 0.5
}

const particleGeo = new THREE.BufferGeometry()
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

const particleMat = new THREE.PointsMaterial({
  color: 0xffd38a,
  size: 0.035,
  transparent: true,
  opacity: 0.6,
  depthWrite: false
})

const particles = new THREE.Points(particleGeo, particleMat)
scene.add(particles)

// Text setup
const fontUrl = '/fonts/SourceHanSerifCN-VF.otf'

function createText({ text, fontSize, position, color, opacity, maxWidth, lineHeight }) {
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
  t.outlineWidth = '2%'
  t.outlineColor = 0xffd2a8
  t.sync()
  return t
}

const title = createText({
  text: '新年快乐，李婷',
  fontSize: 0.75,
  position: new THREE.Vector3(0, 1.3, 0),
  color: 0xfff0d6,
  opacity: 0.0,
  maxWidth: 6,
  lineHeight: 1.2
})
scene.add(title)

const quotes = [
  '身无彩凤双飞翼，心有灵犀一点通。',
  '两情若是久长时，又岂在朝朝暮暮。',
  '问世间，情是何物，直教生死相许？',
  'Love looks not with the eyes, but with the mind.'
]

const quoteMeshes = quotes.map((q, i) => {
  const t = createText({
    text: q,
    fontSize: 0.28,
    position: new THREE.Vector3(0, 0.45 - i * 0.45, 0.05),
    color: 0xfff6e6,
    opacity: 0.0,
    maxWidth: 7.2,
    lineHeight: 1.3
  })
  scene.add(t)
  return t
})

const footer = createText({
  text: '愿你我如星与风，岁岁相依。',
  fontSize: 0.32,
  position: new THREE.Vector3(0, -1.7, 0.05),
  color: 0xffead0,
  opacity: 0.0,
  maxWidth: 6.5,
  lineHeight: 1.2
})
scene.add(footer)

// Soft glow orbs
const orbGeo = new THREE.SphereGeometry(0.25, 32, 32)
const orbMat = new THREE.MeshBasicMaterial({ color: 0xffb470 })
const orb1 = new THREE.Mesh(orbGeo, orbMat)
orb1.position.set(-1.8, -0.4, -1.2)
scene.add(orb1)

const orb2 = new THREE.Mesh(orbGeo, new THREE.MeshBasicMaterial({ color: 0xffd9a8 }))
orb2.position.set(2.0, 0.8, -1.6)
scene.add(orb2)

// Animation
let t = 0
function animate() {
  t += 0.005
  requestAnimationFrame(animate)

  // Camera slow orbit
  camera.position.x = Math.sin(t * 0.7) * 0.6
  camera.position.y = 0.2 + Math.sin(t * 0.4) * 0.1
  camera.lookAt(0, 0.2, 0)

  // Particles drift
  particles.rotation.y += 0.0006
  particles.rotation.x += 0.0002

  // Text fade-in sequence
  const fade = (obj, start, duration) => {
    const phase = Math.min(Math.max((t - start) / duration, 0), 1)
    obj.material.opacity = phase
  }
  fade(title, 0.2, 0.8)
  quoteMeshes.forEach((q, i) => fade(q, 0.7 + i * 0.4, 0.8))
  fade(footer, 2.6, 1.0)

  // Orb breathing
  orb1.scale.setScalar(1 + Math.sin(t * 1.4) * 0.08)
  orb2.scale.setScalar(1 + Math.cos(t * 1.2) * 0.08)

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
