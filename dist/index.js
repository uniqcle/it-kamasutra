"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
const db = {
    course: [
        { id: 1, title: "frontend" },
        { id: 2, title: "backend" },
        { id: 3, title: "devops" },
    ],
};
app.get("/", (req, res) => {
    res.sendStatus(404);
});
// get all
app.get("/courses", (req, res) => {
    let foundedCoursesQuery = db.course;
    if (req.query.title) {
        foundedCoursesQuery = foundedCoursesQuery.filter((c) => c.title.indexOf(req.query.title) > -1);
    }
    res.json(foundedCoursesQuery);
});
// get id
app.get("/courses/:id", (req, res) => {
    const foundCourse = db.course.find((c) => c.id == +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourse);
});
//create
app.post("/courses", (req, res) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    const createdCourse = {
        id: +new Date(),
        title: req.body.title,
    };
    db.course.push(createdCourse);
    res.status(201).json(createdCourse);
});
// put id
app.put("/courses/:id", (req, res) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    const foundCourse = db.course.find((c) => c.id == +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    foundCourse.title = req.body.title;
    res.json(foundCourse);
});
// delete id
app.delete("/courses/:id", (req, res) => {
    db.course = db.course.filter((c) => c.id == +req.params.id);
    res.status(204);
    res.json({});
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
