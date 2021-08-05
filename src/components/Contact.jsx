const Contact = () => {
  const imgAvatar = "https://randomuser.me/api/portraits/men/85.jpg";
  const firstName = "Hervé";
  const lastName = "Meste";
  const fullName = firstName + ' ' + lastName;
  const connected = true;

  return (
    <div className="Contact">
      <img className="avatar" src={imgAvatar} />
      <div>
        <h4>{fullName}</h4>
        <div className="status">
          <div><span className={connected ? "status-online" : "status-offline"} />{connected ? "Online" : "Offline"}</div>
        </div>
      </div>
    </div>)
}
export default Contact;