import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-slate-50 border-t mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:flex md:items-center md:justify-between">
                <div className="flex items-center space-x-3">
                    <div className="text-xl font-semibold text-slate-700">Burada.com</div>
                    <div className="text-sm text-slate-500">Güvenle alışveriş</div>
                </div>

                <nav className="mt-4 md:mt-0">
                    <ul className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <li><Link href="/about" className="hover:underline">Hakkımızda</Link></li>
                        <li><Link href="/contact" className="hover:underline">İletişim</Link></li>
                        <li><Link href="/privacy" className="hover:underline">Gizlilik</Link></li>
                        <li><Link href="/terms" className="hover:underline">Kullanım Şartları</Link></li>
                    </ul>
                </nav>

                <div className="mt-4 md:mt-0 text-sm text-slate-500">© {year} Burada.com. Tüm hakları saklıdır.</div>
            </div>
        </footer>
    )
}

export default Footer