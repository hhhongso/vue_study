var path = require('path')
var webpack = require('webpack')

module.exports = {
  //엔트리에 정의된 파일 내용에 따라 애플리케이션의 구성 요소 및 파일들이 웹팩으로 번들링(빌드) 된다. 
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  //웹팩으로 앱 파일 빌드(변환) 시, html, css, png 등의 파일을 자바스크립드로 변환해주는 로더 지정. (css-loader, vue-loader, ...)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  //웹팩으로 빌드 시 뷰 라이브러리의 어떤 유형을 선택할 지 지정. vue.esm.js: 최신 웹팩 버전과 사용할 수 있는 full버전 라이브러리. (default: vue.runtime.esm.js)
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  //웹팩으로 빌드한 파일 크기가 250KB 이상일 시 경고메세지를 띄움(hints: true 일 때)
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

//배포 시 옵션 
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
