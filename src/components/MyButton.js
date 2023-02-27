const MyButton = (props) =>{
    return(
        <div className="butiv">
            <p className="message">Click here to view the wedding program</p>
            <button className="button" onClick={props.onClick}>
                {props.text}
            </button>
            </div>
    );
}
export default  MyButton;