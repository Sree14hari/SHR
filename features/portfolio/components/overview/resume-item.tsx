import { DownloadIcon, FileUser } from 'lucide-react';

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from '@/components/cheffolio/intro-item';
import { buttonVariants } from '@/components/ui/button';
import { USER } from '@/features/portfolio/data/user';

export function ResumeItem() {
  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <FileUser />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={USER.resume}
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <a
          href={USER.resume}
          download="resume_shr.pdf"
          aria-label="Download resume"
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon-xs',
            className: 'text-muted-foreground hover:text-foreground',
          })}
        >
          <DownloadIcon />
        </a>
      </div>
    </IntroItem>
  );
}
