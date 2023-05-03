import React from "react";
import Particles from "react-tsparticles";

const BackgroundMagic = () => {
  return (
    <Particles
      className="absolute -z-10 w-full h-full"
      id="tsparticles"
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
          particles: {
            shape: {
              type: "images",
              options: {
                images: {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Moebius_strip.svg/712px-Moebius_strip.svg.png",
                  width: 500,
                  height: 634,
                },
              },
            },
            size: {
              value: 40,
            },
            move: {
              speed: 10,
              outModes: {
                default: "none",
                right: "destroy",
              },
              straight: true,
            },
            zIndex: {
              value: 0,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 10,
                sync: true,
              },
            },
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
