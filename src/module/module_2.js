// 値を1000倍にするモジュール
(function(mod) {
  if (typeof exports === 'Object') {
    // exportsがあればモジュール化
    module.exports = mod();
  } else {
    // 通常の読み込み
    window.module_2 = mod();
  }
})(function() {
  // モジュールの処理
  var mod = function(num1) {
    return num1 * 1000;
  };
  return mod;
});