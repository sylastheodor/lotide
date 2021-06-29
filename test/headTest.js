const head = require('../head')
const assertEqual = require('../assertEqual')

assertEqual(head(["Lighthouse"]), "Lighthouse");
assertEqual(head([]), 5);