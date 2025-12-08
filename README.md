# Arch Network Documentation - Fumadocs

This repository contains the Arch Network documentation migrated from GitBook to Fumadocs, a modern React-based documentation framework.

## 🚀 Quick Start

### Prerequisites

- Node.js v19+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Arch-Network/docs-fumadocs.git
cd docs-fumadocs

# Install dependencies
npm install

# Start development server
npm run dev
```

The documentation will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
docs-fumadocs/
├── content/
│   └── docs/                 # Documentation content (MDX files)
│       ├── getting-started/  # Getting started guides
│       ├── concepts/         # Core concepts
│       ├── guides/           # Development guides
│       ├── sdk/              # SDK documentation
│       ├── rpc/              # RPC API reference
│       └── meta.json         # Navigation structure
├── src/
│   ├── app/                  # Next.js app directory
│   ├── lib/                  # Utility functions
│   └── mdx-components.tsx    # MDX component overrides
├── public/
│   └── images/               # Static assets
└── package.json
```

## 📝 Content Migration Status

### ✅ Completed
- [x] Project setup and configuration
- [x] Main introduction page
- [x] Quick start guide
- [x] Architecture overview
- [x] Basic navigation structure
- [x] Image assets migration

### 🚧 In Progress
- [ ] Theme customization for Arch Network branding
- [ ] Additional content migration from GitBook
- [ ] Search functionality optimization
- [ ] Mobile responsiveness improvements

### 📋 Pending
- [ ] Complete migration of all GitBook content
- [ ] API reference documentation
- [ ] SDK documentation
- [ ] Program examples and guides
- [ ] System program documentation

## 🎨 Customization

### Theme Customization

The Fumadocs theme can be customized by modifying:

- `src/app/global.css` - Global styles
- `src/lib/layout.shared.tsx` - Shared layout components
- `content/docs/meta.json` - Navigation structure

### Adding New Content

1. Create MDX files in the appropriate directory under `content/docs/`
2. Update `content/docs/meta.json` to include the new pages in navigation
3. Use Fumadocs components like `<Cards>`, `<Card>`, `<Callout>`, etc.

### MDX Components Available

- `<Cards>` and `<Card>` - For creating card layouts
- `<Callout>` - For info, warning, and tip callouts
- `<Tabs>` and `<Tab>` - For tabbed content
- `<Steps>` and `<Step>` - For step-by-step guides

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Features

- **Modern React Framework**: Built with Next.js 15 and React 19
- **MDX Support**: Write documentation with JSX components
- **Type Safety**: Full TypeScript support
- **Search**: Built-in search functionality
- **Responsive Design**: Mobile-first responsive design
- **Dark Mode**: Automatic dark/light mode support

## 📚 Migration from GitBook

This documentation was migrated from the original GitBook repository. Key changes:

1. **Format**: Converted from Markdown to MDX for enhanced functionality
2. **Components**: Replaced GitBook-specific components with Fumadocs equivalents
3. **Navigation**: Restructured navigation using Fumadocs meta.json format
4. **Styling**: Updated to use Tailwind CSS and Fumadocs design system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This documentation is part of the Arch Network project and follows the same licensing terms.

## 🔗 Links

- [Arch Network Main Repository](https://github.com/Arch-Network/arch-network)
- [Original GitBook Documentation](https://github.com/Arch-Network/book)
- [Fumadocs Documentation](https://fumadocs.dev/)
- [Arch Network Website](https://arch.network)