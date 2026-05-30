就活 Agent 🎯
就活の日程管理をAIがサポートするWebアプリです。チャットで話しかけるだけで、面接・ES締切・説明会などの予定を自動で登録・管理できます。
デモ: shukatsu-agent-nine.vercel.app

機能

💬 チャットで日程登録 — 「明日15時にトヨタの面接がある」と話しかけるだけ
📅 カレンダービュー — 月単位で予定を一覧表示
📝 メモ機能 — 会社ごとにメモを管理
🔔 Google Calendar 連携 — 予定を自動でカレンダーに追加、リマインダーも設定
🔄 トークン自動更新 — Google Calendar のアクセストークンを自動で更新


使い方
1. Groq API キーを取得
console.groq.com/keys で無料で取得できます。
2. Google Calendar 連携（任意）
OAuth Playground で以下のスコープを選択してトークンを取得:
https://www.googleapis.com/auth/calendar.events
3. 設定画面で入力
右上の ⚙️ 設定から API キーと各トークンを入力して保存。
4. チャットで話しかける
「明日15時にトヨタの面接がある」
「ソニーのES締め切りは来週金曜」
「今週の予定を見せて」
「メルカリの面接を完了にして」

技術スタック

フロントエンド: HTML / CSS / JavaScript（単一ファイル）
AI: Groq API（llama-3.3-70b-versatile）
カレンダー: Google Calendar API
ホスティング: Vercel


自分でデプロイする

このリポジトリをフォーク
Vercel でインポートしてデプロイ
Vercel の環境変数に以下を設定:

GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET


デプロイ完了後、設定画面で Groq API キーを入力


注意事項

API キーはブラウザの localStorage にのみ保存されます
Google Calendar のアクセストークンは45分ごとに自動更新されます
データ（予定・メモ）はブラウザの localStorage に保存されるため、ブラウザのキャッシュを消すとデータが消えます
