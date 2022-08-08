AFRAME.registerComponent("fish-swim", {
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`

           //
           var posX=(Math.random()*3000+(-1000));
           var posY =(Math.random()*2+(-1));
           var posZ=(Math.random()*3000+(-1000));
           var position={x:posX, y:posY, z:posZ};

           this.fishSwim(id, position);
        }
    },
    
    fishSwim:(id, position)=>{
        var terrainEl= document.querySelector("#Terrain");
        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);

        var fishEl=document.createElement("a-entity");
        fishEl.setAttribute("gltf-model", "./fish.glb");
        fishEl.setAttribute("scale", {x:500, y:500, z:500});
        fishEl.setAttribute("script-model", "./fish.glb");
        fishEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(fishEl);

    }
});