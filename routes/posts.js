const express = require("express");

const router = express.Router();
const Post = require("../modules/Post");

/*router.get('/', (req, res) => {

    res.send('we are in posts');
});*/

router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err });

    }
});
/*
router.get('/jojobinha', (req, res) => {

    res.send('Leandro é jojobinha');
});*/
/* 
router.post("/", (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(data =>{res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    }); 
});*/

router.post('/', async (req, res) => {
    console.log(req.body.title);
    console.log(req.body.description);

    const post = new Post({
        title: req.body.title,
        description: req.body.description

    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/:postId', async (req, res) => {
    try {
        console.log(req.params);
        const post = await Post.findById(req.params.postId);

        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});

router.delete('/:postId', async (req, res) => {
    
    try {
        
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
        
    } catch (err) {

        res.json({ message: err });
    }
});


router.patch('/:postId', async (req, res) => {

    try {

        const updatePost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } }
            );
        res.json(updatePost);

    } catch (err) {

        res.json({ message: err });
    }
});


module.exports = router;