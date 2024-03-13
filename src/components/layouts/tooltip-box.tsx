import { Tooltip, TooltipContent } from "~/components/ui/tooltip";
import { TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

interface TooltipBoxProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export default function TooltipBox({ children, content }: TooltipBoxProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
