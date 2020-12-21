const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 10, 2, -2);
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
light.position.set( 0, 50, 100 );
scene.add( light );

let t = 0;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.z = (Math.cos(t)*8) + 2;
    camera.position.x = (Math.sin(t)*8) + 2;
    t+=0.01;
    camera.lookAt(2,2,2);
}
animate();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false)