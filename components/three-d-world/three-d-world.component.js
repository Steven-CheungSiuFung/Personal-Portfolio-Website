import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { WorldContainer } from "./three-d-world.styles";

const ThreeDWorld = () => {
  const bodyRef = useRef();
  const [rendererState, setRendererState] = useState();

  useEffect(() => {
    const { current: container } = bodyRef;
    if (
      container &&
      !rendererState &&
      !document.getElementsByTagName("canvas").length
    ) {
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        1000
      );
      camera.position.z = 30;
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (true) {
        container.appendChild(renderer.domElement);
        console.log("render canvas");
      }
      setRendererState(renderer);
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshStandardMaterial({
        color: 0xff9047,
        wireframe: true,
      });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      const pointlight = new THREE.PointLight(0xffffff, 1, 300);
      pointlight.position.set(10, 10, 10);
      scene.add(pointlight);

      const sphereSize = 1;
      const pointLightHelper = new THREE.PointLightHelper(
        pointlight,
        sphereSize
      );
      const gridHelper = new THREE.GridHelper(200, 50);
      scene.add(pointLightHelper, gridHelper);

      const controls = new OrbitControls(camera, renderer.domElement);

      const animate = () => {
        console.log("animate");
        requestAnimationFrame(animate);
        torus.rotation.x += 0.005;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.005;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
      return () => {};
    }
  }, []);

  return <WorldContainer ref={bodyRef}></WorldContainer>;
};

export default ThreeDWorld;
