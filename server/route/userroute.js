require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/model');
const verifyToken = require('../config/verifyJWT');
const router = express.Router();

router.post('/register', async (req, res, next) => {
    try {
        const olduser = await User.findOne({ email: req.body.email });
        if (olduser) {
            return res.status(409).send({
                success: false,
                message: 'User Already Exist'
            })
        }

        const hash = await bcrypt.hash(req.body.password, 10);
        const newuser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        const createduser = await newuser.save();
        if (createduser) {
            res.status(200).send({
                success: true,
                message: 'New User Created successfully',
                user: {
                    id: createduser._id,
                    name: createduser.name,
                    email: createduser.email
                }
            })
        }
        else {
            res.status(422).send({
                success: false,
                message: 'Could not create a new user, please check the requirement'
            })
        }

    } catch (error) {
        next(error);
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                const payload = {
                    id : user._id,
                    name : user.name,
                }
                const jwtToken = jwt.sign(payload, process.env.JWTKEY,{
                    expiresIn : '2h'
                });
                res.status(200).send({
                    success : true,
                    token : 'Bearer ' + jwtToken,
                    id : user._id,
                    name : user.name
                })
            }
            else{
                res.status(401).send({
                    success: false,
                    message: 'Unauthorized, Please signUp if you are a new user'
                })
            }
        }
        else {
                res.status(404).send({
                success: false,
                message: 'User Not Found, Please signUp if you are a new user'
            })
        }
    } catch (error) {
        next(error.message);
    }
})

router.get('/verifyjwt', verifyToken, (req, res, next) => {
    const { id, name} = req.user;
    res.status(200).json({
      success: true,
      message: 'Given Token is verified',
      user: {
        id,
        name,
      },
    });
  });


module.exports = router;