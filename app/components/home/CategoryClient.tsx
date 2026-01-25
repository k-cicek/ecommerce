"use client"

import { useRouter, useSearchParams } from "next/navigation";

const CategoryClient = ({ categories }: { categories: string[] }) => {
    const router = useRouter();
    const params = useSearchParams();
    const active = params?.get("category") || "";

    const onSelect = (cat: string) => {
        const sourceParams = params ?? new URLSearchParams();
        const sp = new URLSearchParams(Array.from(sourceParams.entries()));
        if (sp.get("category") === cat) sp.delete("category");
        else sp.set("category", cat);
        const q = sp.toString();
        router.push(q ? `/?${q}` : "/");
    }

    return (
        <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
            {categories.map((category, index) => (
                <div className={`min-w-[120px] px-3 py-2 rounded-full cursor-pointer text-center ${active === category ? "bg-orange-600 text-white" : "border text-slate-500"}`}
                    key={index} onClick={() => onSelect(category)}>{category}</div>
            ))}
        </div>
    )
}

export default CategoryClient