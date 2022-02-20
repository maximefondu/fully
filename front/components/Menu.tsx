import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = () => {
    const menu = [
        {
            label: 'Desks',
            href: '/desks',
            current: useRouter().pathname.includes('desks')
        },
        {
            label: 'Seats',
            href: '/seats',
            current: useRouter().pathname.includes('seats')
        },
        {
            label: 'Accessories',
            href: '/accessories',
            current: useRouter().pathname.includes('accessories')
        }
    ]

    return (
        <ul className="flex items-center">
            {menu.map((item) => (
                <li key={item.label}>
                    <Link href={item.href}>
                        <a
                            className={`flex font-medium px-5 py-8 transition-all duration-300 border-b-2 hover:border-b-primary ${
                                item.current
                                    ? 'border-b-primary'
                                    : 'border-b-transparent'
                            }`}
                        >
                            {item.label}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu
