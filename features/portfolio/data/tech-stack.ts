import type { TechStack } from '../types/tech-stack';

export const TECH_STACK: TechStack[] = [
  {
    key: 'python',
    title: 'Python',
    href: 'https://www.python.org/',
    categories: ['Language'],
  },
  {
    key: 'typescript',
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    categories: ['Language'],
  },

  {
    key: 'bun',
    title: 'Bun',
    href: 'https://bun.sh/',
    categories: ['Runtime Environment'],
  },

  {
    key: 'nextjs',
    title: 'Next.js',
    href: 'https://nextjs.org/',
    categories: ['Framework'],
    theme: true,
  },

  {
    key: 'git',
    title: 'Git',
    href: 'https://git-scm.com/',
    categories: ['Version Control'],
  },

  {
    key: 'claude',
    title: 'Claude',
    href: 'https://claude.ai/',
    categories: ['Tools', 'AI'],
  },
  {
    key: 'codex',
    title: 'Codex',
    href: 'https://openai.com/codex/',
    categories: ['Tools', 'AI'],
    theme: true,
  },
  {
    key: 'copilot',
    title: 'GitHub Copilot',
    href: 'https://github.com/copilot/',
    categories: ['Tools', 'AI'],
    theme: true,
  },
  {
    key: 'cursor',
    title: 'Cursor',
    href: 'https://cursor.com/',
    categories: ['Tools', 'AI'],
    theme: true,
  },
  {
    key: 'vscode',
    title: 'VS Code',
    href: 'https://code.visualstudio.com/',
    categories: ['Tools', 'Code Editor'],
  },
];
