const res = require("express/lib/response");
const User = require("../Model/User");
const bcrypt = require('bcryptjs');
const { mongoseToObject, mutipleMongooseToObject } = require("../../util/mongoese");

class UserController {
    index(req, res, next) {
        // User.find({})
        //     .then(courses => res.render('me/me-course', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))

        // .catch(next);


        // const user = User.findById(req.params.id);
        // res.json(user);
    }

    signup(req, res, next) {
        res.render('users/create');

    }
    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    signin(req, res, next) {
        res.render('users/signin');
    }
    validate(req, res, next) {
        User.findById(req.params.id)
            .then(() => res.redirect('/'))
            .catch(() => res.send('err'));
    }
}


module.exports = new UserController();