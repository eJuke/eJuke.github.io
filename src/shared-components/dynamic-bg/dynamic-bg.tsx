import { Component } from "react";
import * as THREE from "three";

export class DynamicBgComponent extends Component {

    element: HTMLDivElement | null = null;
    scene: THREE.Scene | null = null;
    renderer: THREE.WebGLRenderer | null = null;
    camera: THREE.OrthographicCamera | null = null;

    componentDidMount() {

        const width = this.element!.clientWidth;
        const height = this.element!.clientHeight;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);

        this.element!.appendChild(this.renderer.domElement);

        const aspect = window.innerWidth / window.innerHeight;
        const d = 20;
        this.camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );

        this.camera.position.set( 20, 20, 20 );
        this.camera.rotation.order = "YXZ";
        this.camera.rotation.y = - Math.PI / 4;
        this.camera.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ) );

        //LIGHTS
        const lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);

        // geometry
        const geometry = new THREE.BoxGeometry( 10, 10, 10 );

        // material
        const material = new THREE.MeshNormalMaterial();

        // mesh
        const mesh = new THREE.Mesh( geometry, material );
        this.scene.add( mesh );

        this.renderScene();
    }

    private renderScene() {

        if (this.renderer) {

            this.renderer.render(this.scene!, this.camera!);
        }
    }

    render() {

        return <div
            style={{ width: "1200px", height: "600px" }}
            ref={element => this.element = element}>
        </div>
    }
}

export default DynamicBgComponent;
