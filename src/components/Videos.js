import React from "react"
function Icons(props) {
    return (<ion-icon name={props.icon}></ion-icon>)
}
function Video(props) {
    const mainProfile = "/images/catanacomics.png"
    const icons = ["chatbubble-outline", "paper-plane-outline"]
    const [like, setLike] = React.useState(<ion-icon onClick={likeHandle} name="heart-outline"></ion-icon>)
    function likeHandle() {
        setLike(<ion-icon onClick={dislikeHandle} class="colored md hydrated" name="heart"></ion-icon>)
    }
    function dislikeHandle() {
        setLike(<ion-icon onClick={likeHandle} class="md hydrated" name="heart-outline"></ion-icon>)
    }
    return (
        <div class="box-img">
            <div class="user">
                <div class="pointer">
                    <img src={props.profilePic} />
                    <h4>{props.pfName}</h4>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <video width="100%" autoPlay muted loop class="pointer" onClick={likeHandle}>
                <source src={props.videoMp4} type="video/mp4" />
                <source src={props.videoOgg} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div class="likes">
                <div class="icons-left">
                    
                    {like} {/* the like button is detached from the other icons because I need to put functions on it */}
                    {icons.map(icon => <Icons icon={icon} />)}
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="likedby">
                <img src={props.imgLikedPf} />
                <h6>Curtido por <strong class="pointer">{props.pfLiked}</strong> e <strong class="pointer"> outras {props.likes} pessoas</strong></h6>

            </div>

            <div class="comments">
                <div class="fixed">
                    <p><strong class="pointer">{props.pfComment}</strong> A natureza é incrível mesmo...</p>
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
export default function Videos() {
    const videos = [
        { profilePic: "/images/naturelife.jpg", pfName: "naturelife", videoMp4: "/images/video.mp4", videoOgg: "/images/video.ogv", imgLikedPf: "/images/respondeai.png", pfLiked: "respondeai", pfComment: "catanacomics", likes: "101.523" }]
    return (
        <>
            {videos.map(item => <Video profilePic={item.profilePic} pfName={item.pfName} videoMp4={item.videoMp4} videoOgg={item.videoOgg} imgLikedPf={item.imgLikedPf} pfLiked={item.pfLiked} pfComment={item.pfComment} likes={item.likes} />)}
        </>
    )
}