//Thanks to Martin Donalds for the amazing explanation of the Waveform Collapse Algorithm!
//https://www.youtube.com/watch?v=2SuvO4Gi7uY

let size = 4;
let wfcgrid = new Array(size);
for (let x = 0; x < size; x++) {
    wfcgrid[x] = new Array(size);
    for (let y = 0; y < size; y++) {
        wfcgrid[x][y] = new Array(size);
        for (let z = 0; z < size; z++) {
            wfcgrid[x][y][z] = {
                superpositions: []
            };
        }
    }
}

let direction_vectors = {
    t: {x:0, y:1, z:0}, //top
    lf: {x:0, y:0, z:-1}, //left front
    lb: {x:-1, y:0, z:0}, //left back
    rf: {x:1, y:0, z:0}, //right front
    rb: {x:0, y:0, z:1}, //right back
    b: {x:0, y:-1, z:0} //bottom
}

let wfc = {
    grid: wfcgrid,
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
        this.collapse_at(coords);
        this.propagate(coords);
        console.log(this.grid);
    },
    get_min_entropy_cell: function () {
        let entropies = [];
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    let entropy = this.grid[x][y][z].superpositions.length;
                    if (entropy != 1) {
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
        if (cells.length == 1) {
            //return the only cell with the lowest entropy
            return cells[0];
        }
        //return a random cell with the lowest entropy
        return cells[Math.floor(Math.random()*(cells.length-1))];
    },
    collapse_at: function (coords) {
        let cell = this.grid[coords.x][coords.y][coords.z];
        let entropy = cell.superpositions.length;
        if (entropy != 1) {
            //sets the cell's superposition to just a single random block in the cell's superposition.
            cell.superpositions = cell.superpositions[Math.floor(Math.random()*(entropy-1))];
        }
    },
    propagate: function (coords) {
        let cell = this.grid[coords.x][coords.y][coords.z];
        let entropy = cell.superpositions.length;
        if (entropy == 1) {
            let proto = prototypes[cell.superpositions[0]];
            for (let n_face = 0; n_face < edgeTypes.length; n_face++) {
                //coords of the cell to constrain relative to the active one
                let vec = direction_vectors[Object.keys(direction_vectors)[n_face]];
                let other_cell = grid[coords.x + vec.x][coords.y + vec.y][coords.z + vec.z];
                let face = Object.keys(edgeTypes)[n_face];
                if (typeof(other_cell) != "undefined") {
                    let neighbors = proto.neighbor_list[face];
                    for (let n_neighbor = 0; n_neighbor < neighbors.length; n_neighbor++) {
                        if (!other_cell.superpositions.includes(neighbors[n_neighbor])) {
                            other_cell.superpositions.splice(list.indexOf(neighbors[n_neighbor]), 1);
                        }
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
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                for (let z = 0; z < this.grid[0][0].length; z++) {
                    this.grid[x][y][z].superpositions = Object.keys(prototypes);
                }
            }
        }
    }
}

wfc.init();