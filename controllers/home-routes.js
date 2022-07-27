const router = require("express").Router();
const { review, reviews } = require('../models');

router.get('/', (req, res) => {
    res.send("in home routes")
})

// GET all reviews for homepage
router.get('/', async (req, res) => {
    try {
      const dbBeerData = await Gallery.findAll({
        include: [
          {
            model: review,
            attributes: ['filename', 'description']
          }
        ]
      });
  
      const reviews = dbBeerData.map(review =>
        reviews.get({ plain: true })
      );
      // renders homepage if logged in
      res.render('homepage', {
        reviews,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one review
  router.get('/review/:id', async (req, res) => {
    try {
      const dbBeerData = await review.findByPk(req.params.id, {
        include: [
          {
            model: review,
            attributes: [
              'id',
              'review_int',
            ]
          }
        ]
      });

      const gallery = dbGalleryData.get({ plain: true });
      // TODO: Add a comment describing how we pass the session to the gallery view.
      // renders gallery if logged in
      res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one review
  router.get('/review/:id', async (req, res) => {
    try {
      const dbBeerData = await review.findByPk(req.params.id);
  
      const painting = dbPaiData.get({ plain: true });
      // TODO: Add a comment describing how we pass the session to the painting view.
      //
      res.render('review', { review, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Login route
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });    



module.exports = router