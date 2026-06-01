# 就活 Agent 🎯

就活の日程・進捗管理をAIがサポートするWebアプリです。チャットで話しかけるだけで、面接・ES締切・説明会などの予定を自動で登録・管理できます。

**デモ**: [shukatsu-agent-nine.vercel.app](https://shukatsu-agent-nine.vercel.app)

---

## 機能

- 💬 **チャットで日程登録** — 「明日15時にトヨタの面接がある」と話しかけるだけ。複数の予定も一度に登録可能
- 📅 **カレンダービュー** — 月単位で予定を一覧表示。予定をクリックすると詳細が見られる
- 📊 **進捗ボード** — 企業ごとにカードを作り、選考ステージをドラッグで管理（気になる・説明会 → OB・OG訪問 → ES提出 → Webテスト → GD → 一次面接 → 二次面接 → 最終面接 → 内定）
- 📝 **メモ機能** — 企業ごとにメモを管理。URLは自動でクリック可能なリンクに変換
- 🔔 **Google Calendar 連携** — 予定を自動でカレンダーに追加、リマインダーも設定
- 🔄 **トークン自動更新** — Google Calendar のアクセストークンを45分ごとに自動更新

---

## 使い方

### 1. Groq API キーを取得
[console.groq.com/keys](https://console.groq.com/keys) で無料で取得できます。

### 2. 設定画面で入力
右上の ⚙️ 設定から Groq API キーを入力して保存。

### 3. Google Calendar 連携（任意）
設定画面の「Google アカウントで連携する」ボタンをクリックして認証するだけ。一度認証すればトークンは自動更新されます。

### 4. チャットで話しかける
```
「明日15時にトヨタの面接がある」
「ソニーのES締め切りは来週金曜」
「今週の予定を見せて」
「メルカリの面接を完了にして」
```

### 5. 進捗を管理する
進捗ボードで企業を追加し、選考の進み具合に合わせてカードをドラッグ。企業カードをクリックすると、その企業専用のメモが開きます。

---

## 技術スタック

- フロントエンド: HTML / CSS / JavaScript（単一ファイル）
- AI: [Groq API](https://groq.com)（llama-3.3-70b-versatile）
- カレンダー: Google Calendar API
- バックエンド: Vercel Serverless Functions（トークン更新用）
- ホスティング: Vercel

---

## 自分でデプロイする

1. このリポジトリをフォーク
2. [Vercel](https://vercel.com) でインポートしてデプロイ
3. Vercel の環境変数に以下を設定:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `REDIRECT_URI`（例: `https://your-app.vercel.app/api/callback`）
4. Google Cloud Console で OAuth クライアントを作成し、リダイレクト URI を登録
5. デプロイ完了後、設定画面で Groq API キーを入力

---

## ファイル構成

```
shukatsu-agent.html      メインアプリ（フロントエンド全部）
api/refresh-token.js     アクセストークンの自動更新
api/callback.js          Google OAuth コールバック処理
vercel.json              Vercel 設定
```

---

## 注意事項

- API キーやトークンはブラウザの localStorage にのみ保存されます
- データ（予定・メモ・企業）はブラウザの localStorage に保存されるため、ブラウザのキャッシュを消すとデータが消えます
- Google Calendar に登録された予定はクラウドに残るため、実質的なバックアップになります
- 友達と共有する場合、各自で Groq API キーを取得する必要がありますdar のアクセストークンは45分ごとに自動更新されます
データ（予定・メモ）はブラウザの localStorage に保存されるため、ブラウザのキャッシュを消すとデータが消えます
