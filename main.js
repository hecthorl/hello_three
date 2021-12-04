import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import cubo from './figuras/cubo';
import sphere from './figuras/sfere';
import light from './light';

//Creacion de la escena
const scene = new Scene();

const width = window.innerWidth;
const heigh = window.innerHeight;

//Creacion de la cámara
//Grados o zoom
const fov = 75;

const aspect = width / heigh;

//Si el objeto está más cerca que esta distancia no se renderiza
const near = 0.1;

//Si el objeto está más lejos que esta distancia no se renderiza
const far = 5;

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

// Renderer
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, heigh);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

scene.add(light);
// scene.add(cubo);
scene.add(sphere);

function render(time) {
   time *= 0.001;

   sphere.rotation.x = time;
   sphere.rotation.y = time;

   renderer.render(scene, camera);

   requestAnimationFrame(render);
}
requestAnimationFrame(render);

renderer.render(scene, camera);
