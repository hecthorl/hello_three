import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
// import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import cone from './figuras/cone';
import cubo from './figuras/cubo';
import plano from './figuras/plane';
import sphere from './figuras/sfere';
import light from './light';
// import './gui';

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
const near = 1;

//Si el objeto está más lejos que esta distancia no se renderiza
const far = 1000;

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

camera.lookAt(0, 0, 0);

// Renderer

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new ArcballControls(camera, renderer.domElement, scene);
controls.addEventListener('change', function () {
   renderer.render(scene, camera);
});
controls.update();

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
scene.add(plano);

const animation = () => {
   sphere.rotateX(0.01);
   sphere.rotateY(0.01);

   renderer.render(scene, camera);
   renderer.setAnimationLoop(() => animation());
};
animation();

renderer.render(scene, camera);
