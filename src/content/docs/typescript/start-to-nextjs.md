---
title: 2026年版、TypeScript、Next.js開発をスタートするまでの学習ロードマップ
description: 0から Next.js + TypeScriptを始めるという視点に立ち、 Next.js以前に学ぶべきポイントを抑えているサイトをまとめました。
---


### はじめに

[Qiitaで多くのレビューを獲得している記事](https://qiita.com/irico/items/33744e15a4e0ca52d6bc) が5年前のものであったため、2026年の新しい情報を加味してロードマップを作成。


また、0から Next.js + TypeScriptを始めるという視点に立ち、 Next.js以前に学ぶべきポイントを抑えている無料サイトをまとめました。

### Step0. [現代の JavaScript チュートリアル](https://ja.javascript.info/) 

- **選定理由**
	- TypeScriptの前の理解として必須
	- 日本語のJavaScriptの一番丁寧なサイト。更新頻度も高い
- **どこを読むべき？**
	- JavaScriptの基礎までは必ず読む
	- その他、Webサービスでよく利用する機能をつまみましょう
		- DOM操作やクリックイベント
		- ネットワークリクエスト(Fetch)
		- ブラウザへのデータの保存（Cookie)
		- Promise, await
- JSのAPIは5年前から進化しており、以前勉強した人もWeb componentsなどを改めて触るのも面白いです。



### Step1. [Node.jsを初めて学ぶ人が覚えるべきこと](https://zenn.dev/daiyaone/articles/5da30a5b248351) + [そもそもnpmからわからない](https://zenn.dev/antez/articles/a9d9d12178b7b2)

- **選定理由**
	- NodeとnpmがNext.js&TypeScriptで必須なため
	- cliの使い方から丁寧な記事2本をピックアップ
- **どこを読むべき？** Node側の知識をざっくり理解
	- npm の使い方
	- package.json の意味
	- node_modules の概念
	- scripts（npm run devとか）
	- process.env（環境変数）
	- ES Modules（import/export）

### Step2. [サバイバルTypeScript](https://typescriptbook.jp/) などから基礎をつまむ

- **選定理由**
	- TypeScriptのバイブル的なサイトで、更新頻度も高い
	- 辞典のようになっているので、要所を検索しながら読みましょう
- **どこを読むべき？**
	- トップページの、検査の仕組み まで
	- 基本的な型の使い方
		- インターフェース / 型エイリアス、また使い分けテクニック
		- プリミティブ型
		- オプショナル型
		- readonly
	- 関数型の扱い
	- ジェネリクス（汎用型）
	- ユニオン / 交差型
	- 型推論 / strict モード

### Step3. [tsconfig.jsonの設定](https://qiita.com/crml1206/items/8fbfbecc0b40968bfc42)
- **選定理由**
	- 基本的な設定項目がまとめられている
- **どこを読むべき？**
	- ざっと目を通すだけ。
	- compilerOptionsは全ては理解しなくてもよし。
- ただ書くだけではなく、設定で品質を管理できるようにするのが重要


### まとめ

ここまで読んだらNext.js+TypeScriptの環境を始めてみましょう。

Next.js 用のロードマップを用意しているので、合わせてご覧ください。


