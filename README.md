# 🚀 Uyen Huynh Khoi Minh - Portfolio & MCP Configuration

> **Biotechnology Student & AI Enthusiast** - Portfolio website với tích hợp MCP (Model Context Protocol) tools

## 📋 Tổng quan

Dự án này bao gồm:

1. **🌐 Personal Portfolio** - Website portfolio chính cho Uyen Huynh Khoi Minh (index.html)
2. **🔧 MCP Servers Configuration** - Cấu hình hoàn chỉnh cho các MCP servers (mcp-demo.html)
3. **📚 Documentation & Guides** - Hướng dẫn deployment và customization

### MCP Servers được cấu hình giúp AI assistant có thể:

- 🌐 **Fetch web content** (Web Content Retrieval) - **ĐÃ KÍCH HOẠT**
- 🗺️ **Tìm kiếm địa điểm** (Google Maps)
- 💾 **Truy cập GitHub** và phân tích code
- 💬 **Tích hợp Slack** cho team collaboration
- 🎨 **Tạo hình ảnh AI** (EverArt)
- ☁️ **Tra cứu AWS Knowledge Base**
- 📚 **Nghiên cứu khoa học** (ArXiv, PubMed, Semantic Scholar)
- 🧠 **AI reasoning** và sequential thinking

## 🎯 Tính năng chính

### 🔧 Servers đã cấu hình:

| Server | Mô tả | Trạng thái | API Key cần thiết |
|--------|-------|-----------|-------------------|
| **Fetch** | Web content retrieval | ✅ **ENABLED & CONFIGURED** | ❌ **KHÔNG CẦN** |
| **Google Maps** | Tìm kiếm địa điểm | ⏸️ Disabled | ✅ |
| **GitHub** | Truy cập repository | ⏸️ Disabled | ✅ |
| **Slack** | Team collaboration | ⏸️ Disabled | ✅ |
| **EverArt** | Tạo hình ảnh AI | ⏸️ Disabled | ✅ |
| **AWS Knowledge Base** | Tra cứu AWS docs | ⏸️ Disabled | ✅ |

## 🚀 Cài đặt nhanh

### 1. Cài đặt dependencies

```bash
# Cài đặt uv và uvx (Python package manager)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Hoặc dùng pip
pip install uv

# Servers sẽ tự động được tải về khi khởi động lần đầu
# Fetch server sử dụng: mcp-server-fetch
```

### 2. Clone project

```bash
git clone <repository-url>
cd mcp-servers-config
```

### 3. Cấu hình API Keys

Mở file `.kiro/settings/mcp.json` và thay thế các placeholder:

```json
{
  "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN_HERE",
  "GOOGLE_MAPS_API_KEY": "YOUR_GOOGLE_MAPS_API_KEY_HERE",
  "SLACK_BOT_TOKEN": "YOUR_SLACK_BOT_TOKEN_HERE"
}
```

> **✅ Fetch server đã được cấu hình và sẵn sàng sử dụng! Không cần API key.**

### 4. Khởi động

Servers sẽ tự động khởi động khi Kiro IDE được mở. Kiểm tra trạng thái trong **MCP Server panel**.

## 🔑 Hướng dẫn lấy API Keys

### GitHub Personal Access Token
1. Truy cập: https://github.com/settings/tokens
2. Tạo "Personal access token (classic)"
3. Chọn scopes: `repo`, `read:user`, `read:org`
4. Copy token (chỉ hiện 1 lần!)

### Google Maps API
1. Truy cập: https://console.cloud.google.com/
2. Tạo project mới hoặc chọn project có sẵn
3. Enable Google Maps API
4. Tạo API key từ Credentials section

### Slack Bot Token
1. Truy cập: https://api.slack.com/apps
2. Tạo new app hoặc chọn app có sẵn
3. Vào OAuth & Permissions
4. Copy Bot User OAuth Token

## 📁 Cấu trúc project

```
.
├── .kiro/
│   ├── settings/
│   │   └── mcp.json          # Cấu hình MCP servers
│   └── steering/             # Hướng dẫn AI assistant
├── assets/                   # Web assets
│   ├── css/
│   ├── js/
│   └── images/
├── API_KEYS_GUIDE.md         # Hướng dẫn chi tiết API keys
├── CUSTOMIZATION_GUIDE.md    # Hướng dẫn tùy chỉnh portfolio
├── GITHUB_LINKS_UPDATE.md    # Hướng dẫn cập nhật GitHub links
├── DEPLOYMENT_GUIDE.md       # Hướng dẫn deploy lên web
├── README.md                 # File này
├── mcp-demo.html             # Web demo chính
├── index.html                # Uyen portfolio demo
└── database.db               # SQLite database
```

## 🎮 Cách sử dụng

### Trong Kiro IDE:

