const express = require("express");
const Account = require("../models/account");
const router = new express.Router();

router.post("/accounts", async (req, res) => {
    const user = new User(req.body);
    try {
       
        await user.save();
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/accounts/login", async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)

        res.send(user)
    } catch (err) {
        res.status(400).send()
    }
})



router.get("/accounts", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/accounts/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/accounts/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "role", "phone", "password"];

    const isValidOperation = updates.every(update =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }
    try {
        const user = await User.findById(req.params.id);

        updates.forEach(update => (user[update] = req.body[update]));

        await user.save();

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
