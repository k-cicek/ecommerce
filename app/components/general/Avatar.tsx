import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
    image?: string;
}

const Avatar = ({ image }: AvatarProps) => {
    return image ? <img width={50} height={50} src={image} alt="" /> : <div><RxAvatar size={50} /></div>

}

export default Avatar