1. **Mở MCP Server panel** để kiểm tra trạng thái servers
2. **Chat với AI assistant** - các tools sẽ tự động available
3. **Sử dụng commands**:
   - Tìm kiếm web: "Search for latest React updates"
   - Truy cập GitHub: "Show me popular Python repositories"
   - Tìm nghiên cứu: "Find papers about machine learning"

### Ví dụ commands:

```
# Fetch web content
"Fetch the content from https://nextjs.org/docs"

# GitHub
"Show me the README of facebook/react repository"

# Nghiên cứu khoa học
"Find recent papers about AI in healthcare"

# Database
"Query the users table in SQLite"

# Web content retrieval
"Get the HTML content from this website and extract the main text"
```

## ⚙️ Tùy chỉnh

### Tắt/Bật servers:

```json
{
  "serverName": {
    "disabled": true  // Tắt server
  }
}
```

### Auto-approve operations:

```json
{
  "autoApprove": ["operation1", "operation2"]
}
```

## 🌐 Portfolio Website & MCP Demo

### 1. 🎯 **Main Portfolio** (`index.html`) - **CHÍNH**
Website portfolio chuyên nghiệp cho Uyen Huynh Khoi Minh:
- ✅ **Biotechnology & AI Portfolio**
- ✅ **Responsive design** 
- ✅ **Professional layout**
- ✅ **Project showcases với GitHub integration**
- ✅ **Skills & Experience sections**
- ✅ **Contact form & CV download**

### 2. 🔧 **MCP Demo** (`mcp-demo.html`) - **PHỤ**
Demo tương tác cho MCP servers configuration:
- Danh sách servers và trạng thái
- Hướng dẫn sử dụng interactive
- Examples và use cases

## 📝 Hướng dẫn Customization & Deployment

### 🎨 Tùy chỉnh Portfolio
Xem [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) để hướng dẫn chi tiết:
- **Thay thế hình ảnh**: Profile và project images
- **Cập nhật thông tin**: Contact, experience, education
- **Tùy chỉnh nội dung**: About, skills, projects
- **Tạo CV file**: PDF download functionality

### 🔗 Cập nhật GitHub Links
Xem [GITHUB_LINKS_UPDATE.md](GITHUB_LINKS_UPDATE.md) để hướng dẫn chi tiết:
- **Thay thế placeholder links**: Tất cả GitHub URLs
- **Cập nhật project info**: Metrics và descriptions thực tế
- **Tổ chức repositories**: Professional structure
- **Template README.md**: Cho từng project
- **Auto-replace scripts**: Batch update commands

### 🚀 Deploy Portfolio lên Web
Xem [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) để hướng dẫn chi tiết deploy lên:

#### **Platforms được khuyến nghị:**
- 🥇 **GitHub Pages** (miễn phí, tích hợp GitHub)
- 🥈 **Netlify** (miễn phí, form handling, CDN)
- 🥉 **Vercel** (miễn phí, performance cao)
- **Firebase Hosting** (miễn phí, Google infrastructure)

#### **Quick Deploy với GitHub Pages:**
```bash
# 1. Tạo repository: your-username.github.io
# 2. Push portfolio files
git init
git add .
git commit -m "Portfolio ready for deployment"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main

# 3. Enable GitHub Pages trong Settings > Pages
# 4. Website live tại: https://username.github.io
```

#### **Chuẩn bị trước khi deploy:**
- [ ] Tất cả images đã được thêm vào `assets/images/`
- [ ] CV file đã được thêm vào `assets/files/`
- [ ] GitHub links đã được cập nhật
- [ ] Contact information đã chính xác
- [ ] Meta tags đã được tối ưu SEO

## 🔒 Bảo mật

- ✅ API keys được lưu trong environment variables
- ✅ Không hardcode sensitive data
- ✅ Auto-approve chỉ cho operations an toàn
- ✅ File system access giới hạn trong home directory

## 🐛 Troubleshooting

### Server không khởi động:
1. Kiểm tra `uvx` đã cài đặt chưa
2. Verify API keys đúng format
3. Check logs trong MCP Server panel

### API calls failed:
1. Kiểm tra API key còn valid không
2. Verify network connection
3. Check rate limits

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🚀 Portfolio Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)
- Git installed locally

### Step-by-Step Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - **Framework Preset**: Other
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
   - **Install Command**: Leave empty
   - Click "Deploy"

3. **Post-Deployment Verification**:
   - ✅ All images and assets load correctly
   - ✅ Contact form displays properly
   - ✅ Timeline animations work
   - ✅ Project filtering functions
   - ✅ Theme switching works
   - ✅ CV download link works
   - ✅ Responsive design on mobile

### Custom Domain (Optional)
- Add custom domain in Vercel dashboard
- Update DNS records as instructed by Vercel

## 📞 Hỗ trợ

- 📧 Email: support@example.com
- 💬 Discord: [Server link]
- 📖 Docs: [Documentation link]

---

**Made with ❤️ for Vietnamese developers**