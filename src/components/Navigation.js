function Icons(props) {
    return (<ion-icon name={props.icon}></ion-icon>)
}
export default function Navigation() {
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
    return (
        <footer class="navigation" >
            {icons.map(icon => <Icons icon={icon} />)}
        </footer>
    )
}