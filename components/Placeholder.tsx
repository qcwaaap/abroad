import type { CSSProperties, ReactNode } from 'react';
import styles from './Placeholder.module.css';

type Props = {
  label: string;
  width?: string;
  height?: string;
  background?: string;
  labelColor?: string;
  block?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function Placeholder({
  label,
  width,
  height,
  background,
  labelColor,
  block,
  className,
  children,
}: Props) {
  const style: CSSProperties = { width, height, background };
  if (block) style.display = 'block';
  return (
    <span className={`${styles.ph} ${className ?? ''}`} style={style}>
      {children}
      <span className={styles.label} style={labelColor ? { color: labelColor } : undefined}>
        {label}
      </span>
    </span>
  );
}
