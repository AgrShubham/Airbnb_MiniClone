export default function Card(props){

    let badgeText
    if(props.openSpots===0)
    {
        badgeText="SOLD OUT"
    }
    else if(props.location=== "Online"){
        badgeText="ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img className="card-image" src={`./images/${props.img}`} alt="Katie photo" />
            <div className="card-stats">
                <img className="card-star" src={`/images/star.png`} alt="Star" />
                <span className="card-rating">{props.rating}</span>
                <span className="grey">({props.reviewCount})</span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}