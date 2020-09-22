import express from 'express';

const Web = express.Router();

Web.get([
  '/', '/#/courses', '/#/students/'
], (req, res) => res.render('index'))

export default Web;