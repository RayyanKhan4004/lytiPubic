import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

interface PopoverMenuProps {
  triggerImage: string;
  options: { label: string; onClick: () => void }[];
  className?: string;
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  triggerImage,
  options,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (onClick: () => void) => {
    onClick(); // Trigger the provided function
    setOpen(false); // Close popover
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={`focus:outline-none ${className}`}>
          <img
            src={triggerImage}
            alt="menu"
            className="w-auto cursor-pointer"
          />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="bg-white border border-(--inputBorder) shadow-md rounded-md p-2 w-40 z-50">
          {options.map((option, index) => (
            <button
              key={index}
              className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => handleOptionClick(option.onClick)}
            >
              {option.label}
            </button>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverMenu;
