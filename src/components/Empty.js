import programme from "../image/programme.png";
const Empty = (props)=>{
    return (
        <div class="container">
            <h1 className="brandName">{props.text}</h1>
            <img src={programme} alt="A wedding programme" className="img"></img>
        </div>
    );
}
export default Empty;