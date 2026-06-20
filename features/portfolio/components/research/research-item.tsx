import { BoxIcon, InfinityIcon } from 'lucide-react';
import Image from 'next/image';

import { GridPattern } from '@/components/cheffolio/grid-pattern';
import { IntroItemIcon } from '@/components/cheffolio/intro-item';
import { Markdown } from '@/components/cheffolio/markdown';
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Collapsible,
  CollapsibleChevronsIcon,
} from '@/components/ui/collapsible-animated';
import { Tag } from '@/components/ui/tag';
import { Prose } from '@/components/ui/typography';
import { UTM_PARAMS } from '@/config/site';
import type { Research } from '@/features/portfolio/types/research';
import { addQueryParams } from '@/utils/url';

import { ResearchLink } from './research-link';

export function ResearchItem({
  className,
  research,
}: {
  className?: string;
  research: Research;
}) {
  const { start, end } = research.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <Collapsible className={className} defaultOpen={research.isExpanded}>
      <div className="hover:bg-muted-accent active:bg-muted-accent bg-accent/50 dark:bg-muted/20 m-2 flex items-stretch rounded-lg border transition-colors">
        {research.logo ? (
          <div className="bg-background m-1.5 mr-0 flex items-center rounded-md border">
            <Image
              src={research.logo}
              alt={research.title}
              width={32}
              height={32}
              quality={100}
              className="mx-3 flex size-8 shrink-0 select-none"
              unoptimized
              aria-hidden
            />
          </div>
        ) : (
          <div className="bg-background m-1.5 mr-0 flex items-center rounded-md border">
            <IntroItemIcon className="mx-3 size-8">
              <BoxIcon className="size-5" />
            </IntroItemIcon>
          </div>
        )}

        <div className="border-line relative flex-1 overflow-hidden border-dashed">
          <CollapsibleTrigger className="no-focus flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="z-1 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h3 className="leading-snug font-medium text-balance">
                  {research.title}
                </h3>
                {research.status && (
                  <span className="bg-muted text-muted-foreground whitespace-nowrap rounded-sm px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider">
                    {research.status}
                  </span>
                )}
              </div>

              <dl className="text-muted-foreground text-sm">
                <dt className="sr-only">Period</dt>
                <dd className="flex items-center gap-0.5">
                  <span>{start}</span>
                  {!isSinglePeriod && (
                    <>
                      <span className="font-mono">—</span>
                      {isOngoing ? (
                        <>
                          <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                          <span className="sr-only">Present</span>
                        </>
                      ) : (
                        <span>{end}</span>
                      )}
                    </>
                  )}
                </dd>
              </dl>
            </div>

            <ResearchLink href={addQueryParams(research.link, UTM_PARAMS)} />

            <div className="text-muted-foreground z-1 shrink-0 [&_svg]:size-4">
              <CollapsibleChevronsIcon duration={0.15} />
            </div>
          </CollapsibleTrigger>

          <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
            <GridPattern
              className="stroke-border absolute inset-0 size-full"
              height={25}
              width={25}
              x={12}
              y={7}
            />
          </div>
        </div>
      </div>

      <CollapsibleContent className="sm:data-[state=closed]:animate-collapsible-up sm:data-[state=open]:animate-collapsible-down overflow-hidden">
        <div className="border-line space-y-4 p-4 pt-2">
          {research.description && (
            <Prose>
              <Markdown>{research.description}</Markdown>
            </Prose>
          )}

          {research.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {research.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
