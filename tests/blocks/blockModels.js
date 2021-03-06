let blockModels = {
    flat: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    side: {
        geom: new THREE.Geometry(),
        material: new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
    },
    corner: {
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
    air: {
        geom: null,
        material: null
    },
    none: {
        geom: null,
        material: null
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


        this.corner.geom.vertices.push(
            new THREE.Vector3(0,0,0.75), //0 base
            new THREE.Vector3(0.25,0,0.75), //1 
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.25,0,1), //3
            new THREE.Vector3(0,0.25,0.5), //4 middle
            new THREE.Vector3(0.5,0.25,0.5), //5
            new THREE.Vector3(0,0.25,1), //6
            new THREE.Vector3(0.5,0.25,1), //7
            new THREE.Vector3(0,0.5,0.75), //8 top
            new THREE.Vector3(0.25,0.5,0.75), //9
            new THREE.Vector3(0,0.5,1), //10
            new THREE.Vector3(0.25,0.5,1) //11
        );
        this.corner.geom.faces.push( 
            new THREE.Face3(0,1,3), //base
            new THREE.Face3(0,2,3), 
            new THREE.Face3(2,0,8), //back left square
            new THREE.Face3(2,10,8),
            new THREE.Face3(0,4,8), //back left triangle
            new THREE.Face3(10,11,3), //back right square
            new THREE.Face3(10,2,3), 
            new THREE.Face3(11,7,3), //back right triangle
            new THREE.Face3(0,4,5), //wedge left bottom
            new THREE.Face3(0,1,5), 
            new THREE.Face3(4,8,9), //wedge left top
            new THREE.Face3(4,5,9), 
            new THREE.Face3(1,5,7), //wedge right bottom
            new THREE.Face3(1,3,7), 
            new THREE.Face3(5,9,11), //wedge right top
            new THREE.Face3(5,7,11), 
            new THREE.Face3(8,10,11), //top
            new THREE.Face3(8,9,11)
        );
        this.corner.geom.computeFaceNormals();


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
            new THREE.Vector3(0.5,1,1) //13
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
            new THREE.Face3(13,14,9)
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
            new THREE.Face3(12,13,15)
        );
        this.pillarbase.geom.computeFaceNormals();


        this.pillarbase2.geom.vertices.push(
            new THREE.Vector3(0.33,0,0.33), //0
            new THREE.Vector3(0.66,0,0.33), //1
            new THREE.Vector3(0.33,0,0.66), //2
            new THREE.Vector3(0.66,0,0.66), //3
            new THREE.Vector3(0.33,0.66,0.33), //4
            new THREE.Vector3(0.66,0.66,0.33), //5
            new THREE.Vector3(0.33,0.66,0.66), //6
            new THREE.Vector3(0.66,0.66,0.66), //7
            new THREE.Vector3(0,1,0), //8
            new THREE.Vector3(1,1,0), //9
            new THREE.Vector3(0,1,1), //10
            new THREE.Vector3(1,1,1) //11
        );
        this.pillarbase2.geom.faces.push( 
            new THREE.Face3(0,1,3), //pillar botton
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,1,5), //pillar front left
            new THREE.Face3(0,4,5),
            new THREE.Face3(0,4,6), //pillar back left
            new THREE.Face3(0,2,6),
            new THREE.Face3(1,5,7), //pillar front right
            new THREE.Face3(1,3,7),
            new THREE.Face3(3,7,6), //pillar back right
            new THREE.Face3(3,2,6),
            new THREE.Face3(8,4,5), //ceiling front left
            new THREE.Face3(8,9,5),
            new THREE.Face3(8,10,6), //ceiling back left
            new THREE.Face3(8,4,6),
            new THREE.Face3(9,5,7), //ceiling front right
            new THREE.Face3(9,11,7),
            new THREE.Face3(11,7,6), //ceiling back right
            new THREE.Face3(11,10,6),
            new THREE.Face3(8,10,11), //ceiling top
            new THREE.Face3(8,9,11)
        );
        this.pillarbase2.geom.computeFaceNormals();


        this.pillar.geom.vertices.push(
            new THREE.Vector3(0.33,0,0.33), //0
            new THREE.Vector3(0.66,0,0.33), //1
            new THREE.Vector3(0.33,0,0.66), //2
            new THREE.Vector3(0.66,0,0.66), //3
            new THREE.Vector3(0.33,1,0.33), //4
            new THREE.Vector3(0.66,1,0.33), //5
            new THREE.Vector3(0.33,1,0.66), //6
            new THREE.Vector3(0.66,1,0.66) //7
        );
        this.pillar.geom.faces.push( 
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
        this.pillar.geom.computeFaceNormals();


        this.pillarend.geom.vertices.push(
            new THREE.Vector3(0.33,0,0.33), //0
            new THREE.Vector3(0.66,0,0.33), //1
            new THREE.Vector3(0.33,0,0.66), //2
            new THREE.Vector3(0.66,0,0.66), //3
            new THREE.Vector3(0.33,0.33,0.33), //4
            new THREE.Vector3(0.66,0.33,0.33), //5
            new THREE.Vector3(0.33,0.33,0.66), //6
            new THREE.Vector3(0.66,0.33,0.66), //7
            new THREE.Vector3(0.33,0.5,0.5), //8
            new THREE.Vector3(0.66,0.5,0.5) //9
        );
        this.pillarend.geom.faces.push( 
            new THREE.Face3(0,1,3), //base
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,1,5), //pillar front left
            new THREE.Face3(0,4,5),
            new THREE.Face3(0,4,6), //pillar back left
            new THREE.Face3(0,2,6),
            new THREE.Face3(3,1,5), //pillar front right
            new THREE.Face3(3,7,5),
            new THREE.Face3(3,7,6), //pillar back right
            new THREE.Face3(3,2,6),
            new THREE.Face3(4,8,6), //wedge triangle back
            new THREE.Face3(5,9,7), //wedge triangle front
            new THREE.Face3(4,8,9), //wedge square front
            new THREE.Face3(4,5,9),
            new THREE.Face3(8,9,7), //wedge square back
            new THREE.Face3(8,6,7)
        );
        this.pillarend.geom.computeFaceNormals();


        this.pillarend2.geom.vertices.push(
            new THREE.Vector3(0.33,0.5,0.5), //0
            new THREE.Vector3(0.66,0.5,0.5), //1
            new THREE.Vector3(0.33,0.66,0.33), //2
            new THREE.Vector3(0.66,0.66,0.33), //3
            new THREE.Vector3(0.33,0.66,0.66), //4
            new THREE.Vector3(0.66,0.66,0.66), //5
            new THREE.Vector3(0.33,1,0.33), //6
            new THREE.Vector3(0.66,1,0.33), //7
            new THREE.Vector3(0.33,1,0.66), //8
            new THREE.Vector3(0.66,1,0.66) //9
        );
        this.pillarend2.geom.faces.push( 
            new THREE.Face3(2,0,4), //wedge triangle back
            new THREE.Face3(3,1,5), //wedge triangle front
            new THREE.Face3(2,0,1), //wedge square front
            new THREE.Face3(2,3,1),
            new THREE.Face3(1,5,4), //wedge square back
            new THREE.Face3(1,0,4),
            new THREE.Face3(6,2,3), //pillar front left
            new THREE.Face3(6,7,3),
            new THREE.Face3(6,8,4), //pillar back left
            new THREE.Face3(6,2,4),
            new THREE.Face3(7,3,5), //pillar front right
            new THREE.Face3(7,9,5),
            new THREE.Face3(8,9,5), //pillar back right
            new THREE.Face3(8,4,5),
            new THREE.Face3(8,6,7), //cieling
            new THREE.Face3(8,9,7)
        );
        this.pillarend2.geom.computeFaceNormals();


        this.wall.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1 
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,1), //3
            new THREE.Vector3(0,1,0), //4
            new THREE.Vector3(0.5,1,0), //5
            new THREE.Vector3(0,1,1), //6
            new THREE.Vector3(0.5,1,1) //7
        );
        this.wall.geom.faces.push( 
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
        this.wall.geom.computeFaceNormals();


        this.wallcorner.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,0.5), //3
            new THREE.Vector3(1,0,0.5), //4
            new THREE.Vector3(1,0,1), //5
            new THREE.Vector3(0,1,0), //6
            new THREE.Vector3(0.5,1,0), //7
            new THREE.Vector3(0,1,1), //8
            new THREE.Vector3(0.5,1,0.5), //9
            new THREE.Vector3(1,1,0.5), //10
            new THREE.Vector3(1,1,1) //11
        );
        this.wallcorner.geom.faces.push( 
            new THREE.Face3(0,1,3), //base left
            new THREE.Face3(0,2,3),
            new THREE.Face3(5,4,3), //base right
            new THREE.Face3(5,2,3),
            new THREE.Face3(0,6,8), //back left
            new THREE.Face3(0,2,8),
            new THREE.Face3(5,11,8), //back right
            new THREE.Face3(5,2,8),
            new THREE.Face3(0,1,7), //edge left
            new THREE.Face3(0,6,7),
            new THREE.Face3(5,4,10), //edge right
            new THREE.Face3(5,11,10),
            new THREE.Face3(1,7,9), //center left
            new THREE.Face3(1,3,9),
            new THREE.Face3(9,3,4), //center right
            new THREE.Face3(9,10,4),
            new THREE.Face3(6,7,9), //top left
            new THREE.Face3(6,8,9),
            new THREE.Face3(11,10,9), //top right
            new THREE.Face3(11,8,9)
        );
        this.wallcorner.geom.computeFaceNormals();


        this.walltop.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,1), //3
            new THREE.Vector3(0,0.25,0), //4
            new THREE.Vector3(0.5,0.25,0), //5
            new THREE.Vector3(0,0.25,1), //6
            new THREE.Vector3(0.5,0.25,1), //7
            new THREE.Vector3(0.25,0.5,0), //8
            new THREE.Vector3(0.25,0.5,1) //9
        );
        this.walltop.geom.faces.push( 
            new THREE.Face3(0,1,3), //base bottom
            new THREE.Face3(0,2,3),
            new THREE.Face3(0,4,5), //base front left
            new THREE.Face3(0,1,5),
            new THREE.Face3(0,4,6), //base back left
            new THREE.Face3(0,2,6),
            new THREE.Face3(5,1,3), //base front right
            new THREE.Face3(5,7,3),
            new THREE.Face3(6,7,3), //base back right
            new THREE.Face3(6,2,3),
            new THREE.Face3(4,8,5), //wedge triangle left
            new THREE.Face3(6,7,9), //wedge triangle right
            new THREE.Face3(5,8,9), //wedge rectangle front
            new THREE.Face3(5,7,9),
            new THREE.Face3(4,8,9), //wedge rectangle back
            new THREE.Face3(4,6,9)
        );
        
        this.walltop.geom.computeFaceNormals();
        

        this.walltopcorner.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,0.5), //3
            new THREE.Vector3(1,0,0.5), //4
            new THREE.Vector3(1,0,1), //5
            new THREE.Vector3(0,0.25,0), //6
            new THREE.Vector3(0.5,0.25,0), //7
            new THREE.Vector3(0,0.25,1), //8
            new THREE.Vector3(0.5,0.25,0.5), //9
            new THREE.Vector3(1,0.25,0.5), //10
            new THREE.Vector3(1,0.25,1), //11
            new THREE.Vector3(0.25,0.5,0), //12
            new THREE.Vector3(0.25,0.5,0.75), //13
            new THREE.Vector3(1,0.5,0.75) //14
        );
        this.walltopcorner.geom.faces.push( 
            new THREE.Face3(0,1,3), //base left
            new THREE.Face3(0,2,3),
            new THREE.Face3(5,4,3), //base right
            new THREE.Face3(5,2,3),
            new THREE.Face3(0,6,8), //back left
            new THREE.Face3(0,2,8),
            new THREE.Face3(5,11,8), //back right
            new THREE.Face3(5,2,8),
            new THREE.Face3(0,1,7), //edge left
            new THREE.Face3(0,6,7),
            new THREE.Face3(5,4,10), //edge right
            new THREE.Face3(5,11,10),
            new THREE.Face3(1,7,9), //center left
            new THREE.Face3(1,3,9),
            new THREE.Face3(9,3,4), //center right
            new THREE.Face3(9,10,4),
            new THREE.Face3(6,12,7), //wedge triangle left
            new THREE.Face3(10,14,11), //wedge triangle right
            new THREE.Face3(12,7,9), //wedge rectangle left front
            new THREE.Face3(12,13,9),
            new THREE.Face3(6,12,13), //wedge rectangle left back
            new THREE.Face3(6,8,13),
            new THREE.Face3(13,9,10), //wedge rectangle right front
            new THREE.Face3(13,14,10),
            new THREE.Face3(13,14,11), //wedge rectangle right back
            new THREE.Face3(13,8,11)
        );
        this.walltopcorner.geom.computeFaceNormals();


        this.wallceiling.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,1), //3
            new THREE.Vector3(0,0.5,0), //4
            new THREE.Vector3(0.5,0.5,0), //5
            new THREE.Vector3(0,0.5,1), //6
            new THREE.Vector3(0.5,0.5,1), //7
            new THREE.Vector3(0,1,0), //8
            new THREE.Vector3(1,1,0), //9
            new THREE.Vector3(0,1,1), //10
            new THREE.Vector3(1,1,1) //11
        );
        this.wallceiling.geom.faces.push( 
            new THREE.Face3(0,1,3), //base bottom
            new THREE.Face3(0,2,3),
            new THREE.Face3(4,0,1), //base front left
            new THREE.Face3(4,5,1),
            new THREE.Face3(0,8,10), //base back
            new THREE.Face3(0,2,10),
            new THREE.Face3(1,5,7), //base front right
            new THREE.Face3(1,3,7),
            new THREE.Face3(6,7,3), //base back right
            new THREE.Face3(6,2,3),
            new THREE.Face3(8,4,5), //ceiling left front
            new THREE.Face3(8,9,5),
            new THREE.Face3(5,9,11), //ceiling right front
            new THREE.Face3(5,7,11),
            new THREE.Face3(6,7,11), //ceiling right back
            new THREE.Face3(6,10,11),
            new THREE.Face3(8,9,11), //ceiling top
            new THREE.Face3(8,10,11)
        );
        this.wallceiling.geom.computeFaceNormals();


        this.wallceilingcorner.geom.vertices.push(
            new THREE.Vector3(0,0,0), //0
            new THREE.Vector3(0.5,0,0), //1
            new THREE.Vector3(0,0,1), //2
            new THREE.Vector3(0.5,0,0.5), //3
            new THREE.Vector3(1,0,0.5), //4
            new THREE.Vector3(1,0,1), //5
            new THREE.Vector3(0,0.5,0), //6
            new THREE.Vector3(0.5,0.5,0), //7
            new THREE.Vector3(0,0.5,1), //8
            new THREE.Vector3(0.5,0.5,0.5), //9
            new THREE.Vector3(1,0.5,0.5), //10
            new THREE.Vector3(1,0.5,1), //11
            new THREE.Vector3(0,1,0), //12
            new THREE.Vector3(1,1,0), //13
            new THREE.Vector3(0,1,1), //14
            new THREE.Vector3(1,1,1) //15
        );
        this.wallceilingcorner.geom.faces.push( 
            new THREE.Face3(0,1,3), //base bottom left
            new THREE.Face3(0,2,3),
            new THREE.Face3(5,4,3), //base bottom right
            new THREE.Face3(5,2,3),
            new THREE.Face3(0,12,14), //back left
            new THREE.Face3(0,2,14),
            new THREE.Face3(5,15,14), //back right
            new THREE.Face3(5,2,14),
            new THREE.Face3(0,1,7), //base edge left
            new THREE.Face3(0,6,7),
            new THREE.Face3(5,4,10), //base edge right
            new THREE.Face3(5,11,10),
            new THREE.Face3(1,7,9), //base center left
            new THREE.Face3(1,3,9),
            new THREE.Face3(9,3,4), //base center right
            new THREE.Face3(9,10,4),
            new THREE.Face3(13,7,9), //ceiling center left
            new THREE.Face3(13,10,9), //ceiling center right
            new THREE.Face3(6,12,13), //ceiling front left
            new THREE.Face3(6,7,13),
            new THREE.Face3(11,10,13), //ceiling front right
            new THREE.Face3(11,15,13),
            new THREE.Face3(12,13,15), //ceiling top
            new THREE.Face3(12,14,15),
        );
        this.wallceilingcorner.geom.computeFaceNormals();
    }
}

blockModels.makeGeometries();