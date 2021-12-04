import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three';

// La forma
const geometry = new BoxGeometry(1, 1, 1);

// El material
const material = new MeshPhongMaterial({ color: 'lime' });

// Mesh
const cube = new Mesh(geometry, material);

export default cube;
