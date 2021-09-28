class Particle {
    rx: number; ry: number;         // position
    vx: number; vy: number;         // velocity
    count: number;                  // number of collisions so far
    radius: number;  mass: number;  // radius -- mass 

    constructor (rx: number, ry: number, vx: number, vy: number, radius: number, mass: number) {
        this.vx = vx; this.vy = vy; this.rx = rx; this.ry = ry; this.radius = radius; this.mass   = mass;
    }

    public Particle() {
        this.rx     = Math.floor(Math.random()*(1.0 - -0.0) + (-.0) );
        this.ry     = Math.floor(Math.random()*(1.0 - -0.0) + (-.0) );
        this.vx     = Math.floor(Math.random()*(0.005 - -0.005) + (-.005) );
        this.vy     = Math.floor(Math.random()*(0.005 - -0.005) + (-.005) );
        this.radius = 0.02;
        this.mass   = 0.5;
    }

    move(dt: number):void {
        this.rx += this.vx * dt;
        this.ry += this.vy * dt;
    }
    counter(){
        return this.count
    }

    //Predict collisions
    timeToHit(that: Particle) {
        if (this == that) return Infinity;
        let dx:number  = that.rx - this.rx;
        let dy:number  = that.ry - this.ry;
        let dvx:number = that.vx - this.vx;
        let dvy:number = that.vy - this.vy;
        let dvdr:number = dx*dvx + dy*dvy;
        if (dvdr > 0) return Infinity;
        let dvdv: number = dvx*dvx + dvy*dvy;
        if (dvdv == 0) return Infinity;
        let drdr: number = dx*dx + dy*dy;
        let sigma: number = this.radius + that.radius;
        let d: number = (dvdr*dvdr) - dvdv * (drdr - sigma*sigma);
        if (d < 0) return Infinity;
        return -(dvdr + Math.sqrt(d)) / dvdv;
    }

    timeToHitVerticalWall(): number {
        if      (this.vx > 0) return (1.0 - this.rx - this.radius) / this.vx;
        else if (this.vx < 0) return (this.radius - this.rx) / this.vx;  
        else                  return Infinity;
    }

    timeToHitHorizontalWall(): number {
        if      (this.vy > 0) return (1.0 - this.ry - this.radius) / this.vy;
        else if (this.vy < 0) return (this.radius - this.ry) / this.vy;
        else                  return Infinity;
    }


    //Resolve collisions 
    bounceOff(that: Particle): void {
        let dx: number  = that.rx - this.rx;
        let dy: number  = that.ry - this.ry;
        let dvx: number = that.vx - this.vx;
        let dvy: number = that.vy - this.vy;
        let dvdr: number = dx*dvx + dy*dvy;             // dv dot dr
        let dist: number = this.radius + that.radius;   // distance between particle centers at collison

        // magnitude of normal force
        let magnitude = 2 * this.mass * that.mass * dvdr / ((this.mass + that.mass) * dist);

        // normal force, and in x and y directions
        let fx = magnitude * dx / dist;
        let fy = magnitude * dy / dist;

        // update velocities according to normal force
        this.vx += fx / this.mass;
        this.vy += fy / this.mass;
        that.vx -= fx / that.mass;
        that.vy -= fy / that.mass;

        // update collision counts
        this.count++;
        that.count++;
    }

    bounceOffVerticalWall(): void {
        this.vx = -this.vx;
        this.count++;
    }

    bounceOffHorizontalWall(): void {
        this.vy = -this.vy;
        this.count++;
    }

    kineticEnergy(): number {
        return 0.5 * this.mass * (this.vx*this.vx + this.vy*this.vy);
    }
}
