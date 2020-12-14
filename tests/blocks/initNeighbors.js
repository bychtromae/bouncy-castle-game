//what blocks have which edge types
let edgeTypes = {
    t: {}, //top
    lf: {}, //left front
    lb: {}, //left back
    rf: {}, //right front
    rb: {}, //right back
    b: {} //bottom
}
let temp_edgetypes = {
    "0": [],
    "1": [],
    "2_0": [],
    "2_1": [],
    "2_2": [],
    "2_3": [],
    "3_0": [],
    "3_1": [],
    "3_2": [],
    "3_3": [],
    "4_0": [],
    "4_1": [],
    "4_2": [],
    "5": [],
    "6_0": [],
    "6_1": []
}

for (let i = 0; i < Object.keys(edgeTypes).length; i++) {
    edgeTypes[Object.keys(edgeTypes)[i]] = JSON.parse(JSON.stringify(temp_edgetypes));;
}

//get every block that has a certain edge type and put it into the edgetypes array
for (let n_block = 0; n_block < Object.keys(prototypes).length; n_block++) {
    let name = Object.keys(prototypes)[n_block]
    let proto = prototypes[name];
    for (let n_face = 0; n_face < Object.keys(proto.edges).length; n_face++) {
        let face = Object.keys(edgeTypes)[n_face];
        edgeTypes[face][proto.edges[face]].push(name);
    }
}

for (let n_block = 0; n_block < Object.keys(prototypes).length; n_block++) {
    let name = Object.keys(prototypes)[n_block]
    let proto = prototypes[name];

    for (let n_face = 0; n_face < 6; n_face++) {
        let face = Object.keys(edgeTypes)[n_face];
        //                  ["t","lf","lb","rf","rb","b"]
        let oppositeFaces = ["b","rb","rf","lb","lf","t"];
        let oppositeFace = oppositeFaces[n_face];
        
        for (let n_neighbor = 0; n_neighbor < proto.edge_neighbor_list[face].length; n_neighbor++) {
            let blockTypesFromNeighborEdgeType = edgeTypes[oppositeFace][proto.edge_neighbor_list[face][n_neighbor]];
            for (let i = 0; i < blockTypesFromNeighborEdgeType.length; i++) {
                proto.neighbor_list[face].push(blockTypesFromNeighborEdgeType[i]);
            }
        }
    }
}
console.log(prototypes);