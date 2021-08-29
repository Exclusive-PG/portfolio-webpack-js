const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevMode = process.env.NODE_ENV === "development";
console.log(`isDEV: ${isDevMode}`);



module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
  },

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".scss",".css"],
    alias: {
      "@scripts": path.resolve(__dirname, "src/scripts"),
      "@styles" : path.resolve(__dirname,"src/style")  
    },
  },

  devServer: {
    port: 8000,
    watchContentBase: true,
     hot: isDevMode,
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "PortFolio - Dmitry Ilchenko",
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDevMode,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },

      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],

  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: isDevMode,
      //         reloadAll: true,
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },

      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?name=images/[name].[ext]",
      },
    {
      test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              // All default supported tags and attributes
              '...',
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src',
              },
            ]
          }
        }
      },

      {
        test:/\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevMode,
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
