import styles from "./_header.module.scss";
import { Link } from "react-router-dom";


const Header = ()=>{
    return(
        <header id={styles.mainHeader}>
            <div className={styles.container}>
                <div className={styles.headerUpContent}>
                    <div className={styles.headerLogo}>
                        <Link to={`/`}>
                            <img src="https://www.anbardanal.az/_next/image?url=%2F_next…tic%2Fmedia%2FanbardanLogo.3c13419a.png&w=96&q=75" alt="" />
                        </Link>
                    </div>
                    <nav>
                    <div className={styles.navigation}>
                      <ul>
                        <li><Link to={`/about`}>About Us</Link></li>
                        <li><Link to={`/products`}>Products</Link></li>
                        <li><Link to={`/portfolio`}>Portfolio</Link></li>
                        <li><Link to={`/catalog`}>Catalog</Link></li>
                        <li><Link to={`/contact`}>Contact</Link></li>
                      </ul>
                    </div>
                    <div className={styles.language}>
                        <select className={styles.lang}>
                            <option value="EN">EN</option>
                            <option value="AZ">AZ</option>
                        </select>
                    </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default  Header