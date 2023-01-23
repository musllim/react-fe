import ButtonComponent from "../Button";
import Wrapper from "../Container";
import TextField from "../TextField";
import "./contacts.css";
const Contacts = () => {
  return (
    <div id="contacts">
      <Wrapper>
        <h3>Let's build together</h3>
        <p>contact me</p>
        <div className="alert"></div>
        <form id="message">
          <div className="group">
            <TextField label="Name" type="input" placeholder="muslim uwi" />
            <TextField
              label="Email"
              type="input"
              placeholder="muslim@gmail.com"
            />
          </div>
          <TextField
            label="Subject"
            type="input"
            placeholder="project support"
          />
          <TextField
            label="Message"
            placeholder="call me as soon as possible"
          />

          <div className="control">
            <ButtonComponent primary>send Message</ButtonComponent>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Contacts;
