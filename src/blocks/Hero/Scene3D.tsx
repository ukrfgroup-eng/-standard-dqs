import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Scene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Инициализация сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Создание "Золотого Ядра" (Geometry)
    const geometry = new THREE.IcosahedronGeometry(1, 15); // Сложная сфера
    const material = new THREE.PointsMaterial({
      color: 0xc9a84c,
      size: 0.015,
      transparent: true,
      opacity: 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Добавляем каркасную оболочку (Wireframe)
    const wireGeometry = new THREE.IcosahedronGeometry(1.05, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x8a6f2e,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const wireframe = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wireframe);

    camera.position.z = 3;

    // 3. Интерактив (Mouse Move)
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 4. Анимация
    const animate = () => {
      requestAnimationFrame(animate);

      // Вращение ядра
      points.rotation.y += 0.002;
      points.rotation.x += 0.001;

      // Реакция на мышь (плавное следование)
      points.position.x += (mouseX * 0.5 - points.position.x) * 0.05;
      points.position.y += (-mouseY * 0.5 - points.position.y) * 0.05;
      
      wireframe.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // 5. Ресайз
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 opacity-60" />;
};
