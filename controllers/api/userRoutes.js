const router = require('express').Router();
const { User } = require('../../models');

// post route to create a new user 
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// post route to verify users login information
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Password criteria check
        if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.render('login', {
                errorMessage: 'Password must be at least 8 characters long and contain 1 special character.',
            });
        }

        const userData = await User.create({
            email,
            password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.redirect('/profile'); // Redirect to the profile page on successful signup
        });
    } catch (err) {
        // Display error message on the login page
        res.render('login', { errorMessage: 'Error creating user. Please try again.' });
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
