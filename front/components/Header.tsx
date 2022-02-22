import Menu from '@components/Menu'
import Logo from '@components/Logo'

import IconHearth from '@svg/hearth.svg'
import IconCart from '@svg/cart.svg'

const Header = () => {
    return (
        <header className="border-b border-b-grey-200">
            <div className="wrap flex justify-between items-center">
                <Logo className="w-16" />

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
