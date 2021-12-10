import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three';

// La forma
const geometry = new BoxGeometry(0.5, 0.5, 0.5);

// El material
const material = new MeshPhongMaterial({
   color: 'gold',
});

// Mesh o malla
const cube = new Mesh(geometry, material);
cube.position.x = 1;

export default cube;
