import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  {
    id: 'education',
    companyName: 'Education',
    positions: [
      {
        id: '1',
        title: 'Sree Buddha College of Engineering, Pattoor, Alappuzha',
        employmentPeriod: {
          start: '08.2023',
        },
        icon: 'education',
        description: `- Currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning.
- Won 1st Place at **Matrix Coding Competition 2026** - Organized by **IEEE SB SBCE**.`,
        skills: [
          'Python',
          'Deep Learning',
          'Machine Learning',
          'Explainable AI',
          'Software Engineering',
        ],
        isCurrentPosition: true,
        isExpanded: true,
      },
    ],
  },
  {
    id: 'Volunteer',
    companyName: 'Volunteer',
    positions: [
      {
        id: '1',
        title: 'IEEE SB SBCE Webmaster',
        employmentPeriod: {
          start: '04.2026',
        },
        icon: 'business',
        description: `- Developed and manages the official website of IEEE SB SBCE.
-Developed official IEEE SB SBCE **[Website](https://www.ieeesbsbce.xyz/)**.`,

        skills: ['Next Js', 'Tauri', 'Bun', 'Tailwind CSS'],
        isCurrentPosition: true,
        isExpanded: true,
      },
      {
        id: '2',
        title: 'Organizing Team Member of OSQ',
        employmentPeriod: {
          start: '02.2026',
          end: '04.2026',
        },
        icon: 'education',
        description: `- Organized Open Source Quest (OSQ) a  month-long open-source contribution program designed to help students gain real-world experience with professional software development workflows.
- Handled entire technical and  development of the OSQ program including website development, Dashboard Development, ID Card verifier and Git tracker `,
        skills: ['Next Js', 'Tauri', 'Bun', 'Tailwind CSS'],
        isCurrentPosition: false,
        isExpanded: false,
      },
    ],
  },
];
