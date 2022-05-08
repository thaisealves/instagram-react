function Icons(props) {


    return (<ion-icon name={props.icon}></ion-icon>)

}

export default function Menu() {
    const logo = "./images/logo.png"
    const logoIcon = "logo-instagram";
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
    return (
        <header>

            {/* Menu from the mobile part */}
            <div class="menu-mobile">
                <ion-icon name={logoIcon}></ion-icon>
                <img src={logo} title="Instagram" />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            {/*Menu from tablet and desktop part, has more content */}
            <div class="menu-desktop">
                <div class="menu-content">
                    <div class="menu-left">
                        <ion-icon name={logoIcon}></ion-icon>
                        <div class="division"></div>
                        <img src={logo} class="pointer" />
                    </div>

                    <div class="search-bar pointer">
                        <div>
                            <p>Pesquisar</p>
                        </div>
                    </div>

                    {/* Using the map to print the icons from the top-right part of the page */}
                    <div class="icons-right">
                        {icons.map(icon => <Icons icon={icon} />)}
                    </div>
                </div>
            </div>

        </header>
    )
}



