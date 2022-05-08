function Story(props) {
    return (
        <div class="profile-story pointer">
            <div class="story-image">
                <img src={props.img} alt={props.alt} />
            </div>
            <div class="story-name">
                <h5>{props.h5}</h5>
            </div>
        </div>
    )
}

export default function Stories() {
    const stories = [
        { img: "./images/9gag.png", h5: "9gag", alt: "9gag Photo" },
        { img: "./images/meowed.png", h5: "meowed", alt: "meowed Photo" },
        { img: "./images/barked.png", h5: "barked", alt: "barked Photo" },
        { img: "./images/planet.png", h5: "nathanwpylestrangeplanet", alt: "nathanwpylestrangeplanet Photo" },
        { img: "./images/comics.png", h5: "wawawiwacomics", alt: "wawawiwacomics Photo" },
        { img: "./images/respondeai.png", h5: "respondeai", alt: "respondeai Photo" },
        { img: "./images/filomoderna.png", h5: "filomoderna", alt: "filomoderna Photo" },
        { img: "./images/memeriagourmet.png", h5: "memeriagourmet", alt: "memeriagourmet Photo" }
    ]

    return (
        <div class="stories">
            {stories.map(item => <Story img={item.img} h5={item.h5} alt={item.alt} />)}
            <div class="arrow pointer">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}