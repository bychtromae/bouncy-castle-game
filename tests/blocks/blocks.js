let blocks = {
    flat: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    side: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    stair: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    staircorner: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    pillarbase: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    pillarbase2: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    pillar: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    pillarend: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    pillarend2: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    wall: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    wallcorner: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    walltop: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    walltopcorner: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    wallceiling: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    wallceilingcorner: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    makeGeometries: function () {
        this.flat.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(1,0,0), //1 
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(1,0,1), //3
            new THREE.Vector3(0,0.5,0), //4
            new THREE.Vector3(1,0.5,0), //5
            new THREE.Vector3(0,0.5,1), //6
            new THREE.Vector3(1,0.5,1) //7
        );
        this.flat.geom.faces.push( 
            new THREE.Face3(0,1,3),
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,1,5),
            new THREE.Face3(0,4,5),
            new THREE.Face3(1,3,7),
            new THREE.Face3(1,5,7),
            new THREE.Face3(0,2,6),
            new THREE.Face3(0,4,6),
            new THREE.Face3(2,6,7),
            new THREE.Face3(2,3,7),
            new THREE.Face3(4,5,7),
            new THREE.Face3(4,6,7)
        );
        this.flat.geom.computeFaceNormals();

        this.side.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.25,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.25,0,1), //3
            new THREE.Vector3(0,0.5,0), //4
            new THREE.Vector3(0.25,0.5,0), //5
            new THREE.Vector3(0,0.5,1), //6
            new THREE.Vector3(0.25,0.5,1), //7
            new THREE.Vector3(0.5,0.25,0), //8
            new THREE.Vector3(0.5,0.25,1) //9
        );
        this.side.geom.faces.push( 
            new THREE.Face3(0,1,3),
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,1,5),
            new THREE.Face3(0,4,5),
            new THREE.Face3(0,2,6),
            new THREE.Face3(0,4,6),
            new THREE.Face3(2,6,7),
            new THREE.Face3(2,3,7),
            new THREE.Face3(4,5,7),
            new THREE.Face3(4,6,7),
            new THREE.Face3(1,5,8),
            new THREE.Face3(3,7,9),
            new THREE.Face3(1,3,8),
            new THREE.Face3(3,8,9),
            new THREE.Face3(5,7,8),
            new THREE.Face3(7,8,9)
        );
        this.side.geom.computeFaceNormals();

        this.stair.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(1,0,0), //1 
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(1,0,1), //3
            new THREE.Vector3(0,1,0), //4
            new THREE.Vector3(1,0.5,0), //5
            new THREE.Vector3(0,1,1), //6
            new THREE.Vector3(1,0.5,1), //7
            new THREE.Vector3(0.5,0.5,0), //8
            new THREE.Vector3(0.5,0.5,1), //9
            new THREE.Vector3(0,0.5,0), //10
            new THREE.Vector3(0,0.5,1), //11
            new THREE.Vector3(0.5,1,0), //12
            new THREE.Vector3(0.5,1,1), //13
        );
        this.stair.geom.faces.push( 
            new THREE.Face3(0,1,3),
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,1,5),
            new THREE.Face3(0,10,5),
            new THREE.Face3(1,3,7),
            new THREE.Face3(1,5,7),
            new THREE.Face3(0,2,6),
            new THREE.Face3(0,4,6),
            new THREE.Face3(2,11,7),
            new THREE.Face3(2,3,7),
            new THREE.Face3(8,5,7),
            new THREE.Face3(8,9,7),
            new THREE.Face3(4,10,8),
            new THREE.Face3(4,12,8),
            new THREE.Face3(6,11,9),
            new THREE.Face3(6,13,9),
            new THREE.Face3(12,13,9),
            new THREE.Face3(9,12,8),
            new THREE.Face3(4,6,12),
            new THREE.Face3(13,12,6)
        );
        this.stair.geom.computeFaceNormals();
    }
}