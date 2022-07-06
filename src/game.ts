
interface Cell {
  position: Vector3;
  scale: Vector3;
  rotation: Quaternion,
  type?: string;
  neighbours?: Array<Cell>;
}

interface Tree {
  genesis: Cell,
  totalCells: number
}

const genesisCell: Cell = {
  position: new Vector3(5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 0),
  scale: new Vector3(0.1, 0.1, 0.1),
  neighbours: []
}


let tree: Tree = {
  genesis: genesisCell,
  totalCells: 1
}

const updateTree = ():void => {

}


export class AnimationLoop implements ISystem {
  updateTree();

  update() {

    const treeArr = Object.keys(tree)
      .map((key: string) => {

        return tree[key];
      });

    for (let cell of treeArr) {

      const myEntity = new Entity()

      const sphere = new SphereShape()
      
      myEntity.addComponent(
        new Transform({
          position: cell.position,
          rotation: cell.rotation,
          scale: cell.scale
        })
      )

    //  engine.addEntity(myEntity)
    }
  }
}


engine.addSystem(new AnimationLoop())
