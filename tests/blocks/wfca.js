//Thanks to Martin Donalds for the amazing explanation of the Waveform Collapse Algorithm!
//https://www.youtube.com/watch?v=2SuvO4Gi7uY

//the grid size
let size = 4;

let direction_vectors = {
    t: {x:0, y:1, z:0}, //top
    lf: {x:0, y:0, z:-1}, //left front
    lb: {x:-1, y:0, z:0}, //left back
    rf: {x:1, y:0, z:0}, //right front
    rb: {x:0, y:0, z:1}, //right back
    b: {x:0, y:-1, z:0} //bottom
}

let wfc = {
    grid: new Array(size),
    is_collapsed: function () {
        let n = 0;
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    if (this.grid[x][y][z].superpositions.length != 1) {
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
        //console.log(JSON.parse(JSON.stringify(this.grid)));
        this.collapse_at(coords);
        //console.log(JSON.parse(JSON.stringify(this.grid)));
        this.propagate(coords);
        //console.log(JSON.parse(JSON.stringify(this.grid)));
        //console.log(this.grid);
    },
    get_min_entropy_cell: function () {
        let entropies = [];
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    let entropy = this.grid[x][y][z].superpositions.length;
                    if (entropy > 1) {
                        entropies.push(entropy);
                    }
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
                        cells.push({
                            x: x,
                            y: y,
                            z: z
                        });
                    }
                }
            }
        }
        //console.log(entropies);
        if (cells.length == 1) {
            //return the only cell with the lowest entropy
            return cells[0];
        }
        //return a random cell with the lowest entropy
        return cells[Math.floor(Math.random()*(cells.length-1))];
    },
    collapse_at: function (coords) {
        //console.log(coords);
        let cell = this.grid[coords.x][coords.y][coords.z];
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
        let cell = this.grid[coords.x][coords.y][coords.z];
        let entropy = cell.superpositions.length;
        if (entropy == 1) {
            //console.log(cell.superpositions[0]);
            //console.log(coords);
            let proto = prototypes[cell.superpositions[0]];
            //console.log(proto);
            if (typeof(proto) != "undefined") {
                for (let n_face = 0; n_face < 6; n_face++) {
                    //coords of the cell to constrain relative to the active one
                    let vec = direction_vectors[Object.keys(direction_vectors)[n_face]];
                    if (typeof(this.grid[coords.x + vec.x]) != "undefined" &&
                        typeof(this.grid[coords.x + vec.x][coords.y + vec.y]) != "undefined" && 
                        typeof(this.grid[coords.x + vec.x][coords.y + vec.y][coords.z + vec.z]) != "undefined") {
                        let other_cell = this.grid[coords.x + vec.x][coords.y + vec.y][coords.z + vec.z];
                        let face = Object.keys(edgeTypes)[n_face];
                        //log(other_cell.superpositions.length);
                        if (typeof(other_cell) != "undefined") {
                            let neighbors = proto.neighbor_list[face];
                            //log(neighbors);
                            //loop through all the superpositions of the other cell and remove any states that aren't included in the cell's list of possible neighbors.
                            for (let i = 0; i < other_cell.superpositions.length; i++) {
                                log(neighbors);
                                log(other_cell.superpositions[i]);
                                log(neighbors.includes(other_cell.superpositions[i]));
                                if (!neighbors.includes(other_cell.superpositions[i])) {
                                    //log(other_cell.superpositions);
                                    other_cell.superpositions.splice(neighbors.indexOf(other_cell.superpositions[i]), 1);
                                    //log(other_cell.superpositions);
                                }
                                if (other_cell.superpositions.length == 0) {
                                    other_cell.superpositions.push("air");
                                }
                            }
                            
                        }
                    
                        //log(other_cell.superpositions);
                        //log(other_cell.superpositions.length);
                    }
                }
            }
        }
    },
    init: function () {
        this.fill_grid();

        while(!this.is_collapsed()) {
            this.iterate();
        }
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
    }
}

wfc.init();
console.log(JSON.parse(JSON.stringify(wfc.grid)));