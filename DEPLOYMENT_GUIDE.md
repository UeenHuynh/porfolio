# Hướng dẫn Deploy Portfolio

## 🚀 Vercel (Khuyến nghị cao nhất)

**Ưu điểm:**
- Deploy cực kỳ nhanh và đơn giản
- Tự động deploy khi push code
- Performance tuyệt vời với CDN global
- SSL certificate tự động
- Custom domain miễn phí
- Analytics và monitoring

**Cách deploy:**
1. **Chuẩn bị repository:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Deploy lên Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub
   - Click "New Project"
   - Import repository của bạn
   - **Framework Preset**: Other
   - **Build Command**: Để trống
   - **Output Directory**: Để trống
   - **Install Command**: Để trống
   - Click "Deploy"

3. **Kiểm tra sau khi deploy:**
   - ✅ Tất cả hình ảnh load đúng
   - ✅ Contact form hiển thị đúng
   - ✅ Timeline animations hoạt động
   - ✅ Project filtering hoạt động
   - ✅ Theme switching hoạt động
   - ✅ Responsive design trên mobile
   - ✅ CV download link hoạt động

**Website sẽ có địa chỉ:** `https://your-project-name.vercel.app`

---

## Các platform khác:

### 1. GitHub Pages
**Ưu điểm:**
- Hoàn toàn miễn phí
- Tích hợp với GitHub
- Custom domain miễn phí
- SSL certificate tự động

**Cách deploy:**
1. Tạo repository trên GitHub với tên `your-username.github.io`
2. Upload tất cả files portfolio vào repository
3. Vào Settings > Pages
4. Chọn source: Deploy from a branch
5. Chọn branch: main
6. Website sẽ có địa chỉ: `https://your-username.github.io`

**Commands:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### 2. Netlify
**Ưu điểm:**
- Deploy tự động từ GitHub
- Form handling miễn phí
- CDN global
- Easy custom domain

**Cách deploy:**
1. Đăng ký tài khoản Netlify
2. Connect với GitHub repository
3. Chọn repository chứa portfolio
4. Deploy settings: Build command để trống, Publish directory: `/`
5. Click Deploy

### 3. Vercel
**Ưu điểm:**
- Performance cao
- Tích hợp tốt với GitHub
- Analytics miễn phí

**Cách deploy:**
1. Đăng ký Vercel
2. Import GitHub repository
3. Deploy tự động

### 4. Firebase Hosting
**Ưu điểm:**
- Google infrastructure
- SSL miễn phí
- Custom domain

**Cách deploy:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Chuẩn bị trước khi deploy:

### 1. Checklist files:
- [ ] Tất cả images đã được thêm vào `assets/images/`
- [ ] CV file đã được thêm vào `assets/files/`
- [ ] Tất cả GitHub links đã được cập nhật
- [ ] Contact form hoạt động (nếu cần backend)
- [ ] Meta tags đã được cập nhật

### 2. Tối ưu hóa:
```bash
# Compress images (nếu cần)
# Minify CSS/JS (optional cho static site)
# Check responsive design
# Test trên multiple browsers
```

### 3. SEO Setup:
- [ ] Cập nhật title tags
- [ ] Cập nhật meta descriptions
- [ ] Thêm structured data
- [ ] Tạo sitemap.xml
- [ ] Tạo robots.txt

## Files cần tạo thêm:

### 1. robots.txt (root directory):
```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

### 2. sitemap.xml (root directory):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. .gitignore:
```
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Dependencies
node_modules/
```

## Custom Domain Setup:

### 1. Mua domain (optional):
- Namecheap, GoDaddy, Google Domains
- Gợi ý: `uyenhuynh.dev`, `uyenhuynh.bio`, `uyenhuynh.me`

### 2. Cấu hình DNS:
```
Type: CNAME
Name: www
Value: your-username.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

## Contact Form Setup:

### Option 1: Netlify Forms (nếu dùng Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### Option 2: Formspree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- form fields -->
</form>
```

### Option 3: EmailJS (JavaScript only)
```javascript
// Thêm EmailJS service
emailjs.send("service_id", "template_id", templateParams)
```

## Performance Optimization:

### 1. Image Optimization:
```bash
# Sử dụng tools như:
# - TinyPNG cho compress
# - WebP format cho modern browsers
# - Lazy loading đã có trong code
```

### 2. Caching Headers (cho Netlify):
Tạo file `_headers`:
```
/*
  Cache-Control: public, max-age=31536000
/*.css
  Cache-Control: public, max-age=31536000
/*.js
  Cache-Control: public, max-age=31536000
/*.jpg
  Cache-Control: public, max-age=31536000
/*.png
  Cache-Control: public, max-age=31536000
```

## Analytics Setup:

### Google Analytics 4:
```html
<!-- Thêm vào <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Security Headers:

### Netlify _headers file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## Testing trước khi deploy:

### 1. Local testing:
```bash
# Simple HTTP server
python -m http.server 8000
# hoặc
npx serve .
```

### 2. Responsive testing:
- Chrome DevTools
- Multiple devices
- Different screen sizes

### 3. Performance testing:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Monitoring sau deploy:

### 1. Google Search Console:
- Submit sitemap
- Monitor indexing
- Check for errors

### 2. Analytics:
- Track visitor behavior
- Monitor popular pages
- Check bounce rate

### 3. Uptime monitoring:
- UptimeRobot (miễn phí)
- Pingdom
- StatusCake

## Backup Strategy:

### 1. GitHub repository (primary backup)
### 2. Local backup của tất cả files
### 3. Export analytics data định kỳ

## Domain Email Setup (optional):

### 1. Google Workspace (trả phí)
### 2. Zoho Mail (có free tier)
### 3. ProtonMail custom domain

---

## Quick Start Commands:

```bash
# 1. Prepare repository
git init
git add .
git commit -m "Portfolio ready for deployment"

# 2. Create GitHub repository
# (Làm trên GitHub web interface)

# 3. Push to GitHub
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main

# 4. Enable GitHub Pages
# (Làm trên GitHub Settings > Pages)

# 5. Wait 5-10 minutes for deployment
# Visit: https://username.github.io
```