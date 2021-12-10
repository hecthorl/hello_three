import {
   DoubleSide,
   FlatShading,
   Mesh,
   MeshStandardMaterial,
   PlaneGeometry,
} from 'three';

const plane = new PlaneGeometry(1, 1, 6, 6);
const material = new MeshStandardMaterial({
   color: '#55ef06',
   side: DoubleSide,
   flatShading: FlatShading,
});
const plano = new Mesh(plane, material);

const { array } = plano.geometry.attributes.position;
// console.log(plano.geometry.attributes.position);

for (let i = 0; i < array.length; i += 3) {
   const x = array[i];
   const y = array[i + 1];
   const z = array[i + 2];

   array[i + 2] = z + Math.random();
}

export default plano;
