let prototypes = {
    air: {
        geom: blockModels.air.geom,
        material: blockModels.air.material,
        rotation: 0,
        edges: {
            t: "0", //top
            lf: "0", //left front
            lb: "0", //left back
            rf: "0", //right front
            rb: "0", //right back
            b: "0" //bottom
        },
        edge_neighbor_list: {
            t: ["0","1"], //top
            lf: ["0","1"], //left front
            lb: ["0","1"], //left back
            rf: ["0","1"], //right front
            rb: ["0","1"], //right back
            b: ["0","1"] //bottom
        },
        neighbor_list: {
            t: [], //top
            lf: [], //left front
            lb: [], //left back
            rf: [], //right front
            rb: [], //right back
            b: [] //bottom
        }
    },
    flat: {
        geom: blockModels.flat.geom,
        material: blockModels.flat.material,
        rotation: 0,
        edges: {
            t: "0", //top
            lf: "2_0", //left front
            lb: "2_0", //left back
            rf: "2_0", //right front
            rb: "2_0", //right back
            b: "1" //bottom
        },
        edge_neighbor_list: {
            t: ["0"], //top
            lf: ["2_0"], //left front
            lb: ["2_0"], //left back
            rf: ["2_0"], //right front
            rb: ["2_0"], //right back
            b: ["1","0"] //bottom
        },
        neighbor_list: {
            t: [], //top
            lf: [], //left front
            lb: [], //left back
            rf: [], //right front
            rb: [], //right back
            b: [] //bottom
        }
    }
}