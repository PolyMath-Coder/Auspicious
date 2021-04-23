const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newBio = new Schema ({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String, 
        required: true
    },

    age: {
        type: Number,
        required: true
    }
});

module.exports = Bios = new mongoose.model('Bios', newBio)
