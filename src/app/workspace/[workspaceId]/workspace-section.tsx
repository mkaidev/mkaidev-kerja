import { Plus } from "lucide-react";
import { useToggle } from "react-use";
import { FaCaretDown } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

interface WorkspaceSectionProps {
  children: React.ReactNode;
  label: string;
  hint: string;
  onNew?: () => void;
}

export const WorkspaceSection = ({
  children,
  label,
  hint,
  onNew,
}: WorkspaceSectionProps) => {
  const [on, toggle] = useToggle(true);

  return (
    <div className="flex flex-col mt-3 px-2">
      <div className="flex items-center px-3.5 group">
        <Button
          onClick={toggle}
          variant="transparent"
          className="p-0.5 text-sm text-[#F9EDFFCC] size-6 shrink-0"
        >
          <FaCaretDown
            className={cn("size-4 transition-transform", !on && "-rotate-90")}
          />
        </Button>
        <Button
          variant="transparent"
          size="sm"
          className="group h-[28px] px-1.5 items-center justify-start text-sm text-[#F9EDFFCC] overflow-hidden"
        >
          <span className="truncate">{label}</span>
        </Button>
        {onNew && (
          <Hint label={hint} side="top" align="center">
            <Button
              onClick={onNew}
              variant="transparent"
              size="iconSm"
              className="ml-auto size-6 p-0.5 shrink-0 text-sm text-[#F9EDFFCC] opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Plus className="size-5" />
            </Button>
          </Hint>
        )}
      </div>
      {on && children}
    </div>
  );
};
