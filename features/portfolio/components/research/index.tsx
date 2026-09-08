import { CollapsibleList } from '@/components/cheffolio/collapsible-list';
import { DecorIcon } from '@/components/cheffolio/decor-icon';
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@/components/cheffolio/panel';
import { RESEARCH } from '@/features/portfolio/data/research';

import { ResearchItem } from './research-item';

export function Research() {
  if (RESEARCH.length === 0) {
    return null;
  }

  return (
    <Panel id="research">
      <PanelHeader>
        <PanelTitle>
          Research
          <PanelTitleSup>({RESEARCH.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="relative px-0 py-px">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="mb-px size-4" position="bottom-left" />
        <DecorIcon className="mb-px size-4" position="bottom-right" />
        <CollapsibleList
          items={RESEARCH}
          max={5}
          renderItem={(item) => <ResearchItem research={item} />}
        />
      </PanelContent>
    </Panel>
  );
}
