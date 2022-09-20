const db = require('../model/user_model.js');
const User = db.user;
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Create document
exports.reg = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: 'email is empty!'
        });

        return;
    }

    const hash_password = bcrypt.hash(req.body.password, 12)
    // Set document
    const user = new User({
        email: req.body.email,
        password: hash_password,
        name: req.body.name,
    });


    //duplicated
    const { email } = req.body;
    const email_check = await User.findOne({ email });
   
    if (user) return res.status(200).json({
        status: "user_duplicate"
    })


    User
        .save(user)
        .then(data => {
            if (!data) return res.status(200).json({
                status: "fail"
            })

            if (data) {
                let id = data.id
                const token = jwt.sign({
                    id
                }, process.env.JWT_SECRET, {
                    expireIn: '1h' //1시간
                });
                return res.status(200).json({
                    status: "ok",
                    token: token
                });
            }

            return res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create document failure.'
            });
        });

}

//탈퇴
exports.unreg = (req, res) => {


}

//https://jun-choi-4928.medium.com/node-js-express-mongodb-tutorial-signup-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-7095aece3b99