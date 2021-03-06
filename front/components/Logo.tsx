import LogoFully from '@svg/logo-fully.svg'
import Link from 'next/link'

type Props = {
    className: string
}

const Logo = ({ className }: Props) => {
    return (
        <Link href="/">
            <a>
                <LogoFully className={className} />
            </a>
        </Link>
    )
}

export default Logo
