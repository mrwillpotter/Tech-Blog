const router = require('express').Router();
const { Blog } = require('../../models');


// Create a new Blog Post
router.post('/', async (req, res) => {
    try {
        Blog.create({
            ...req.body,
            userId: req.session.currentUser.userId,
        });
        res.status(200).redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err.message);
    }
});


// Update a Blog by its `id` 
router.put('/:id', async (req, res) => {
    try {
        const event = await Blog.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a Blog by its `id` 
router.delete('/:id', async (req, res) => {

    try {
        const post = await Blog.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
