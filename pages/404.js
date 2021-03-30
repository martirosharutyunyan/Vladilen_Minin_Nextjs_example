import Link from 'next/link';
import {useRouter} from 'next/router';
import classes from '../scss/style1.module.scss';
function ErrorPage(){
    const router = useRouter();
    console.log(classes.error)
    console.log(router.asPath)
    return (
        <div>
            <h1>Error 404</h1>
            <p>Please <Link href='/'><a>go</a></Link> to back for safty</p>
            <div>not finded page <div className={classes.error}>{router.asPath.slice(1,router.asPath.length)}</div></div>
        </div>
    )
}

export default ErrorPage;