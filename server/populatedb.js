console.log(
  'This script populates some test cameras, brands, systems and camera instances to your database'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Camera = require('./models/camera');
const Brand = require('./models/brand');
const System = require('./models/system');
const CameraInstance = require('./models/cameraInstance');

const cameras = [];
const brands = [];
const systems = [];
const camerainstances = [];

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: about to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: should be connected?');
  await createBrands();
  await createSystems();
  await createCameras();
  await createCameraInstances();
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function brandCreate(index, brand_name) {
  const brand = new Brand({ name: brand_name });

  await brand.save();
  brands[index] = brand;

  console.log(`Added brand: ${brand_name}`);
}

async function systemCreate(index, system_name) {
  const system = new System({ name: system_name });

  await system.save();
  systems[index] = system;

  console.log(`Added system: ${system_name}`);
}

async function cameraCreate(index, brand, model, system, price) {
  const cameraDetail = {
    brand: brand,
    model: model,
    system: system,
    price: price,
  };

  const camera = new Camera(cameraDetail);
  await camera.save();
  cameras[index] = camera;
  console.log(`Added camera: ${camera.brand} ${camera.model}`);
}

async function cameraInstanceCreate(index, camera) {
  const cameraInstanceDetail = {
    camera: camera,
    imprint: `${camera.brand.name} ${camera.model}`,
  };

  const camerainstance = new CameraInstance(cameraInstanceDetail);
  await camerainstance.save();

  console.log(`Added camera instance: ${camerainstance.imprint}`);
}

async function createBrands() {
  console.log('Adding brands...');
  await Promise.all([
    brandCreate(0, 'Leica'),
    brandCreate(1, 'Fuji'),
    brandCreate(2, 'Canon'),
    brandCreate(3, 'Nikon'),
    brandCreate(4, 'Pentax'),
  ]);
}

async function createSystems() {
  console.log(`Adding camera systems...`);
  await Promise.all([systemCreate(0, 'Film'), systemCreate(1, 'Digital')]);
}

async function createCameras() {
  console.log('Adding cameras...');
  await Promise.all([
    cameraCreate(0, brands[0], 'M10 Monochrom', systems[1], 8000),
    cameraCreate(1, brands[1], 'X-E4', systems[1], 1000),
    cameraCreate(2, brands[4], 'MX', systems[0], 100),
    cameraCreate(3, brands[3], 'D850', systems[1], 1600),
    cameraCreate(4, brands[2], 'Rebel 2000', systems[0], 50),
    cameraCreate(5, brands[1], 'X-E4', systems[1], 1000),
  ]);
}

async function createCameraInstances() {
  console.log('Adding camera instances...');
  await Promise.all([
    cameraInstanceCreate(0, cameras[0]),
    cameraInstanceCreate(1, cameras[1]),
    cameraInstanceCreate(2, cameras[4]),
    cameraInstanceCreate(3, cameras[3]),
    cameraInstanceCreate(4, cameras[4]),
    cameraInstanceCreate(5, cameras[5]),
  ]);
}
