# webpackでモジュール管理をしてみる
webpackでjsを一つのファイルにまとめる。jqueryもまとめる。

## ディレクトリ作成の流れ
1.npmでwebpackをインストールし、webpack.config.jsを作る。

2.webpack.config.jsにエントリーポイント（モジュールの大本となるファイル）を指定したり、アウトプットするディレクトリを指定したりする。

3.moduleディレクトリを作ってそこにモジュールを作る。ちなみにjqueryはnpmでインストールしておくだけでOK

4.ルートディレクトリで「webpack」でコンパイル。監視したい場合は「webpack -w」でOK

## ディレクトリ構成
~~~
├ package.json
├ public
│ ├ index.html
│ └ js
│    └ bundle.js
├ src
│ └ js
│    ├ app.js
│    └ modules
│       ├ module_1.js
│       └ module_2.js
└─ webpack.config.js
~~~

## demo
https://yuki-sakaguchi.github.io/webpack-temp/public/

## 参考
http://qiita.com/soarflat/items/28bf799f7e0335b68186
http://qiita.com/tatsuyankmura/items/539c56837fc3a5f258b5
http://qiita.com/civic/items/82c0184bcadc50965f91