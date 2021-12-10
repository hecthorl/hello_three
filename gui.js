import * as dar from 'dat.gui';

const gui = new dar.GUI();
const world = {
   plane: {
      width: 10,
   },
};

gui.add(world.plane, 'width', 1, 50);

export default gui;
