let prototypes = {
    air: {
        geom: blocks.flat.geom,
        material: blocks.flat.material,
        rotation: 0,
        edges: {
            t: "0", //top
            lf: "0", //left front
            lb: "0", //left back
            rf: "0", //right front
            rb: "0", //right back
            b: "0" //bottom
        },
        neighbor_list: {
            t: ["0"], //top
            lf: ["0"], //left front
            lb: ["0"], //left back
            rf: ["0"], //right front
            rb: ["0"], //right back
            b: ["0"] //bottom
        }
    },
    flat: {
        geom: blocks.flat.geom,
        material: blocks.flat.material,
        rotation: 0,
        edges: {
            t: "0", //top
            lf: "2_0", //left front
            lb: "2_0", //left back
            rf: "2_0", //right front
            rb: "2_0", //right back
            b: "1" //bottom
        },
        neighbor_list: {
            t: ["0"], //top
            lf: ["2_0"], //left front
            lb: ["2_0"], //left back
            rf: ["2_0"], //right front
            rb: ["2_0"], //right back
            b: ["1"] //bottom
        }
    }
}