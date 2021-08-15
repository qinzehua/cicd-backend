'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/user/list', controller.user.list);
  router.put('/user/edit/:id', controller.user.editById);
  router.post('/user/create', controller.user.create);
  router.delete('/user/delete/:id', controller.user.deleteById);
};
