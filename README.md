# ランク戦タクティクス アプリ版を GitHub Pages に置く手順

このフォルダの9つのファイルを GitHub に上げると、`https://ユーザー名.github.io/リポジトリ名/` というアドレスでアプリとして使えるようになります。ファイルはすべて同じ階層に置くだけで、フォルダを作る必要はありません。

## 1. GitHub のアカウントを作る
1. https://github.com を開き「Sign up」からアカウントを作る（無料）
2. ユーザー名がアプリのアドレスの一部になります（例：`mikuma.github.io`）

## 2. リポジトリ（置き場所）を作る
1. 右上の「＋」→「New repository」
2. Repository name に `rankwar` など好きな名前（英数字）を入れる
3. 「Public」を選ぶ（無料プランで GitHub Pages を使うには公開が必要です）
4. 「Create repository」

## 3. ファイルをアップロードする
1. 作ったリポジトリの画面で「uploading an existing file」（または「Add file」→「Upload files」）
2. zip を展開した9つのファイルをすべて選んで追加する
   - **パソコン**：ファイルをまとめてドラッグ＆ドロップ
   - **iPhone**：「ファイル」アプリで zip をタップして展開 → GitHub の「choose your files」から9つを選ぶ
   - **Android**：ファイル管理アプリで zip を展開 → 同じく9つを選ぶ
3. 下の「Commit changes」を押す

## 4. GitHub Pages を有効にする
1. リポジトリの「Settings」→ 左の「Pages」
2. 「Build and deployment」の Source を「Deploy from a branch」
3. Branch を「main」、フォルダを「/(root)」にして「Save」
4. 1〜2分待って画面を更新すると、上に「Your site is live at https://〜」とアドレスが出る

## 5. スマホに入れる
- **iPhone**：Safari でアドレスを開く → 共有ボタン →「ホーム画面に追加」
- **Android**：Chrome でアドレスを開く → 右上のメニュー →「アプリをインストール」

一度開いておけば、通信がなくても1人用の部分（隊員・ランク戦・個人ランク戦・チュートリアル）を遊べます。ネット対戦には通信が必要です。

## 6. 今までのデータを引き継ぐ
アプリ版は claude.ai 版とは保存場所が別です。
1. claude.ai 版のホーム →「セーブデータ」→「コピーする」
2. アプリ版のホーム →「セーブデータ」→ 貼り付けて「読み込む」

## 7. 新しい版に更新するとき
1. リポジトリの「Add file」→「Upload files」で新しい index.html を上げる（同じ名前なら上書きされる）
2. リポジトリで `sw.js` を開き、鉛筆マーク（Edit）で `const CACHE='rwt-v5.0';` の文字を変える（例：`rwt-v5.0-2`）→「Commit changes」
3. 1〜2分後、アプリを開き直すと新しい版になる

## 注意
- 公開リポジトリなので、アドレスを知っている人は誰でも遊べ、ファイルの中身も見られます。
- このゲームは『ワールドトリガー』をもとにした非公式のファン作品で、原作の用語を使っています。身内で遊ぶ範囲にとどめ、SNSなどで広く宣伝したり、アプリストアで公開・有料で配布したりはしないでください。
