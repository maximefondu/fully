import getProducts from '@features/product/query/get'

export const getStaticProps = async () => {
    return {
        props: await getProducts()
    }
}

type Props = {
    title: string
    content: string
}

const Desks = (props: Props) => {
    console.log(props)

    return (
        <div className="wrap py-14">
            <h1 className="text-base text-center mb-4">{props.title}</h1>
        </div>
    )
}

export default Desks
