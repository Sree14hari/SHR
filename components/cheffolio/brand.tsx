import type { Route } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface BrandPropsWithSvg extends Omit<
  React.ComponentProps<'svg'>,
  'xmlns' | 'viewBox' | 'fill' | 'href'
> {
  href?: Route | null;
  showText?: boolean;
  size?: number;
  containerClassName?: string;
  textClassName?: string;
}

export function Brand({
  href,
  className,
  containerClassName,
  ...svgProps
}: BrandPropsWithSvg) {
  const content = (
    <div
      className={cn(
        'flex items-center justify-center gap-2',
        containerClassName
      )}
    >
      <BrandLogo {...svgProps} className={cn('h-8 w-auto', className)} />
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="flex-center">
      {content}
    </Link>
  );
}

export const BrandLogo = ({ className, id, ...props }: React.ComponentProps<'img'>) => (
  <img
    src="/shr logo.svg?v=1"
    alt="Sreehari Logo"
    className={cn(className, "brightness-0 dark:invert")}
    id={id}
    {...props}
  />
);
