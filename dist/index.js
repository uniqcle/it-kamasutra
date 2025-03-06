"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send("ОК!");
    }
    else {
        res.send("Hello Home page!!!");
    }
});
app.get("/users", (req, res) => {
    res.send("Hello users!!!!");
});
app.post("/users", (req, res) => {
    res.send("We created users!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
