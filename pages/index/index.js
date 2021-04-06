import * as THREE from '../../libs/three.weapp.js'
import { OrbitControls } from '../../jsm/controls/OrbitControls'

Page({
  data: {
    canvasId: null
  },
  onLoad: function () {
    wx.createSelectorQuery()
      .select('#c')
      .node()
      .exec((res) => {
        var canvas = res[0].node;
        canvas = THREE.global.registerCanvas(canvas);
        this.setData({ canvasId: canvas._canvasId })
        var windowHeight = wx.getSystemInfoSync().windowHeight
        var windowWidth = wx.getSystemInfoSync().windowWidth
        
        //init scene.
        const scene = new THREE.Scene();
        const marking = new THREE.Group();

        //initCarema.
        const fov = 45;
        const aspect = canvas.width / canvas.height ;  // the canvas default
        const near = 0.1;
        const far = 100;
        //const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 
        const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 1000);
        camera.position.set(0, 0, 500);
        camera.up.set(0, 1, 0)
        camera.lookAt({ x: 0, y: 0, z: 0 }) 
 
        // //init render.
        const renderer = new THREE.WebGLRenderer({ antialias: true, autoClear:false });
 
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;
        // controls.enableZoom = false;
        camera.position.set(200, 200, 200);
        controls.update();
 
        //init light.
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(50, 50, 10)
        scene.add(light)  
        renderer.render(scene, camera);
 
        //地球 
 
        var earth_geometry = new THREE.SphereGeometry(70, 70, 75);
        console.log(earth_geometry);
        const texture = new THREE.TextureLoader().load('./earth2.jpg');
        const earth_material = new THREE.MeshBasicMaterial({ map: texture });

        const earth = new THREE.Mesh(earth_geometry, earth_material);
        earth.position.set(0, 0, 0);
        earth.rotation.x = 0.42;
        earth.rotation.y = 60;
        scene.add(earth);


        const _markData = [
          {
            attributes:{
              x:0,
              y:270
            }
          }
        ]
        this.getPosition = function(_longitude,_latitude,_radius){
          let lg = THREE.Math.degToRad(_longitude);
          var lt = THREE.Math.degToRad(_latitude);
          var temp = _radius * Math.cos(lt);
          var x = temp * Math.sin(lg);
          var y = _radius * Math.sin(lt);
          var z = temp * Math.cos(lg);
          return {
            x:x,
            y:y,
            z:z
          }
        }
        for(let i = 0;i < _markData.length;i++){
          let mark = new THREE.Mesh(new THREE.SphereGeometry(40,70,70),new THREE.MeshBasicMaterial({
            color:'#1bb4b0'
          }));
          let markPos = this.getPosition(_markData[i].attributes.x + 90,_markData[i].attributes.y,30);
          mark.position.set(markPos.x,markPos.y,markPos.z);
          marking.add(mark)
        }
        scene.add(marking);
 
        function render() {
          canvas.requestAnimationFrame(render);
          // earth.rotation.x += 0.02;
          earth.rotation.y -= 0.005;
          marking.rotation.y -= 0.005;
          controls.update();
          renderer.render(scene, camera);
        }
 
        render()

        this.setData({
          canvas
        })




      })
  },
  onUnload: function () {
    THREE.global.unregisterCanvas(this.data.canvasId)
  },
  touchStart(e) {
    // console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
  },
  touchMove(e) {
    // console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
  },
  touchEnd(e) {
    // console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
  },
  touchCancel(e) {
    // console.log('canvas', e)
  },
  longTap(e) {
    // console.log('canvas', e)
  },
  tap(e) {
    console.log('canvas', e)
  },
  documentTouchStart(e) {
    // console.log('document',e)
  },
  documentTouchMove(e) {
    // console.log('document',e)
  },
  documentTouchEnd(e) {
    // console.log('document',e)
  },
})

