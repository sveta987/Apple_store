import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2 className="title">Newsletter</h2>
      <div className="desc">Get timely updates from your favorite products.</div>
      <div className="InputContainer">
        <input className="Input" placeholder="Your email" />
        <button className="Button">
          <i className="fa fa-send"></i>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
