"use client";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

const BackgroundMagic = () => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <Particles
      className=""
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "none",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
            push: {
              groups: ["z5000", "z7500", "z2500", "z1000"],
            },
          },
        },
        particles: {
          color: {
            animation: {
              h: {
                speed: 10,
              },
            },
          },
          groups: {
            z5000: {
              number: {
                value: 70,
              },
              zIndex: {
                value: 50,
              },
            },
            z7500: {
              number: {
                value: 30,
              },
              zIndex: {
                value: 75,
              },
            },
            z2500: {
              number: {
                value: 50,
              },
              zIndex: {
                value: 25,
              },
            },
            z1000: {
              number: {
                value: 40,
              },
              zIndex: {
                value: 10,
              },
            },
          },
          links: {
            color: {
              value: "#ffffff",
            },
            opacity: 0.4,
          },
          move: {
            angle: {
              offset: 45,
              value: 10,
            },
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "right",
            enable: true,
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            speed: 5,
          },
          number: {
            value: 100,
          },
          opacity: {
            animation: {
              speed: 1,
              minimumValue: 0.1,
            },
          },
          zIndex: {
            value: 5,
            opacityRate: 0.5,
          },
        },
        emitters: {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 1,
            delay: 7,
          },
          shape: "square",
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 0,
          },
          position: {
            x: -5,
            y: 55,
          },
        },
      }}
    />
  );
};

export default BackgroundMagic;
