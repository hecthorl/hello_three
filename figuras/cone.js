import { ConeGeometry, Mesh, MeshStandardMaterial } from 'three';

const geometry = new ConeGeometry(0.5, 1, 64);
const material = new MeshStandardMaterial({
   color: 'purple',
   wireframe: !true,
});
const cone = new Mesh(geometry, material);
cone.position.y = -2;
cone.position.z = -2;
export default cone;
