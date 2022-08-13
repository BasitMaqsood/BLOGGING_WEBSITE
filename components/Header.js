import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <Link href='/'>
                    <h2>Blogging Website</h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;