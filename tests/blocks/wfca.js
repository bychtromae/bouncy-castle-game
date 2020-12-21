//Thanks to Martin Donalds for the amazing explanation of the Waveform Collapse Algorithm!
//https://www.youtube.com/watch?v=2SuvO4Gi7uY

//the grid size
let size = 4;

//o = the opposite face
let direction_vectors = {
    t: {x:0, y:1, z:0, o: "b"}, //top
    lf: {x:0, y:0, z:-1, o: "rb"}, //left front
    lb: {x:-1, y:0, z:0, o: "rf"}, //left back
    rf: {x:1, y:0, z:0, o: "lb"}, //right front
    rb: {x:0, y:0, z:1, o: "lf"}, //right back
    b: {x:0, y:-1, z:0, o: "t"} //bottom
}

let stack = [];

let wfc = {
    grid: new Array(size),
    is_collapsed: function () {
        let n = 0;
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    if (this.grid[x][y][z].superpositions.length > 1) {
                        n++;
                    }
                }
            }
        }
        if (n==0) {
            return true;
        }
        return false;
    },
    iterate: function () {
        let coords = this.get_min_entropy_cell();
        this.collapse_at(coords);
        this.propagate(coords);
    },
    get_min_entropy_cell: function () {
        //log(wfc.grid);
        let entropies = [];
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    let entropy = this.grid[x][y][z].superpositions.length;
                    //if (entropy > 1) {
                        entropies.push(entropy);
                    //}
                }
            }
        }
        let min_entropy = Math.min(...entropies);
        //an array of all the cells with the least entropies
        let cells = [];
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    if (this.grid[x][y][z].superpositions.length == min_entropy) {
                        cells.push(this.getCoords(x,y,z));
                    }
                }
            }
        }
        //console.log(entropies);
        if (cells.length == 1) {
            //return the only cell with the lowest entropy
            //log(cells[0]);
        } else {
            //log(cells[Math.floor(Math.random()*(cells.length-1))]);
        }

        //return a random cell with the lowest entropy

        if (cells.length == 1) {
            //return the only cell with the lowest entropy
            return cells[0];
        }
        //return a random cell with the lowest entropy
        return cells[Math.floor(Math.random()*(cells.length-1))];
    },
    collapse_at: function (coords) {
        //console.log(coords);
        let cell = this.getCell(coords);
        let entropy = cell.superpositions.length;
        //console.log(cell.superpositions);
        if (entropy != 1) {
            //sets the cell's superposition to just a single random block in the cell's superposition.
            //console.log(cell.superpositions);
            cell.superpositions = [cell.superpositions[Math.floor(Math.random()*(entropy))]];
        }
        //console.log(cell.superpositions);
    },
    propagate: function (coords) {
        stack.push(coords);

        while (stack.length > 0) {
            //current coords
            let cur_coords = stack.pop();
            //console.log(this.getCell(cur_coords).superpositions[0]);

            let temp = {
                c: [this.getCell(cur_coords).superpositions[0]],
                t: [], //top
                lf: [], //left front
                lb: [], //left back
                rf: [], //right front
                rb: [], //right back
                b: [] //bottom
            }

            for (let n_face = 0; n_face < Object.keys(direction_vectors).length; n_face++) {
                let face = Object.keys(direction_vectors)[n_face];
                let vec = direction_vectors[face];
                let other_coords = this.getCoords(coords.x+vec.x,coords.y+vec.y,coords.z+vec.z);

                //log(cur_coords);
                //log(other_coords);
                if (this.cell_is_defined(cur_coords) && this.cell_is_defined(other_coords)) {
                    //log("passed");
                    let other_cell = this.getCell(other_coords);
                    //log(this.getCell(cur_coords));
                    let proto = prototypes[this.getCell(cur_coords).superpositions[0]];
                    let neighbors = proto.neighbor_list[face];

                    temp[face] = [...other_cell.superpositions];
                    temp.c = neighbors;

                    if (other_cell.superpositions.length != 0) {
                        for (let i = 0; i < other_cell.superpositions.length; i++) {
                            //the other cell's possibility to remove if it is not contained in the current cell's neighbor list
                            let other_poss = other_cell.superpositions[i];
                            if (!neighbors.includes(other_cell)) {
                                this.constrain(other_coords, other_poss);

                                //json.parse(json.stringify()) ?
                                if (!stack.includes(other_coords)) {
                                    stack.push(other_coords);
                                }
                            }
                        }
                    }
                }
            }
            //log(temp);
        }
    },
    constrain: function (coords, proto_name) {
        let cell = this.getCell(coords);
        cell.superpositions.splice(cell.superpositions.indexOf(proto_name),1);
    },
    getCoords: function (x,y,z) {
        return {
            x: x,
            y: y,
            z: z
        }
    },
    getCell: function (coords) {
        return this.grid[coords.x][coords.y][coords.z];
    },
    cell_is_defined: function (coords) {
        /*console.log(coords);
        if (typeof(this.grid[coords.x]) != "undefined" &&
        typeof(this.grid[coords.x][coords.y]) != "undefined" && 
        typeof(this.grid[coords.x][coords.y][coords.z]) != "undefined") {
            console.log("passed");
        }*/
        return typeof(this.grid[coords.x]) != "undefined" &&
        typeof(this.grid[coords.x][coords.y]) != "undefined" && 
        typeof(this.grid[coords.x][coords.y][coords.z]) != "undefined";
    },
    init: function () {
        this.fill_grid();

        /*while(!this.is_collapsed()) {
            this.iterate();
            this.renderGrid();
        }*/

        setInterval(function () {
            wfc.iterate();
            wfc.renderGrid();

            if (this.is_collapsed) {
                clearInterval(this);
            }
        }, 100);
        
    },
    fill_grid: function () { //fills the grid with high entropy cells, with superpositions of every type of block.
        //console.log(Object.keys(prototypes));
        
        for (let x = 0; x < size; x++) {
            this.grid[x] = new Array(size);
            for (let y = 0; y < size; y++) {
                this.grid[x][y] = new Array(size);
                for (let z = 0; z < size; z++) {
                    this.grid[x][y][z] = Object.assign({}, {
                        superpositions: []
                    });
                    //console.log(this.grid[x][y][z]);
                }
            }
        }
        //console.log(this.grid);
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    for (let i = 0; i < Object.keys(prototypes).length; i++) {
                        //console.log(Object.keys(prototypes)[i]);
                        this.grid[x][y][z].superpositions.push(Object.keys(prototypes)[i]);
                    }
                }
            }
        }
        //console.log(this.grid);
        /*for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    //console.log(Object.keys(prototypes)[i]);
                    this.grid[x][y][z] = JSON.parse(JSON.stringify(this.grid[x][y][z]));
                    console.log(this.grid[x][y][z].superpositions);
                }
            }
        }*/
        //console.log(this.grid);
        
        //let temp1 = this.grid[1][2][3];
        //console.log(JSON.parse(JSON.stringify(this.grid[1][2][3])));
        /*console.log(this.grid[1][2][3]);
        console.log(JSON.parse(JSON.stringify(this.grid[1][2][3])));
        console.log(this.grid[1][2][3].superpositions === ["air","flat"]);
        console.log(this.grid);*/
    },
    renderGrid: function () {
        let blockgrid = new Array(size);
        for (let x = 0; x < size; x++) {
            blockgrid[x] = new Array(size);
            for (let y = 0; y < size; y++) {
                blockgrid[x][y] = new Array(size);
                for (let z = 0; z < size; z++) {
                    let blockPrototype = prototypes[wfc.grid[x][y][z].superpositions[0]];
                    //console.log(wfc.grid[x][y][z].superpositions[0]);

                    blockgrid[x][y][z] = Object.assign({}, blockPrototype);
                    if (typeof(blockPrototype) != "undefined") {
                        if (blockPrototype.geom != null) {
                            let block = new THREE.Mesh(blockPrototype.geom, blockPrototype.material);
                            scene.add(block);
                            block.position.set(x,y,z);
                            if (blockPrototype.rotation == 1) {
                                block.rotation.set(0,Math.PI/2,0);
                            }
                            if (blockPrototype.rotation == 2) {
                                block.rotation.set(0,Math.PI,0);
                            }
                            if (blockPrototype.rotation == 3) {
                                block.rotation.set(0,Math.PI*3/2,0);
                            }
                        }
                    }
                }
            }
        }
    }
}

wfc.init();