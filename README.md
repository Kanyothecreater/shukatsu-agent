# 🎯 Shukatsu Agent

AI-powered job hunting management platform for Japanese recruiting.

就活 Agent は、AI を活用して就職活動のスケジュール管理・選考管理・企業情報管理を一元化する Web アプリです。

---

## Demo

🔗 https://shukatsu-agent-nine.vercel.app

---

## Features

### 💬 AI Chat Registration

自然言語から予定を自動登録

例：

```text
明日15時にKPMGの一次面接がある
ソニーのES締切は来週金曜日
```

AI が以下を自動抽出：

- 企業名
- 日時
- イベント種別
- リマインダー

---

### 🏠 Dashboard

現在の就活状況を表示

- 今日の予定
- 今週の予定
- 選考中企業数
- 直近の締切

---

### 📅 Calendar

月表示カレンダー

管理可能：

- 面接
- ES締切
- 説明会
- Webテスト

---

### 📊 Recruiting Pipeline

Kanban 形式の選考管理

```text
気になる
↓
説明会
↓
OB・OG訪問
↓
ES提出
↓
Webテスト
↓
GD
↓
一次面接
↓
二次面接
↓
最終面接
↓
内定
```

---

### 📝 Company Notes

企業ごとのメモ管理

- 企業研究
- 志望動機
- 面接質問
- OB訪問記録

---

### 🔑 MyPage Manager

企業ごとの

- URL
- Login ID
- Memo

を保存

AI によるメール解析にも対応

---

### 🔍 Global Search

横断検索

- 企業
- メモ
- 予定

---

### ☁️ Cloud Sync

クラウド同期対応

同期可能：

- 予定
- メモ
- 企業情報
- 選考状況

---

### 💾 Backup / Restore

JSON Export / Import

---

### 📅 Google Calendar Integration

Google Calendar 自動連携

- イベント作成
- リマインダー設定
- トークン自動更新

---

## Tech Stack

| Category | Technology |
|-----------|-----------|
| Frontend | HTML / CSS / Vanilla JavaScript |
| AI | Groq API (Llama 3.3 70B) |
| Calendar | Google Calendar API |
| Auth | Google OAuth 2.0 |
| Backend | Vercel Serverless Functions |
| Hosting | Vercel |

---

## Self Hosting

### 1. Clone Repository

```bash
git clone https://github.com/yourname/shukatsu-agent.git
```

### 2. Deploy to Vercel

Import project into Vercel.

### 3. Configure Environment Variables

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=
```

### 4. Configure Google OAuth

Register Redirect URI:

```text
https://your-app.vercel.app/api/callback
```

### 5. Launch

Open application and enter your Groq API Key.

---

## Project Structure

```text
shukatsu-agent.html

api/
├── callback.js
├── refresh-token.js
├── sync.js

vercel.json
```

---

# 🇨🇳 中文说明

Shukatsu Agent 是一个面向日本求职（新卒就活）的 AI 管理平台。

支持：

- AI 自动录入面试与 ES 截止日期
- 企业进度看板管理
- 企业研究笔记
- MyPage 登录信息管理
- Google Calendar 同步
- 云同步与数据备份

项目目标是将原本分散在：

- Google Calendar
- Notion
- Excel
- 备忘录
- 企业 MyPage

中的信息统一到一个平台中进行管理。

---

## License

MIT License
