import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
    cartProduct: CardProductProps,
    increaseFunc: () => void;
    decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({ cartProduct, increaseFunc, decreaseFunc }) => {
    const buttonStyle = "w-8 h-8 border flex items-center justify-center rounded-md cursor-pointer text-lg"
    return (
        <div className="flex items-center gap-2">
            <div className={buttonStyle} onClick={decreaseFunc}>-</div>
            <div className="text-lg md:text-xl">{cartProduct?.quantity}</div>
            <div className={buttonStyle} onClick={increaseFunc}>+</div>
        </div>
    )
}

export default Counter