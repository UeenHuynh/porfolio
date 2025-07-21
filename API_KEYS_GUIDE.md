# Hướng dẫn lấy API Keys cho MCP Servers

## ✅ **TRẠNG THÁI**: Fetch Server đã được cấu hình!

**Fetch server đã được ENABLED và CONFIGURED** và sẵn sàng sử dụng. Server này không cần API key và có thể fetch nội dung web ngay lập tức!

## 🔑 API Keys cần thiết:

### 1. **Fetch Server** ✅ **ĐÃ CẤU HÌNH & SẴN SÀNG**
- API Key: ❌ **KHÔNG CẦN**
- **Miễn phí**: Hoàn toàn miễn phí
- **Trạng thái**: ✅ ENABLED & CONFIGURED - Sẵn sàng sử dụng!
- **Tính năng**: Fetch web content, retrieve HTML, extract text

### 2. **GitHub Personal Access Token**
- Truy cập: https://github.com/settings/tokens
- Tạo "Personal access token (classic)"
- Chọn scopes: `repo`, `read:user`, `read:org`
- Copy token (chỉ hiện 1 lần!)

### 3. **Google Maps API**
- Truy cập: https://console.cloud.google.com/
- Tạo project mới hoặc chọn project có sẵn
- Enable Google Maps API
- Tạo API key từ Credentials section

### 4. **Slack Bot Token**
- Truy cập: https://api.slack.com/apps
- Tạo new app hoặc chọn app có sẵn
- Vào OAuth & Permissions
- Copy Bot User OAuth Token

### 5. **EverArt API**
- Truy cập: https://everart.ai/
- Đăng ký tài khoản
- Lấy API key từ dashboard

### 6. **AWS Credentials**
- Truy cập: https://console.aws.amazon.com/
- Tạo IAM user với quyền Knowledge Base access
- Lấy Access Key ID và Secret Access Key

## 🛠️ Cách cập nhật:

1. Mở file `.kiro/settings/mcp.json`
2. Thay thế các placeholder:
   - `YOUR_GOOGLE_MAPS_API_KEY_HERE` → Google Maps API key
   - `YOUR_GITHUB_TOKEN_HERE` → GitHub token
   - `YOUR_SLACK_BOT_TOKEN_HERE` → Slack bot token
   - `YOUR_EVERART_API_KEY_HERE` → EverArt API key
   - `YOUR_AWS_ACCESS_KEY_HERE` → AWS Access Key ID
   - `YOUR_AWS_SECRET_KEY_HERE` → AWS Secret Access Key

## 📝 Lưu ý:
- Không chia sẻ API keys với ai
- Có thể tắt server nào không dùng bằng `"disabled": true`
- ArXiv, PubMed, Semantic Scholar không cần API key