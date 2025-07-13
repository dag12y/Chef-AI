import chefImg from '../assets/chef-img.png'

function Header(){
    return(
        <header className="chef-header">
            
            <img src={chefImg} alt="Ai chef logo" className="chef-logo" />
            <div className="header-text">
                <h1>Chef Bot</h1>
                <p className="tagline">The best AI powered recipe creator</p>
            </div>
        </header>
    )
}
export default Header