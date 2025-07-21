# Project Structure

## Root Directory
```
.
├── .kiro/                    # Kiro IDE configuration
│   ├── hooks/               # Agent hooks for automation
│   ├── settings/            # IDE and MCP settings
│   │   └── mcp.json        # MCP server configurations
│   ├── specs/               # Project specifications
│   └── steering/           # AI assistant guidance documents
├── .vscode/                 # VS Code configuration
├── assets/                  # Web assets for demo interface
│   ├── css/                # Stylesheets
│   ├── fonts/              # Font files
│   ├── images/             # Images and graphics
│   └── js/                 # JavaScript files
├── API_KEYS_GUIDE.md       # Vietnamese guide for API key setup
├── HOOKS_README.md         # Documentation for agent hooks
├── README.md               # Main project documentation (Vietnamese)
├── index.html              # Web demo interface
└── database.db            # SQLite database (when used)
```

## Key Files

### Configuration Files
- **`.kiro/settings/mcp.json`**: Main MCP server configuration
  - Defines all available MCP servers
  - Contains environment variables and API key placeholders
  - Controls server enable/disable states
  - Sets auto-approval permissions for operations

### Documentation
- **`README.md`**: Main project documentation in Vietnamese
  - Complete setup and usage guide
  - Server configuration overview
  - Examples and troubleshooting
- **`API_KEYS_GUIDE.md`**: Vietnamese language setup guide
  - Instructions for obtaining required API keys
  - Step-by-step configuration process
  - Security best practices
- **`HOOKS_README.md`**: Agent hooks documentation
  - Automation capabilities and setup
  - Hook configuration examples

### Web Interface
- **`index.html`**: Demo web interface
  - Interactive server status display
  - Usage examples and documentation
  - Visual configuration guide

### Steering Documents (`.kiro/steering/`)
- **`product.md`**: Product overview and purpose
- **`tech.md`**: Technical stack and dependencies
- **`structure.md`**: Project organization (this file)

## Configuration Patterns
- Environment variables for sensitive data (API keys, tokens)
- Placeholder values with clear naming conventions
- Disabled servers can be enabled when needed
- Auto-approval lists for trusted operations
- Consistent error logging level across all servers

## File Naming Conventions
- Configuration files use lowercase with extensions
- Documentation uses UPPERCASE for guides
- Steering files use lowercase descriptive names
- API key placeholders follow pattern: `service-api-key-here`

## Security Considerations
- API keys stored as environment variables, not hardcoded
- Demo/placeholder keys clearly marked
- Sensitive operations require explicit approval
- File system access limited to user home directory