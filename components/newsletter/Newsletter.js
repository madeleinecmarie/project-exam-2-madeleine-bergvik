function Newsletter() {
  return (
    <div className="newsletter">
      <h2 className="newsletter__h2">Subscribe to see Secret Deals</h2>
      <h4 className="newsletter__h4">Prices drop the moment you sign up!</h4>
      <div className="newsletter__email">
        <input
          type="email"
          className="newsletter__emailInput"
          placeholder="Email"
        />
        <button className="newsletter__btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
