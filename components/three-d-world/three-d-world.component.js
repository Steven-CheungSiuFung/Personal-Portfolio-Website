import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { WorldContainer } from "./three-d-world.styles";

/* To create a 3D world: renderer.render(scene, camera); */

const ThreeDWorld = () => {
  // target the container via useRef for three.js to render the scene
  const bodyRef = useRef();

  // useEffect to access window object
  useEffect(() => {
    const { current: container } = bodyRef;
    if (container && !document.getElementsByTagName("canvas").length) {
      // create the camera object
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        1000
      );
      camera.position.z = 30;

      // create the scene
      const scene = new THREE.Scene();

      // create the renderer object and initialize
      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      // add canvas to the container
      container.appendChild(renderer.domElement);

      // create the 3d objects
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshStandardMaterial({
        color: 0xff9047,
        wireframe: true,
      });
      const torus = new THREE.Mesh(geometry, material);

      // add the 3d object to the scene
      scene.add(torus);

      // create a pointlight
      const pointlight = new THREE.PointLight(0xffffff, 1, 300);
      pointlight.position.set(10, 10, 10);
      scene.add(pointlight);

      // a helper function that show the pointlight on screen
      const sphereSize = 1;
      const pointLightHelper = new THREE.PointLightHelper(
        pointlight,
        sphereSize
      );

      // a helper function that show a grid on the screen
      const gridHelper = new THREE.GridHelper(200, 50);
      scene.add(pointLightHelper, gridHelper);

      // enable using mouse to control the camera
      const controls = new OrbitControls(camera, renderer.domElement);

      // keep re-rendering to update the scene
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
