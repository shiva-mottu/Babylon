var canvas = document.getElementById("renderCanvas");

/******* Add the create scene function ******/
		
   var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    // Setup camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
    camera.setPosition(new BABYLON.Vector3(-10, 10, 0));
    camera.attachControl(canvas, true);

    // Lights
    //var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 10, 0), scene);
    var light1 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(0, -10, 0), scene);
    var light2 = new BABYLON.PointLight("Omni2", new BABYLON.Vector3(10, 0, 0), scene);
    var light3 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(1, -1, 0), scene);
	var light4 = new BABYLON.PointLight("Omni3", new BABYLON.Vector3(10, 0, 0), scene);
	var light5 = new BABYLON.PointLight("Omni4", new BABYLON.Vector3(10, 0, 0), scene);
	

    var material = new BABYLON.StandardMaterial("kosh", scene);
    var sphere = BABYLON.Mesh.CreateSphere("Sphere", 16, 3, scene);

    // Creating light sphere
    //var lightSphere0 = BABYLON.Mesh.CreateSphere("Sphere0", 16, 0.5, scene);
    var lightSphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 16, 0.5, scene);
    var lightSphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 16, 0.5, scene);
	var lightSphere4 = BABYLON.Mesh.CreateSphere("Sphere4", 16, 0.5, scene);
	var lightSphere5 = BABYLON.Mesh.CreateSphere("Sphere5", 16, 0.5, scene);

    //lightSphere0.material = new BABYLON.StandardMaterial("red", scene);
    //lightSphere0.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    //lightSphere0.material.specularColor = new BABYLON.Color3(0, 0, 0);
    //lightSphere0.material.emissiveColor = new BABYLON.Color3(1, 0, 0);

    lightSphere1.material = new BABYLON.StandardMaterial("green", scene);
    lightSphere1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    lightSphere1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    lightSphere1.material.emissiveColor = new BABYLON.Color3(0, 1, 0);

    lightSphere2.material = new BABYLON.StandardMaterial("blue", scene);
    lightSphere2.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    lightSphere2.material.specularColor = new BABYLON.Color3(0, 0, 0);
    lightSphere2.material.emissiveColor = new BABYLON.Color3(0, 0, 1);
	
	lightSphere4.material = new BABYLON.StandardMaterial("blue", scene);
    lightSphere4.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    lightSphere4.material.specularColor = new BABYLON.Color3(0, 0, 0);
    lightSphere4.material.emissiveColor = new BABYLON.Color3(1, 1, 0);
	
	lightSphere5.material = new BABYLON.StandardMaterial("blue", scene);
    lightSphere5.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    lightSphere5.material.specularColor = new BABYLON.Color3(0, 0, 0);
    lightSphere5.material.emissiveColor = new BABYLON.Color3(0, 1, 1);

    // Sphere material
    material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    sphere.material = material;
	material.maxSimultaneousLights = 16;

    // Lights colors
    //light0.diffuse = new BABYLON.Color3(1, 0, 0);
    //light0.specular = new BABYLON.Color3(1, 0, 0);

    light1.diffuse = new BABYLON.Color3(0, 1, 0);
    light1.specular = new BABYLON.Color3(0, 1, 0);

    light2.diffuse = new BABYLON.Color3(0, 0, 1);
    light2.specular = new BABYLON.Color3(0, 0, 1);

    light3.diffuse = new BABYLON.Color3(1, 1, 1);
    light3.specular = new BABYLON.Color3(1, 1, 1);
	
	light4.diffuse = new BABYLON.Color3(1, 1, 0);
    light4.specular = new BABYLON.Color3(1, 1, 0);
	
	light5.diffuse = new BABYLON.Color3(0, 1, 1);
    light5.specular = new BABYLON.Color3(0, 1, 1);

    // Animations
    var alpha = 0;
    scene.beforeRender = function () {
        //light0.position = new BABYLON.Vector3(10 * Math.sin(alpha), 0, 10 * Math.cos(alpha));
        light1.position = new BABYLON.Vector3(10 * Math.sin(alpha), 0, -10 * Math.cos(alpha));
        light2.position = new BABYLON.Vector3(10 * Math.cos(alpha), 0, 10 * Math.sin(alpha));
		light4.position = new BABYLON.Vector3(10 * Math.cos(alpha), 10 * Math.sin(alpha), 0);
		light5.position = new BABYLON.Vector3(10 * Math.sin(alpha), -10 * Math.cos(alpha), 0);

        //lightSphere0.position = light0.position;
        lightSphere1.position = light1.position;
        lightSphere2.position = light2.position;
		lightSphere4.position = light4.position;
		lightSphere5.position = light5.position;

        alpha += 0.01;
    };
	
	var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.5}, scene);	
	
	var spheres = [];
	for(var i = 0; i < 25; i++) {
		spheres[i] = sphere.clone("sphere" +i);
		spheres[i].position.x = -2 + i%5;
		spheres[i].position.y = 2 - Math.floor(i/5);
	}	
	
	//light0.excludedMeshes.push(spheres[7], spheres[18]);	
	light1.includedOnlyMeshes.push(spheres[7], spheres[18])

    return scene;
}

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
var scene = createScene();

   engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});


