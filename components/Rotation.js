//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });

  AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 } ,  
      speedOfAscent: { type: "number", default: 0 }
 
    },
    init: function () {
      window.addEventListener("keydown", (e) => {

        //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diverPosition = this.data.speedOfRotation;      
      var diverPosition = this.data.speedOfAscent;

        if (e.key === "ArrowRight") {
          if (diverPosition.x < 10) {
            diverPosition += 0.5;
            this.el.getAttribute("rotation", diverPosition);  
          }
        }
        if (e.key === "ArrowLeft") {
            if (diverPosition.x > -10) {
              diverPosition -= 0.5;
                this.el.getAttribute("rotation", diverPosition);  
            }
        }
        if (e.key === "ArrowUp") {
            if (diverPosition.z < 20) {
              diverPosition.z += 0.5;
                this.el.getAttribute("rotation", diverPosition);  
            }
            if (diverPosition.y < 2) {
              diverPosition.y += 0.01;
                this.el.getAttribute("position", diverPosition);  
            }
          }
          if (e.key === "ArrowDown") {
            if (diverPosition.z > -10) {
              diverPosition.z -= 0.5;
                this.el.getAttribute("rotation", diverPosition);  
            }
            if (diverPosition.y > -2) {
                diverPosition.y -= 0.01;
                this.el.getAttribute("positio", diverPosition);  
            }
          }
      });
    },
    
  });