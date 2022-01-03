import React, { useEffect } from "react";
import p5 from "p5";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  min-height: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.9;
  > canvas {
    min-width: 100%;
    width: 100%;
    min-height: 100%;
    height: 100% !important;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor(p5) {
    this.x = p5.random(0, p5.width);
    this.y = p5.random(0, p5.height);
    this.r = p5.random(2, 3.5);
    this.xSpeed = p5.random(-0.5, 2.5);
    this.ySpeed = p5.random(-0.5, 2.5);
    this.p = p5;
  }

  // creation of a particle.
  createParticle() {
    this.p.noStroke();
    this.p.fill("rgba(120,120,120,1)");
    this.p.circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle(p5) {
    if (this.x < 0 || this.x > this.p.width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > this.p.height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = this.p.dist(this.x, this.y, element.x, element.y);
      if (dis < 35) {
        this.p.stroke("rgba(120,120,120,0.1)");
        this.p.line(this.x, this.y, element.x, element.y);
      }
    });
  }
}
let particles = [];
const Background = () => {
  const Sketch = (p5) => {
    let radius;
    p5.setup = () => {
      let canvas = p5.createCanvas(720, 400);
      // p5.background(0);
      for (let i = 0; i < p5.windowWidth / 5; i++) {
        particles.push(new Particle(p5));
      }
    };

    p5.draw = () => {
      p5.background("rgba(242,242,242,0.5)");
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    };
  };

  useEffect(() => {
    new p5(Sketch, "parent");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box id="parent" />;
};

export default Background;
