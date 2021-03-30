import Link from 'next/link';
import MainLayout from '../components/mainLayout';

function Home(){
    return (
        <MainLayout>
            Hello World
            <p><Link href='/about'><a>About /</a></Link></p>
            <p><Link href='/posts'><a>Posts /</a></Link></p> 
            {/* <style jsx>{`
                a {
                    text-decoration: none
                }
            `}</style> */}
        </MainLayout>
    )
}

export default Home