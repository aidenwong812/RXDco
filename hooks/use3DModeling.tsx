import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { Scene } from "three/src/scenes/Scene"
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera"
import { useCallback, useEffect, useRef, useState } from "react"
import gsap from "gsap"

let prevObject

const use3DModeling = (selected3DObject) => {
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef(null)
  const [materialSrc, setMaterialSrc] = useState(null)

  const addStages = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    })
    renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight)

    renderer.outputEncoding = 3000

    const anchor = new THREE.Group()
    anchor.position.set(0, 0, 0)
    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
      0.1,
      1000,
    )
    scene.add(camera)
    scene.add(anchor)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const lights = []

    lights[0] = new THREE.PointLight(0xffffff, 60000, 0)
    lights[0].position.set(-100, -100, -100)
    lights[1] = new THREE.PointLight(0xffffff, 120000, 0)
    lights[1].position.set(100, 100, 100)

    camera.add(lights[0])
    camera.add(lights[1])

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    const resetCamera = () => {
      if (!camera) return
      camera.position.set(0, 30, -50)
      camera.updateProjectionMatrix()
    }

    if (!selected3DObject) return

    const src = selected3DObject.material
    const { obj } = selected3DObject

    if (loading) return

    const loader = new OBJLoader()
    const textureLoader = new TextureLoader()

    setMaterialSrc(src)
    setLoading(false)

    loader.load(
      obj,
      (object) => {
        object.traverse((_obj) => {
          if (_obj instanceof THREE.Mesh)
            _obj.material = new THREE.MeshPhongMaterial({
              map: textureLoader.load(src),
              shininess: 1,
            })
        })

        const box = new THREE.Box3().setFromObject(object)
        const center = new THREE.Vector3()
        box.getCenter(center)
        object.position.sub(center)

        gsap.to(anchor.scale, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power4.out",
          duration: 0.5,
        })

        gsap.to(anchor.rotation, {
          y: Math.PI * 2,
          z: Math.PI * 2,
          ease: "power4.out",
          duration: 1,
          onComplete: () => {
            anchor.remove(prevObject)
            anchor.add(object)
            prevObject = object

            resetCamera()

            gsap.to(anchor.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "power4.out",
              duration: 0.8,
            })

            gsap.to(anchor.rotation, {
              y: 0,
              z: 0,
              ease: "power4.out",
              duration: 2,
              onComplete: () => {
                setLoading(false)
              },
            })
          },
        })
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.log("An error happened", error)
      },
    )

    const animate = () => {
      camera.lookAt(anchor.position)
      controls.update()
      renderer.render(scene, camera)

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  const loadTexture = (newImage) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const baseImage: HTMLImageElement = new Image()

    baseImage.src = selected3DObject.material
    newImage.crossOrigin = "anonymous"
    baseImage.crossOrigin = "anonymous"
    baseImage.id = "okay"

    baseImage.onload = () => {
      canvas.width = baseImage.naturalWidth
      canvas.height = baseImage.naturalHeight

      ctx.drawImage(baseImage, 0, 0, baseImage.naturalWidth, baseImage.naturalHeight)

      const x = parseInt(selected3DObject.logo.x)
      const y = parseInt(selected3DObject.logo.y)
      const w = parseInt(selected3DObject.logo.width)
      const h = parseInt(selected3DObject.logo.height)

      const ratio = w / newImage.naturalWidth

      const resizedWidth = newImage.naturalWidth > w ? w : newImage.naturalWidth

      const resizedHeight =
        newImage.naturalHeight > h
          ? Math.min(newImage.naturalHeight * ratio, h)
          : newImage.naturalHeight

      const xOffset = (w - resizedWidth) / 2
      const yOffset = (h - resizedHeight) / 2

      ctx.fillStyle = "#fff"
      ctx.fillRect(x, y, w, h)

      ctx.drawImage(
        newImage,
        x + (xOffset > 0 ? xOffset : 0),
        y + (yOffset > 0 ? yOffset : 0),
        resizedWidth,
        resizedHeight,
      )

      const mergedMap = canvas.toDataURL()

      const img = document.createElement("img")
      img.src = mergedMap

      const textureLoader = new TextureLoader()

      textureLoader.load(mergedMap, (texture) => {
        prevObject.traverse((child) => {
          if (child.isMesh) {
            child.material.map = texture
            texture.needsUpdate = true
            child.material.needsUpdate = true
          }
        })
      })
    }
  }

  const initializeAnimation = useCallback(() => {
    addStages()
  }, [addStages])

  useEffect(() => {
    initializeAnimation()
  }, [initializeAnimation])

  return {
    canvasRef,
    loadTexture,
  }
}

export default use3DModeling
