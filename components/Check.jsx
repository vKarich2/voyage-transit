import { CheckIcon } from "@heroicons/react/24/outline";

export default function Check({ title }) {
  return (
    <div className="flex gap-x-2 items-center">
      <CheckIcon className="w-10 h-10 text-accent" />
      <h3 className="text-[20px] uppercase font-semibold text-foreground">
        {title}
      </h3>
    </div>
  );
}