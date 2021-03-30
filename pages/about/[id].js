import { useRouter } from 'next/router';



function Id(){
    const router = useRouter();
    console.log(router)
    return (
        <div>
            About papka
            <p>chka ej About {router.query.id}</p>
            {/* query.id  id-in da mer tvac anunn e failin [id].js*/}
        </div>
    )
}

export default Id