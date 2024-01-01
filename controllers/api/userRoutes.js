const router = require('express').Router();
const { User } = require('../../models');

// post route to create a new user 
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            // Handle case where the email is already registered
            res.render('signup', { errorMessage: 'Email is already registered. Please use a different email.' });
            return;
        }
        const userData = await User.create({
            name,
            email,
            password,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            // res.json({ user: userData, message: 'You are now logged in!' });
            res.redirect('/homepage');
        });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.render('login', { errorMessage: 'Email is already registered. Please use a different email.' });
        } else if (err.name === 'SequelizeValidationError') {
            // Handle other validation errors
            const validationErrors = err.errors.map(error => error.message);
            res.render('signup', { errorMessage: validationErrors.join(', ') });
        } else {
            console.error(err);
            res.render('signup', { errorMessage: 'Error creating user. Please try again.' });
        }
    }
});

// post route to verify users login information
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.redirect('/homepage');
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// post route to logout a user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
