import React, { useEffect, useMemo, useState } from 'react';
import { Particles,initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponentHome = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#000"
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1
      },
      backgroundMask: {
        enable: false,
        composite: "destination-out",
        cover: {
          color: {
            value: "#FFA500"
          },
          opacity: 1
        }
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onDiv: {
            enable: false,
            mode: [],
            selectors: []
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 30,
            speed: 1
          },
          bounce: {
            distance: 200
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: []
            }
          },
          connect: {
            distance: 100,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
          },
          push: {
            default: true,
            groups: [],
            quantity: 4
          },
          remove: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: []
            }
          },
          slow: {
            factor: 3,
            radius: 200
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff"
                },
                stop: {
                  value: "#000000"
                }
              },
              radius: 1000
            },
            shadow: {
              color: {
                value: "#000000"
              },
              length: 2000
            }
          }
        }
      },
      manualParticles: [],
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      },
      particles: {
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        collisions: {
          enable: false,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0
          }
        },
        color: {
          value: "#fff",
          animation: {
            enable: false,
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true
            }
          }
        },
        life: {
          count: 0,
          delay: {
            sync: false,
            value: 0
          },
          duration: {
            sync: false,
            value: 0
          }
        },
        links: {
          blink: false,
          color: {
            value: "#fff"
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: "#000"
            },
            enable: false
          },
          triangles: {
            enable: false,
            frequency: 1
          },
          width: 1,
          warp: false
        },
        move: {
          angle: {
            offset: 0,
            value: 90
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000
            }
          },
          decay: 0,
          direction: "none",
          distance: {},
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            maxSpeed: 50,
            inverse: false
          },
          path: {
            clamp: true,
            delay: {
              sync: false,
              value: 0
            },
            enable: false
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false
          },
          straight: false,
          trail: {
            enable: false,
            fillColor: {
              value: "#000000"
            },
            length: 10
          },
          vibrate: false,
          warp: false
        },
        number: {
          density: {
            enable: true,
            area: 800,
            factor: 1000
          },
          limit: 0,
          value: 200
        },
        opacity: {
          animation: {
            count: 0,
            enable: true,
            speed: 0.5,
            sync: false,
            destroy: "none",
            startValue: "max",
            minimumValue: 0.1,
            restartOnPush: false
          },
          random: {
            enable: false,
            minimumValue: 1
          },
          value: 0.5
        },
        reduceDuplicates: false,
        rotate: {
          animation: {
            enable: false,
            speed: 0,
            sync: false
          },
          direction: "clockwise",
          random: false,
          value: 0
        },
        shadow: {
          blur: 0,
          color: {
            value: "#000000"
          },
          enable: false,
          offset: {
            x: 0,
            y: 0
          }
        },
        shape: {
          options: {},
          type: "circle"
        },
        size: {
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            sync: false,
            destroy: "none",
            minimumValue: 0.1,
            startValue: "max"
          },
          random: {
            enable: true,
            minimumValue: 1
          },
          value: 3
        },
        stroke: {
          color: {
            value: "#000000"
          },
          width: 0,
          opacity: 1
        },
        tilt: {
          animation: {
            enable: false,
            speed: 0,
            sync: false
          },
          direction: "clockwise",
          enable: false,
          value: 0
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          }
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            velocity: 2
          }
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      themes: [],
      emitters: [],
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 0.3
      }
    }),
    []
  );

  return (<Particles id={props.id} init={particlesLoaded} options={options} />)
}; 

export default ParticlesComponentHome;