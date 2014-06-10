// Login implemented only in "dummy mode" (according to project specifications)
// -> the user is recognized only based on the provided e-mail address

module.exports = function login(req, res) {
  res.json({
    token: req.body.email
  });
};
