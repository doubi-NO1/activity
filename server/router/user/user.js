const userCtrl = require('../../controller/user');

module.exports.default = module.exports = [
  {
    path: 'login',
    ctrl: userCtrl.login,
    type: 'post'
  },
  {
    path: 'register',
    ctrl: userCtrl.register,
    type: 'post'
  }
]