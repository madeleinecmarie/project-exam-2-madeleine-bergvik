function Newsletter() {
  return (
    <div className="bg-black h-447 text-center pt-24">
      <h2 className="white__text">Subscribe to see Secret Deals</h2>
      <h4 className="white__text">Prices drop the moment you sign up!</h4>
      <div className="flex justify-center m-auto w-3/6 mt-20">
        <input
          type="email"
          className="w-496 rounded-sm h-65 form-control relative flex-auto px-3 py-1.5"
          placeholder="Email"
        />
        <button className="orangeBtn ml-2.5">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
