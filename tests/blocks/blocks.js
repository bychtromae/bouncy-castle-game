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


        this.staircorner.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(1,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(1,0,1), //3
            new THREE.Vector3(0,1,0), //4
            new THREE.Vector3(0,1,1), //5
            new THREE.Vector3(1,1,1), //6
            new THREE.Vector3(0.5,1,0), //7
            new THREE.Vector3(0.5,1,0.5), //8
            new THREE.Vector3(1,1,0.5), //9
            new THREE.Vector3(0,0.5,0), //10
            new THREE.Vector3(1,0.5,1), //11
            new THREE.Vector3(0.5,0.5,0), //12
            new THREE.Vector3(0.5,0.5,0.5), //13
            new THREE.Vector3(1,0.5,0.5), //14
            new THREE.Vector3(1,0.5,0) //15
        );
        this.staircorner.geom.faces.push( 
            new THREE.Face3(0,1,3), //base
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,4,5), //back squares
            new THREE.Face3(0,2,5),
            new THREE.Face3(2,5,3), //back squares
            new THREE.Face3(5,6,3),
            new THREE.Face3(0,1,10), //left bottom
            new THREE.Face3(15,1,10),
            new THREE.Face3(15,1,3),//right bottom
            new THREE.Face3(15,11,3),
            new THREE.Face3(4,7,12), //left top
            new THREE.Face3(4,10,12),
            new THREE.Face3(9,6,11), //right top
            new THREE.Face3(9,14,11),
            new THREE.Face3(4,7,8),//top
            new THREE.Face3(4,5,8),
            new THREE.Face3(5,8,9),
            new THREE.Face3(5,6,9),
            new THREE.Face3(12,7,8), //center left
            new THREE.Face3(12,13,8),
            new THREE.Face3(12,13,14), //center right
            new THREE.Face3(12,15,14),
            new THREE.Face3(13,8,9), //center bottom
            new THREE.Face3(13,14,9),
        );
        this.staircorner.geom.computeFaceNormals();


        this.pillarbase.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(1,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(1,0,1), //3
            new THREE.Vector3(0,0.5,0), //4
            new THREE.Vector3(1,0.5,0), //5
            new THREE.Vector3(0,0.5,1), //6
            new THREE.Vector3(1,0.5,1), //7
            new THREE.Vector3(0.33,0.5,0.33), //8
            new THREE.Vector3(0.66,0.5,0.33), //9
            new THREE.Vector3(0.33,0.5,0.66), //10
            new THREE.Vector3(0.66,0.5,0.66), //11
            new THREE.Vector3(0.33,1,0.33), //12
            new THREE.Vector3(0.66,1,0.33), //13
            new THREE.Vector3(0.33,1,0.66), //14
            new THREE.Vector3(0.66,1,0.66) //15
        );
        this.pillarbase.geom.faces.push( 
            new THREE.Face3(0,1,3), //base botton
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,4,5), //base front left
            new THREE.Face3(0,1,5),
            new THREE.Face3(0,4,6), //base back left
            new THREE.Face3(0,2,6),
            new THREE.Face3(1,5,7), //base front right
            new THREE.Face3(1,3,7),
            new THREE.Face3(3,7,6), //base back right
            new THREE.Face3(3,2,6),
            new THREE.Face3(4,5,7), //base top
            new THREE.Face3(4,6,7),
            new THREE.Face3(8,12,13), //pillar front left
            new THREE.Face3(8,9,13),
            new THREE.Face3(8,10,14), //pillar back lfet
            new THREE.Face3(8,12,14),
            new THREE.Face3(9,13,15), //pillar front right
            new THREE.Face3(9,11,15),
            new THREE.Face3(11,15,14), //pillar back right
            new THREE.Face3(11,10,14),
            new THREE.Face3(12,14,15), //pillar top
            new THREE.Face3(12,13,15),
        );
        this.pillarbase.geom.computeFaceNormals();


        this.pillarbase2.geom.vertices.push(
            
        );
        this.pillarbase2.geom.faces.push( 
            
        );
        this.pillarbase2.geom.computeFaceNormals();


        this.pillar.geom.vertices.push(
            
        );
        this.pillar.geom.faces.push( 
            
        );
        this.pillar.geom.computeFaceNormals();


        this.pillarend.geom.vertices.push(
            
        );
        this.pillarend.geom.faces.push( 
            
        );
        this.pillarend.geom.computeFaceNormals();


        this.pillarend2.geom.vertices.push(
            
        );
        this.pillarend2.geom.faces.push( 
            
        );
        this.pillarend2.geom.computeFaceNormals();


        this.wall.geom.vertices.push(
            
        );
        this.wall.geom.faces.push( 
            
        );
        this.wall.geom.computeFaceNormals();


        this.wallcorner.geom.vertices.push(
            
        );
        this.wallcorner.geom.faces.push( 
            
        );
        this.wallcorner.geom.computeFaceNormals();


        this.walltop.geom.vertices.push(
            
        );
        this.walltop.geom.faces.push( 
            
        );
        this.walltop.geom.computeFaceNormals();
        

        this.walltopcorner.geom.vertices.push(
            
        );
        this.walltopcorner.geom.faces.push( 
            
        );
        this.walltopcorner.geom.computeFaceNormals();


        this.wallceiling.geom.vertices.push(
            
        );
        this.wallceiling.geom.faces.push( 
            
        );
        this.wallceiling.geom.computeFaceNormals();


        this.wallceilingcorner.geom.vertices.push(
            
        );
        this.wallceilingcorner.geom.faces.push( 
            
        );
        this.wallceilingcorner.geom.computeFaceNormals();
    }
}