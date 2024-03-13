import { AnimatedDirection } from "./animated/animated-direction";

export function DashboardData() {
  return (
    <div className="pl-2 text-xl">
      <AnimatedDirection
        from="bottom"
        animate="show"
        exit={{ opacity: 0 }}
        custom={1}
        delay={0.2}
      >
        Data
      </AnimatedDirection>
    </div>
  );
}
