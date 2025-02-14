import { IoIosClose } from "react-icons/io";

interface Props {
  label: string;
  onRemove: (label: string) => void;
}

const Chips = ({ label, onRemove }: Props) => {
  return (
    <div className="flex w-fit items-center gap-0.5 rounded-lg bg-neutral-200 px-4 py-2 font-bold">
      {label}
      <button onClick={() => onRemove(label)}>
        <IoIosClose className="text-primary-green" size={30} />
      </button>
    </div>
  );
};

export default Chips;
