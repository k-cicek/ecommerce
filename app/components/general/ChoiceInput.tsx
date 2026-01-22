import { IconType } from "react-icons";
import { text } from "stream/consumers";

interface ChoiceInputProps {
    text: string;
    icon: IconType;
    onClick: (value: string) => void;
    selected?: boolean;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({ text, icon: Icon, onClick, selected }) => {
    return (
        <div className={`my-3 px-4 py-2 cursor-pointer rounded-md flex items-center gap-2 justify-center h-16 border ${selected ? "border-black" : "border-gray-200"}`} onClick={() => onClick(text)}>
            <Icon />
            <span className="text-slate-700">{text}</span>
        </div>
    )
}

export default ChoiceInput