# Hướng dẫn sử dụng Kiro Hooks cho Portfolio

## Tổng quan về Hooks

Kiro Hooks cho phép tự động hóa các tác vụ khi có sự kiện xảy ra trong IDE. Đây là cách để cải thiện tương tác AI&ML trong portfolio của bạn.

## Các Hook hữu ích cho Portfolio Development:

### 1. Auto-update Portfolio Hook
**Trigger**: Khi save file HTML/CSS/JS
**Action**: Tự động format code và check syntax

```json
{
  "name": "Portfolio Auto-Update",
  "description": "Auto-format and validate portfolio files",
  "trigger": {
    "type": "file_save",
    "pattern": "*.{html,css,js}"
  },
  "actions": [
    {
      "type": "format_code",
      "languages": ["html", "css", "javascript"]
    },
    {
      "type": "validate_html",
      "check_accessibility": true
    }
  ]
}
```

### 2. Image Optimization Hook
**Trigger**: Khi thêm image vào assets/images/
**Action**: Tự động optimize và tạo multiple sizes

```json
{
  "name": "Image Optimizer",
  "description": "Optimize images when added to assets folder",
  "trigger": {
    "type": "file_add",
    "pattern": "assets/images/*.{jpg,jpeg,png}"
  },
  "actions": [
    {
      "type": "optimize_image",
      "quality": 85,
      "create_webp": true,
      "create_thumbnails": true
    }
  ]
}
```

### 3. Project Link Validator Hook
**Trigger**: Manual button click
**Action**: Check tất cả GitHub links trong portfolio

```json
{
  "name": "Validate Project Links",
  "description": "Check all GitHub links in portfolio",
  "trigger": {
    "type": "manual",
    "button_text": "Validate Links"
  },
  "actions": [
    {
      "type": "extract_links",
      "pattern": "github.com"
    },
    {
      "type": "validate_urls",
      "timeout": 5000
    },
    {
      "type": "generate_report",
      "format": "markdown"
    }
  ]
}
```

### 4. SEO Checker Hook
**Trigger**: Khi save index.html
**Action**: Check SEO elements

```json
{
  "name": "SEO Checker",
  "description": "Validate SEO elements in HTML",
  "trigger": {
    "type": "file_save",
    "pattern": "index.html"
  },
  "actions": [
    {
      "type": "check_meta_tags",
      "required": ["title", "description", "keywords"]
    },
    {
      "type": "check_headings",
      "validate_hierarchy": true
    },
    {
      "type": "check_alt_texts",
      "images_only": true
    }
  ]
}
```

### 5. Content Translation Hook
**Trigger**: Manual button
**Action**: Tạo phiên bản tiếng Việt của portfolio

```json
{
  "name": "Create Vietnamese Version",
  "description": "Generate Vietnamese version of portfolio",
  "trigger": {
    "type": "manual",
    "button_text": "Generate VN Version"
  },
  "actions": [
    {
      "type": "extract_text_content",
      "source": "index.html"
    },
    {
      "type": "translate_content",
      "target_language": "vi",
      "preserve_html": true
    },
    {
      "type": "create_file",
      "filename": "index-vi.html"
    }
  ]
}
```

## Cách tạo Hook trong Kiro:

### Method 1: Command Palette
1. Mở Command Palette (Ctrl/Cmd + Shift + P)
2. Tìm "Open Kiro Hook UI"
3. Click để mở Hook builder interface
4. Chọn trigger type và configure actions

### Method 2: Explorer View
1. Mở Explorer panel
2. Tìm section "Agent Hooks"
3. Click "+" để tạo hook mới
4. Configure trigger và actions

### Method 3: Manual JSON
1. Tạo file trong `.kiro/hooks/`
2. Viết JSON configuration
3. Save và hook sẽ tự động active

## Hook Templates cho Portfolio:

