const router = require('express').Router();
const { User, Post } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
     // Access our User model and run .findAll() method)
  User.findAll()
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
      attributes:  { exclude: ['password'] },
        where: {
          id: req.params.id
        },
        include: [{
          model:  Post,
          attributes:  [ 'id', 'title', 'content', 'created_at']
          },
      {
        model:  Comment,
        attributes:  ['id', 'comment_text', 'created_at'],
        include:  {
          model:  Post,
          attributes: ['title']
        }
      },
      {
        model:  Post,
        attributes:  ['title'],
      }  
    ]
  })
      
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user was found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });


// POST /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(dbUserData => {
          req.session.save(()  =>  {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.logIn = true;

            res.json(dbUserData);
          });
        })
        .catch(err =>  {
          console.log(err);
          res.status(500).json(err);
        })

    });

    router.post("/login", (req, res) => {
      User.findOne({
        where: {
          username: req.body.username
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user account was found!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400).json({ message: 'Not the correct password!' });
          return;
        }
    
        req.session.save(() => {
          //declare session variables
          req.session.userId = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
      
          res.json({ user: dbUserData, message: 'You are logged in!' });
        });
      });
    });

    //User logout
    
    router.post('/logout', (req, res) => {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
    });


    // DELETE /api/users/1
    router.delete("/user/:id", (req, res) => {
      User.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user was found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });



module.exports = router;