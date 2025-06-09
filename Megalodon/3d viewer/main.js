import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xADD8E6); // light blue
//renderer.setClearColor(0x001144);

renderer.setPixelRatio(window.devicePixelRatio);

// Disable shadows
renderer.shadowMap.enabled = false;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// Bright white ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 3.5); // Bright white light
scene.add(ambientLight);

// Optional: directional light to simulate sunlight (no shadow)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// Ground
const groundGeometry = new THREE.PlaneGeometry(200, 200);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(groundMesh);

// Load Model
const loader = new GLTFLoader().setPath('public/meglodon/');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  mesh.position.set(0, 1.05, -1);
  scene.add(mesh);

  const progressBar = document.getElementById('progress-container');
  if (progressBar) progressBar.style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

// Responsive Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();




let model; // Make the mesh accessible globally

// Inside the loader
loader.load('scene.gltf', (gltf) => {
  model = gltf.scene;

  model.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  model.position.set(0, 1.05, -1);
  scene.add(model);

  const progressBar = document.getElementById('progress-container');
  if (progressBar) progressBar.style.display = 'none';
}, ...);





// Keyboard movement
document.addEventListener('keydown', (event) => {
  if (!model) return;

  const step = 0.1;

  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      model.position.z -= step;
      break;
    case 'ArrowDown':
    case 's':
      model.position.z += step;
      break;
    case 'ArrowLeft':
    case 'a':
      model.position.x -= step;
      break;
    case 'ArrowRight':
    case 'd':
      model.position.x += step;
      break;
    case 'q':
      model.position.y += step;
      break;
    case 'e':
      model.position.y -= step;
      break;
  }
});

