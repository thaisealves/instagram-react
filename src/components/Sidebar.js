function MainProfile(props) {
    return (
        <div class="main-profile">
            <img src={props.profilePic} />
            <div class="name-profile">
                <h4>{props.userPf}</h4>
                <h6>{props.namePf}</h6>
            </div>

        </div>
    )
}

function Aside(props) {
    return (
        <div class="suggestions">
            <div class="profile-suggest">
                <div>
                    <img src={props.profilePic} />
                    <div class="name-suggest">
                        <h4 class="pointer">{props.userPf}</h4>
                        <h6>{props.status}</h6>
                    </div>
                </div>
                <div class="follow">
                    <h5 class="pointer">Seguir</h5>
                </div>
            </div>
        </div>

    )
}
export default function Sidebar() {
    const main = [{ profilePic: "/images/catanacomics.png", userPf: "catanacomics", namePf: "Catana" }]
    const suggestion = [
        { profilePic: "/images/badvibesmemes.png", userPf: "bad.vibes.memes", status: "Segue você" },
        { profilePic: "/images/chibirdart.png", userPf: "chibirdart", status: "Segue você" },
        { profilePic: "/images/razoesparaacreditar.png", userPf: "razoesparaacreditar", status: "Novo no Instagram" },
        { profilePic: "/images/adorableanimals.png", userPf: "adorable_animals", status: "Segue você" },
        { profilePic: "/images/smallcutecats.png", userPf: "smallcutecats", status: "Segue você" }]
    return (
        <div class="sidebar">
            {main.map(item => <MainProfile profilePic={item.profilePic} userPf={item.userPf} namePf={item.namePf} />)}
            <div class="all-suggestions">
                <h6>Sugestões para você</h6>
                <h5 class="pointer">Ver tudo</h5>
            </div>
            {suggestion.map(item => <Aside profilePic={item.profilePic} userPf={item.userPf} status={item.status}/>)}
            <div class="configs">
                <p class="pointer">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma</p>
                <p class="year">
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
            </div>
        </div>
    )
}