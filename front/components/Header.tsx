import Link from 'next/link'

import Menu from '@components/Menu'
import LogoFully from '@svg/logo-fully.svg'
import IconHearth from '@svg/hearth.svg'
import IconCart from '@svg/cart.svg'

const Header = () => {
    return (
        <header className="border-b border-b-grey-200">
            <div className="wrap flex justify-between items-center">
                <Link href="/">
                    <a>
                        <LogoFully className="w-20" />
                    </a>
                </Link>

                <Menu />

                <ul className="flex items-center">
                    <li className="p-3">
                        <IconHearth className="w-5 fill-grey-400" />
                    </li>
                    <li className="p-3">
                        <IconCart className="w-5 fill-grey-400" />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
