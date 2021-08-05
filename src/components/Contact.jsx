const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <div>
                <h4>{props.name}</h4>
                <div className="status">
                    <div><span className={props.isConnected ? "status-online" : "status-offline"} />{props.isConnected ? "Online" : "Offline"}</div>
                </div>
            </div>
        </div>)
}
export default Contact;