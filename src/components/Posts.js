import Videos from "./Videos"
function Icons(props) {
    return (<ion-icon name={props.icon}></ion-icon>)
}

function Post(props) {
    const mainProfile = "/images/catanacomics.png"
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]
    return (

        <div class="box-img">
            <div class="user">
                <div class="pointer">
                    <img src={props.profilePic} />
                    <h4>{props.pfName}</h4>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={props.img} />
            <div class="likes">
                <div class="icons-left">
                    <div class="icons-right">
                        {icons.map(icon => <Icons icon={icon} />)}
                    </div>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="likedby">
                <img src={props.imgLikedPf} />
                <h6>Curtido por <strong class="pointer">{props.pfLiked}</strong> e <strong class="pointer"> outras 138.088 pessoas</strong></h6>

            </div>

            <div class="comments">
                <div class="fixed">
                    <p><strong class="pointer">{props.pfComment}</strong> The cuttest cat ever!</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div class="make-comment">
                    <img src={mainProfile} />
                    <input type="text" />
                    <button class="pointer">Publicar</button>
                </div>
            </div>
        </div>


    )
}
export default function Posts() {
    const posts = [
        { profilePic: "/images/meowed.png", pfName: "meowed", img: "/images/gato.png", imgLikedPf: "/images/naturelife.jpg", pfLiked: "naturelife", pfComment: "naturelife" },
        { profilePic: "/images/barked.png", pfName: "barked", img: "/images/dog.png", imgLikedPf: "/images/meowed.png", pfLiked: "meowed", pfComment: "meowed" },
        { profilePic: "/images/bookstan.jpg", pfName: "bookstan", img: "/images/aristoteles.jpg", imgLikedPf: "/images/respondeai.png", pfLiked: "respondeai", pfComment: "respondeai" },
        { profilePic: "/images/planet.png", pfName: "nathanwpylestrangeplanet", img: "/images/strange-planet.jpg", imgLikedPf: "/images/bookstan.jpg", pfLiked: "bookstan", pfComment: "naturelife" }
    ]
    return (

        <div class="posts">
            <Videos />
            {posts.map(item => <Post profilePic={item.profilePic} pfName={item.pfName} img={item.img} imgLikedPf={item.imgLikedPf} pfLiked={item.pfLiked} pfComment={item.pfComment} />)}
        </div>
    )
}