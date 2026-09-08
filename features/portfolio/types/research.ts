export type Research = {
  id: string;
  title: string;
  /**
   * Research period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing research.
   */
  period: {
    start: string;
    end?: string;
  };
  link: string;
  skills: string[];
  status?: 'published' | 'under review' | 'accepted';
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};
