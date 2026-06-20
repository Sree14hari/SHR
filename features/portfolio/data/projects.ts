import { GITHUB_REPO_URL } from '@/config/site';

import type { Project } from '../types/projects';

const baseUrl = 'https://res.cloudinary.com/chef0111/image/upload';

export const PROJECTS: Project[] = [
  {
    id: 'ktuhub',
    title: 'KTU Hub',
    period: {
      start: '01.2025',
      end: '03.2025',
    },
    link: 'https://www.ktuhub.site/',
    skills: ['TypeScript', 'Vercel', 'UI/UX Design', 'SEO'],
    description: `A comprehensive platform for KTU students providing notes, question papers, academic tools, and university resources in one place.`,
    logo: 'https://png.pngtree.com/png-clipart/20191121/original/pngtree-book-icon-png-image_5143094.jpg',
    isExpanded: false,
  },
  {
    id: 'paperlab',
    title: 'PaperLab',
    period: {
      start: '08.2025',
      end: '03.2026',
    },
    link: 'https://paperlab.r3actr.work/',
    skills: [
      'Tauri',
      'Next.js',
      'TypeScript',
      'Python',
      'LaTeX',
      'Academic Tools',
      'Desktop App',
    ],
    description: `An academic writing and research platform designed to simplify the creation of professional research documents.
- Generate and edit research papers, Report, and academic document through an intuitive visual interface.
- Supports LaTeX-based workflows, enabling users to create publication-ready documents without extensive LaTeX knowledge.
- Streamlines the research writing process with AI-assisted tools, template support, and document management features.
`,
    logo: 'https://png.pngtree.com/template/20190926/ourmid/pngtree-stack-of-paper-icon-vector-logo-stationery-stacked-papers-templa-image_309805.jpg',
    isExpanded: false,
  },
];
