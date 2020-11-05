interface SkeletonProps {
  rows?: number;
  circle?: boolean;
  color?: string;
  translucent?: boolean;
  height?: string | number;
  width?: string | number;
}

declare const Skeleton: (props: SkeletonProps) => any;
export default Skeleton;
