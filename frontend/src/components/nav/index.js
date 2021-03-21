const Nav = () => {
    return (
        <nav className="uk-navbar">
            <a class="uk-navbar-item uk-logo uk-text-center" href="#home">
                <div>
                    <b>BLOG</b>
                    <div class="uk-navbar-subtitle">jmacro.dev</div>
                </div>
            </a>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><a href="#new">New</a></li>
                    <li><a href="#crypto">Crypto</a></li>
                    <li><a href="#developer">Developer</a></li>
                    <li><a href="#nurse">Nurse</a></li>
                </ul>
            </div>
        </nav >
    )
};

export default Nav;