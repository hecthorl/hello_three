import { DirectionalLight } from 'three';

const color = 'white';
const intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(-1, 2, 5);

export default light;
