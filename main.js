import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import cone from './figuras/cone';
import cubo from './figuras/cubo';
import sphere from './figuras/sfere';
import light from './light';

//Creacion de la escena
const scene = new Scene();

const sizes = {
   width: window.innerWidth,
   height: window.innerHeight,
};

//Creacion de la cámara
//Grados o zoom
const fov = 75;

const aspect = sizes.width / sizes.height;

//Si el objeto está más cerca que esta distancia no se renderiza
const near = 0.1;

//Si el objeto está más lejos que esta distancia no se renderiza
const far = 5;

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

// Renderer

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('resize', () => {
   // Update sizes
   sizes.width = window.innerWidth;
   sizes.height = window.innerHeight;

   // Update camera
   camera.aspect = sizes.width / sizes.height;
   camera.updateProjectionMatrix();

   // Update renderer
   renderer.setSize(sizes.width, sizes.height);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
document.body.appendChild(renderer.domElement);

scene.add(light);
scene.add(cubo);
scene.add(sphere);
scene.add(cone);

function render(time) {
   time *= 0.001;

   sphere.rotation.x = time;
   sphere.rotation.y = time;
   cubo.rotation.x = time;
   cubo.rotation.z = time;
   cone.rotation.x = time;

   renderer.render(scene, camera);

   requestAnimationFrame(render);
}
requestAnimationFrame(render);

renderer.render(scene, camera);
