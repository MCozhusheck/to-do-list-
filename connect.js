const mongoose = require("mongoose");

const connect = url => mongoose.connect(url);

modules.export = connect;
