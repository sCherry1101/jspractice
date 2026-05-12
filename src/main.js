import * as THREE from 'three';



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//+++purple rotating cube 

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshStandardMaterial({ 
//     color: 0x800080, 
//     roughness: 0.4,
//     metalness: 0.7 
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);


// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 50); 
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);


// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }


// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// animate();

//+++purple rotating sphere

// const geometry = new THREE.SphereGeometry(1, 32, 32); 
// const material = new THREE.MeshStandardMaterial({ 
//  color: 0x800080, 
//  roughness: 0.4,
//  metalness: 0.7 
// });
//  const sphere = new THREE.Mesh(geometry, material);
//  scene.add(sphere);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 50); 
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);

// camera.position.z = 3;

// function animate() {
//     requestAnimationFrame(animate);

//     sphere.rotation.x += 0.01;
//     sphere.rotation.y += 0.01;

//     renderer.render(scene, camera);
//         }

//     window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//         });

// animate();