import { GITHUB_REPO_URL } from '@/config/site';

import type { Project } from '../types/projects';

const baseUrl = 'https://res.cloudinary.com/chef0111/image/upload';

export const PROJECTS: Project[] = [
  {
    id: 'crda',
    title: 'CRDA',
    period: {
      start: '2026',
      end: 'Present',
    },
    link: 'https://github.com/Sree14hari/CRDA',
    skills: [
      'PyTorch',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI',
      'Research',
      'CoAtNet',
      'ResNet',
      'CaiT',
      'Healthcare AI',
    ],
    description: `Currently developing Cross-Reasoning Disagreement Analysis (CRDA), a novel uncertainty quantification framework for pathological voice classification.
- Combines ResNet, CoAtNet, and CaiT architectures to capture both local acoustic features and long-range temporal dependencies.
- Introduces a multi-view uncertainty scoring mechanism that measures spatial confidence, temporal instability, and decision entropy.
- Designed to improve the reliability and explainability of AI-assisted voice pathology diagnosis for clinical applications.
`,
    logo: `https://thumbs.dreamstime.com/b/explainability-ethical-ai-color-icon-vector-illustration-sign-isolated-symbol-373898034.jpg`,
    isExpanded: false,
  },

  {
    id: 'ada-xai',
    title: 'ADA-XAI: Adaptive XAI',
    period: {
      start: '08.2025',
      end: '03.2026',
    },
    link: 'https://github.com/Sree14hari/ADA-XAI-MRI.git',
    skills: ['PyTorch', 'XAI', 'Transformers', 'Deep Learning'],
    description: `An Adaptive Faithfulness-Driven Explainable AI for Brain Tumor MRI Classification.
Unlike conventional CNN-only or Transformer-only systems, ADA-XAI dynamically combines:
- Global semantic understanding from EVA-02
- Local irregular tumor morphology extraction from DCNN

The framework also introduces an Adaptive XAI mechanism that intelligently selects between:
- Grad-CAM
- CAD-GMAR (Cross Attention Gradient-Driven Multi-Head Attention Rollout)
based on real-time faithfulness evaluation.
`,
    logo: `https://t4.ftcdn.net/jpg/01/35/12/05/360_F_135120584_uEIrpluPF2vynYH9OFx1UNAd00g0nydX.jpg`,
    isExpanded: false,
  },
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
