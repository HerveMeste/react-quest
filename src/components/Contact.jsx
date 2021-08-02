const Contact = () => {
  const imgAvatar = "https://randomuser.me/api/portraits/men/57.jpg";
  const firstName = "Fabien";
  const lastName = "Desnoues";
  const fullName = firstName + ' ' + lastName;
  const isConnected = true;

  return (
    <div className="Contact">
      <img className="avatar" src={imgAvatar} />
      <div>
        <h4>{fullName}</h4>
        <div className="status">
          <div><span className={isConnected ? "status-online" : "status-offline"} />{isConnected ? "Online" : "Offline"}</div>
        </div>
      </div>
    </div>)
}
export default Contact;