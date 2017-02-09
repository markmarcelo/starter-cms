const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Slideshow,
          as: 'slideshows',
        }],
      })
      .then(slideshows => res.status(200).send(slideshows))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .find({
        where: {
        username: req.params.username,
        },
      })
      .then(slideshow => {
        if (!slideshow) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(slideshow);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .find({
          where: {
            username: req.params.username,
          },
        })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }

        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};