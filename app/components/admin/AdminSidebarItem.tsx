import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItemProps {
    selected?: boolean;
    name: string;
    icon: IconType;
    url: string;
}

const AdminSidebarItem = ({ selected, name, icon: Icon, url }: AdminSidebarItemProps) => {
    return (
        <div>
            <Link className={`cursor-pointer flex items-center gap-2 ${selected ? "text-slate-600 font-bold" : "text-white font-medium"}`} href={url}>
                <Icon size={25} />
                <div>{name}</div>
            </Link>
        </div>
    )
}

export default AdminSidebarItem