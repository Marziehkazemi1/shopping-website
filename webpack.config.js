const path = require("path");

module.export = {
    entry : "babel.js" ,
    output : {
        path : path.resolve(__dirname ),
        filename : "bundle.js",
    },

    module : {
        rules : [
            {
                test : /\.m?js$/,
                exclude : /node-modules/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"],
                    },
                },
            },

            {
                test: /\.css$/,
                use : ["style-loader" , "css-loader"],

            },
        ],

    },

    devServer : {
        static : {
            directory : path.join(__dirname),
            },
            compress : true,
            port: 9000,
            open : true,
        },

};