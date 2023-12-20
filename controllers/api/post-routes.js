const router = require('express').Router();
const { Post } = require('../../models');


// Create a new Blog Post
router.post('/posts', async (req, res) => {
    try {
        Post.create({
            ...req.body,
            userId: req.session.currentUser.userId,
        });
        res.status(200).redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err.message);
    }
});


// Update a Blog Post by its `id` 
router.put('/posts/:id', async (req, res) => {
    try {
        const event = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a Blog Post by its `id` 
router.delete('/posts/:id', async (req, res) => {

    try {
        const post = await Post.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
