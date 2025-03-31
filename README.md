
# vue-demo-app

Vue.js を使ったサンプルアプリケーションです。

---

## 📦 プロジェクトのセットアップ

依存パッケージをインストールします。

```bash
npm install
```

---

## 🚀 開発サーバーの起動

開発モードでアプリを起動します。

```bash
npm run serve
```

ブラウザで `http://localhost:8080` にアクセスして確認できます。

---

## 📦 本番用にビルド

最適化された本番ビルドを作成します。

```bash
npm run build
```

`dist/` フォルダに出力されます。

---

## 🧹 コードのリントと修正

ESLint によるコードのチェックと自動修正を行います。

```bash
npm run lint
```

---

## ⚙️ 設定のカスタマイズ

Vue CLI の設定をカスタマイズするには以下を参照してください：  
👉 [Configuration Reference](https://cli.vuejs.org/config/)

---

## 📁 ディレクトリ構成

以下はプロジェクトの構成です（`node_modules` や `.git` など一部を除外）。

```plaintext
.
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── logo.png
│   │   └── styles
│   ├── components
│   │   ├── layout
│   │   ├── parts
│   │   └── project
│   ├── locales
│   │   ├── en.json
│   │   └── ja.json
│   ├── main.js
│   └── pages
│       ├── Chapter1PropEmit.vue
│       ├── Chapter2LifeCycle.vue
│       └── StartPage.vue
├── structure.txt
└── vue.config.js
```

---

## 🛠️ ディレクトリ構成の出力方法（Tips）

この構造は以下のコマンドで出力しました：

```bash
tree -L 3 -I "node_modules|.git|dist" > structure.txt
```

- `-L 3`: 3階層まで表示
- `-I`: 除外するディレクトリを指定（パイプ `|` で複数指定可能）
- `> structure.txt`: 結果をファイルに保存

Markdown に貼り付けるときは以下のようにコードブロック（```` ```plaintext ````）で囲むと綺麗に表示できます。

---

お気軽にこのファイルをもとにドキュメントや構成を更新していってください 🚀
