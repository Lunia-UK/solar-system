import * as THREE from 'three';

export default class AsteroidBelt {
    constructor(group) {
        this.experience = window.experience
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.group = group;
        this.createBelt();
    }

    createBelt() {
        this.particles = 50000;
        this.particlesGeometry = new THREE.BufferGeometry();
        // let positions = new Float32Array( particles * 3 );
        this.positions = [];
        this.n = 150
        this.n2 = this.n / 2;
        for (let i = 0; i < this.particles; i += 3) {
            this.x = Math.random() * this.n - this.n2;
            this.y = Math.random() * (-.15 - .15 ) + .15 ;
            this.z = Math.random() * this.n - this.n2;

            this.positionVector = new THREE.Vector3(this.x, this.y, this.z);
            this.distanceParticules = this.positionVector.distanceTo(
                new THREE.Vector3(0, 0, 0)
            );
            this.size = {start: 60, stop: 70};
            if ( this.size.stop > this.distanceParticules && this.size.start < this.distanceParticules ) {
                // position
                this.positions[i] = this.x;
                this.positions[i + 1] = this.y;
                this.positions[i + 2] = this.z;

                this.positions.push = this.x;
                this.positions.push = this.y;
                this.positions.push = this.z;
            }
        }
        this.positionsParticules = new Float32Array(this.positions);
        this.particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.positionsParticules, 3)
        );
        this.particlesMaterial = new THREE.PointsMaterial();
        this.particlesMaterial.size = 3;
        this.particlesMaterial.transparent = true;
        this.particlesMaterial.alphaTest = 0.001
        this.particlesMaterial.alphaMap = this.resources.items.starsTexture
        this.particlesMaterial.opacity = 0.8
        this.asteroidBelt = new THREE.Points(this.particlesGeometry, this.particlesMaterial);
        this.group.add(this.asteroidBelt);

    }
}
