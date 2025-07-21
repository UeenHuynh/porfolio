# Cập nhật GitHub Links và Project Information

## Các GitHub links cần thay thế trong index.html:

### 1. DeepGPT-DILI Project
**Hiện tại:** `https://github.com/username/DILI-2024`
**Cần thay thế bằng:** `https://github.com/[YOUR_GITHUB_USERNAME]/[ACTUAL_REPO_NAME]`

### 2. CRISPRON Project  
**Hiện tại:** `https://github.com/username/CRISPRON`
**Cần thay thế bằng:** `https://github.com/[YOUR_GITHUB_USERNAME]/[ACTUAL_REPO_NAME]`

### 3. Energy Gel Project
**Hiện tại:** `https://github.com/username/energy-gel-athletes`
**Cần thay thế bằng:** `https://github.com/[YOUR_GITHUB_USERNAME]/[ACTUAL_REPO_NAME]`

### 4. Cardiovascular Disease Prediction
**Hiện tại:** `https://github.com/username/cardiovascular-prediction`
**Cần thay thế bằng:** `https://github.com/[YOUR_GITHUB_USERNAME]/[ACTUAL_REPO_NAME]`

### 5. Microbial Genome Analysis
**Hiện tại:** `https://github.com/username/microbial-genome-analysis`
**Cần thay thế bằng:** `https://github.com/[YOUR_GITHUB_USERNAME]/[ACTUAL_REPO_NAME]`

## Thông tin cần cập nhật cho từng project:

### DeepGPT-DILI
- **Performance metrics**: AUC: 0.9208 (đã có - cần xác nhận)
- **Technologies**: Python, Deep Learning, NLP, GCN (đã có)
- **Cần thêm**: 
  - Link to paper/documentation
  - Dataset information
  - Model architecture details

### CRISPRON
- **Focus**: Gene Editing (đã có)
- **Technologies**: Python, Machine Learning, CRISPR, Bioinformatics (đã có)
- **Cần thêm**:
  - Accuracy metrics
  - Supported CRISPR systems
  - Usage examples

### Energy Gel Project
- **Technologies**: Food Science, Nutrition, Product Development, Research (đã có)
- **Cần thêm**:
  - Research findings
  - Product specifications
  - Test results with athletes

### Cardiovascular Disease Prediction
- **Method**: Ensemble Learning (đã có)
- **Technologies**: Python, Ensemble Learning, Healthcare AI, Stacking (đã có)
- **Cần thêm**:
  - Accuracy metrics
  - Dataset size
  - Model performance comparison

### Microbial Genome Analysis
- **Focus**: Food Safety (đã có)
- **Technologies**: Bioinformatics, DNA Sequencing, Python, Genomics (đã có)
- **Cần thêm**:
  - Number of genomes analyzed
  - Pipeline efficiency
  - Specific applications

## Script để tự động thay thế (sau khi có thông tin):

```bash
# Thay thế GitHub username
sed -i 's/username/YOUR_ACTUAL_USERNAME/g' index.html

# Hoặc thay thế từng link cụ thể
sed -i 's|https://github.com/username/DILI-2024|https://github.com/YOUR_USERNAME/ACTUAL_REPO|g' index.html
```

## Checklist cập nhật:

### Trước khi cập nhật:
- [ ] Xác định GitHub username chính xác
- [ ] Kiểm tra tên repositories thực tế
- [ ] Đảm bảo repositories là public (nếu muốn share)
- [ ] Chuẩn bị README.md cho mỗi repository

### Sau khi cập nhật:
- [ ] Test tất cả links
- [ ] Kiểm tra repositories có accessible
- [ ] Cập nhật project descriptions nếu cần
- [ ] Thêm documentation links nếu có

## Gợi ý tổ chức GitHub repositories:

### Repository structure:
```
your-username/
├── DeepGPT-DILI/
│   ├── README.md
│   ├── src/
│   ├── data/
│   ├── models/
│   └── docs/
├── CRISPRON/
│   ├── README.md
│   ├── src/
│   ├── examples/
│   └── docs/
└── ...
```

### README.md template cho mỗi project:
```markdown
# Project Name

## Description
Brief description of the project

## Features
- Key feature 1
- Key feature 2

## Installation
```bash
pip install -r requirements.txt
```

## Usage
```python
# Example usage
```

## Results
- Performance metrics
- Key findings

## Citation
If applicable

## License
MIT License
```

## Lưu ý quan trọng:
1. Đảm bảo code trong repositories có chất lượng tốt
2. Thêm proper documentation
3. Include requirements.txt hoặc environment.yml
4. Thêm license file
5. Viết README.md chi tiết và professional