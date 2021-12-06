import {
   Mesh,
   MeshStandardMaterial,
   SphereBufferGeometry,
   TextureLoader,
} from 'three';

//loader
const textureLoader = new TextureLoader();
const normalTexture = textureLoader.load('/mapa.jpg');

const geometry = new SphereBufferGeometry(0.5, 64, 64);
const material = new MeshStandardMaterial({
   color: '#049ef4',
   normalMap: normalTexture,
   roughness: 0.5,
   metalness: 0.3,
});

const sphere = new Mesh(geometry, material);
sphere.position.x = -1;
export default sphere;
