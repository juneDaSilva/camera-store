var express = require('express');
var router = express.Router();

// GET catalog home page.
router.get('/', camera_controller.index);

// GET request for creating a camera. NOTE This must come before routes that display camera (uses id).
router.get('/camera/create', camera_controller.camera_create_get);

// POST request for creating camera.
router.post('/camera/create', camera_controller.camera_create_post);

// GET request to delete camera.
router.get('/camera/:id/delete', camera_controller.camera_delete_get);

// POST request to delete camera.
router.post('/camera/:id/delete', camera_controller.camera_delete_post);

// GET request to update camera.
router.get('/camera/:id/update', camera_controller.camera_update_get);

// POST request to update camera.
router.post('/camera/:id/update', camera_controller.camera_update_post);

// GET request for one camera.
router.get('/camera/:id', camera_controller.camera_detail);

// GET request for list of all camera items.
router.get('/cameras', camera_controller.camera_list);

/// BRAND ROUTES ///

// GET request for creating brand. NOTE This must come before route for id (i.e. display brand).
router.get('/brand/create', brand_controller.brand_create_get);

// POST request for creating brand.
router.post('/brand/create', brand_controller.brand_create_post);

// GET request to delete brand.
router.get('/brand/:id/delete', brand_controller.brand_delete_get);

// POST request to delete brand.
router.post('/brand/:id/delete', brand_controller.brand_delete_post);

// GET request to update brand.
router.get('/brand/:id/update', brand_controller.brand_update_get);

// POST request to update brand.
router.post('/brand/:id/update', brand_controller.brand_update_post);

// GET request for one brand.
router.get('/brand/:id', brand_controller.brand_detail);

// GET request for list of all brands.
router.get('/brands', brand_controller.brand_list);

/// SYSTEM ROUTES ///

// GET request for creating a system. NOTE This must come before route that displays system (uses id).
router.get('/system/create', system_controller.system_create_get);

//POST request for creating system.
router.post('/system/create', system_controller.system_create_post);

// GET request to delete system.
router.get('/system/:id/delete', system_controller.system_delete_get);

// POST request to delete system.
router.post('/system/:id/delete', system_controller.system_delete_post);

// GET request to update system.
router.get('/system/:id/update', system_controller.system_update_get);

// POST request to update system.
router.post('/system/:id/update', system_controller.system_update_post);

// GET request for one system.
router.get('/system/:id', system_controller.system_detail);

// GET request for list of all system.
router.get('/systems', system_controller.system_list);

/// camerainstance ROUTES ///

// GET request for creating a camerainstance. NOTE This must come before route that displays camerainstance (uses id).
router.get(
  '/camerainstance/create',
  book_instance_controller.camerainstance_create_get
);

// POST request for creating camerainstance.
router.post(
  '/camerainstance/create',
  book_instance_controller.camerainstance_create_post
);

// GET request to delete camerainstance.
router.get(
  '/camerainstance/:id/delete',
  book_instance_controller.camerainstance_delete_get
);

// POST request to delete camerainstance.
router.post(
  '/camerainstance/:id/delete',
  book_instance_controller.camerainstance_delete_post
);

// GET request to update camerainstance.
router.get(
  '/camerainstance/:id/update',
  book_instance_controller.camerainstance_update_get
);

// POST request to update camerainstance.
router.post(
  '/camerainstance/:id/update',
  book_instance_controller.camerainstance_update_post
);

// GET request for one camerainstance.
router.get(
  '/camerainstance/:id',
  book_instance_controller.camerainstance_detail
);

// GET request for list of all camerainstance.
router.get('/camerainstances', book_instance_controller.camerainstance_list);

module.exports = router;