### Development Workflow Hook:
```json
{
  "name": "Portfolio Dev Workflow",
  "description": "Complete development workflow for portfolio updates",
  "trigger": {
    "type": "file_save",
    "pattern": "*.{html,css,js}"
  },
  "actions": [
    {
      "type": "format_code"
    },
    {
      "type": "validate_syntax"
    },
    {
      "type": "check_accessibility"
    },
    {
      "type": "optimize_performance"
    },
    {
      "type": "generate_preview"
    }
  ]
}
```

### Content Update Hook:
```json
{
  "name": "Content Updater",
  "description": "Update portfolio content from external sources",
  "trigger": {
    "type": "scheduled",
    "interval": "daily"
  },
  "actions": [
    {
      "type": "fetch_github_stats",
      "username": "your-github-username"
    },
    {
      "type": "update_project_metrics"
    },
    {
      "type": "refresh_skill_levels"
    },
    {
      "type": "commit_changes",
      "message": "Auto-update portfolio content"
    }
  ]
}
```

## Advanced Hook Features:

### 1. Conditional Actions:
```json
{
  "actions": [
    {
      "type": "conditional",
      "condition": "file_size > 1MB",
      "then": {
        "type": "compress_image"
      },
      "else": {
        "type": "skip"
      }
    }
  ]
}
```

### 2. Chain Actions:
```json
{
  "actions": [
    {
      "type": "validate_html",
      "on_success": "deploy_preview",
      "on_error": "show_errors"
    }
  ]
}
```

### 3. Environment Variables:
```json
{
  "actions": [
    {
      "type": "deploy",
      "api_key": "${NETLIFY_API_KEY}",
      "site_id": "${NETLIFY_SITE_ID}"
    }
  ]
}
```

## Debugging Hooks:

### 1. Hook Logs:
- Check `.kiro/logs/hooks.log`
- Monitor execution status
- Debug failed actions

### 2. Test Mode:
```json
{
  "name": "Test Hook",
  "test_mode": true,
  "dry_run": true
}
```

### 3. Verbose Output:
```json
{
  "actions": [
    {
      "type": "any_action",
      "verbose": true,
      "log_level": "debug"
    }
  ]
}
```

## Best Practices:

### 1. Hook Organization:
- Tạo separate hooks cho different workflows
- Use descriptive names
- Group related actions

### 2. Performance:
- Avoid heavy operations on frequent triggers
- Use conditional logic để skip unnecessary actions
- Set appropriate timeouts

### 3. Error Handling:
- Always include error handling
- Provide fallback actions
- Log errors for debugging

### 4. Security:
- Don't hardcode sensitive data
- Use environment variables
- Validate inputs

## Example Hook cho Portfolio AI Integration:

```json
{
  "name": "AI Content Enhancer",
  "description": "Use AI to enhance portfolio content",
  "trigger": {
    "type": "manual",
    "button_text": "Enhance with AI"
  },
  "actions": [
    {
      "type": "extract_project_descriptions"
    },
    {
      "type": "ai_enhance_text",
      "model": "gpt-4",
      "prompt": "Enhance this project description for a biotechnology portfolio"
    },
    {
      "type": "update_html_content"
    },
    {
      "type": "preview_changes"
    }
  ]
}
```

## Troubleshooting:

### Common Issues:
1. **Hook not triggering**: Check trigger pattern và file paths
2. **Action failing**: Check permissions và dependencies
3. **Slow execution**: Optimize actions và add timeouts
4. **Memory issues**: Limit concurrent actions

### Debug Commands:
```bash
# Check hook status
kiro hooks list

# Test hook manually
kiro hooks test "hook-name"

# View hook logs
kiro hooks logs "hook-name"
```

---

## Quick Setup cho Portfolio:

1. **Tạo basic development hook**:
   - File save trigger
   - Auto-format và validate

2. **Tạo deployment hook**:
   - Manual trigger
   - Build và deploy to GitHub Pages

3. **Tạo content update hook**:
   - Scheduled trigger
   - Update GitHub stats và project info

4. **Test tất cả hooks**:
   - Run trong test mode
   - Check logs for errors
   - Adjust configuration nếu cần