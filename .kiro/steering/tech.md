# Technology Stack

## Core Technology
- **MCP (Model Context Protocol)**: Primary framework for AI tool integration
- **uvx**: Python package runner for MCP server execution
- **JSON**: Configuration format for server definitions

## MCP Servers & Services
- **Filesystem**: Local file system operations
- **Brave Search**: Web search API integration
- **GitHub**: Repository and code access
- **SQLite/PostgreSQL**: Database connectivity
- **AWS Documentation**: Cloud service documentation
- **Fetch**: Web content retrieval
- **ArXiv/PubMed/Semantic Scholar**: Academic paper access
- **Context7**: AI context management
- **Sequential Thinking/Reasoning**: Advanced AI reasoning tools

## Configuration Management
- Configuration stored in `.kiro/settings/mcp.json`
- Environment variables for API keys and sensitive data
- Auto-approval settings for trusted operations
- Server enable/disable controls

## Common Commands
```bash
# No specific build commands - configuration-based project
# Servers are managed through uvx automatically

# To test MCP server connectivity:
# Check server status through Kiro MCP panel

# To update API keys:
# Edit .kiro/settings/mcp.json and replace placeholder values
```

## Dependencies
- **uv/uvx**: Required for running MCP servers
- **API Keys**: Brave Search, GitHub Personal Access Token, Context7 (optional)
- **Database connections**: For PostgreSQL server (when enabled)

## Environment Setup
- API keys must be configured before server activation
- Some servers work without API keys (ArXiv, PubMed, Semantic Scholar)
- Servers reconnect automatically on configuration changes