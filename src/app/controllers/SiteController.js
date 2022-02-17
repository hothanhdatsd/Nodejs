const e = require("express");
const res = require("express/lib/response");
const Course = require("../Model/Course");
const { mutipleMongooseToObject } = require("../../util/mongoese");

class siteController {
    // GET site
    index(req, res, next) {
            Course.find({})
                .then(courses => {

                    res.render('home', { courses: mutipleMongooseToObject(courses) });
                })
                .catch(next);
        }
        // GET /search
    search(req, res) {
        res.send('SEARCH');
    }
}
module.exports = new siteController();