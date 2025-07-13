import chefClaudeLogo from '../assets/chef-avatar.png'

function Header(){
    return(
        <header className="chef-header">
            <img src={chefClaudeLogo} alt="Ai chef logo" className="chef-logo" />
            <div className="header-text">
                <h1>Chef Bot</h1>
                <p className="tagline">The best AI powered recipe creator</p>
            </div>
        </header>
    )
}
export default Header