import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Scene3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Inicialización de la Escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;
    cameraRef.current = camera;

    // 2. Configuración del Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2; // Aumentamos la exposición para un efecto más brillante

    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // 3. Geometría y Material "Burbuja" (Iridiscente)
    const sphereGeometry = new THREE.SphereGeometry(1, 128, 128);

    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0,
      transmission: 0.8, // Bajamos un poco más para que el color sea denso
      ior: 2.5,          // Refracción alta para que el color "explote"
      thickness: 1.5,    // Aumentamos el grosor de la capa para más refracción

      // FORZAMOS EL ARCOÍRIS
      iridescence: 1.0,
      iridescenceIOR: 2.8,
      // Este rango [100, 800] es el que separa los colores
      iridescenceThicknessRange: [100, 800],

      transparent: true,
      opacity: 0.9,
      reflectivity: 1.0,
    });

    // 4. Generación de Esferas
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // REDUCIMOS LA DISPERSIÓN INICIAL:
      // Cambiamos el multiplicador de 10 a 5 para que nazcan cerca del centro
      sphere.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );

      const scale = Math.random() * 0.6 + 0.4;
      sphere.scale.setScalar(scale);

      scene.add(sphere);
      spheres.push(sphere);

      // ANIMACIÓN MÁS CORTA Y LENTA:
      gsap.to(sphere.position, {
        y: `+=${Math.random() * 0.5 + 0.2}`, // Solo suben/bajan máximo 0.7 unidades
        x: `+=${Math.random() * 0.3 - 0.15}`, // Movimiento lateral mínimo
        duration: 6 + Math.random() * 4,     // Más lento (de 6 a 10 segundos)
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // 5. Iluminación Dinámica LUCES DE ESTUDIO (EL SECRETO)
    // Necesitamos colores primarios potentes en diferentes ángulos 
    // para que la burbuja los descomponga en un arcoíris.

    // Luz Frontal Blanca (Brillo especular)
    const topLight = new THREE.SpotLight(0xffffff, 150);
    topLight.position.set(0, 10, 10);
    scene.add(topLight);

    // Luz Lateral Cian (Fríos)
    const blueLight = new THREE.PointLight(0x00f2ff, 100, 50);
    blueLight.position.set(10, 5, 5);
    scene.add(blueLight);

    // Luz Lateral Rosa/Fucsia (Cálidos)
    const pinkLight = new THREE.PointLight(0xff0077, 100, 50);
    pinkLight.position.set(-10, -5, 5);
    scene.add(pinkLight);

    // Luz de Fondo Lima (Contraste)
    const limeLight = new THREE.PointLight(0xadff2f, 80, 50);
    limeLight.position.set(0, -10, -5);
    scene.add(limeLight);

    // 6. Ciclo de Animación (Corregido para TypeScript)
    const animate = () => {
      // Validamos que las refs existan antes de renderizar
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        spheres.forEach((s) => {
          s.rotation.y += 0.003;
          s.rotation.z += 0.001;
        });
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 7. Manejo de Resize
    const handleResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      // Liberamos memoria
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10" />;
};

export default Scene3D;