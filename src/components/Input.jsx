function InputText() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <input type="text" placeholder="Enter Task"></input>
        </div>
        <div className="col">
          <input type="date"></input>
        </div>
        <div className="col">
          <button type="button" className="btn btn-success">
            ADD
          </button>
        </div>
        <div className="col">
            <button type="button" className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  )
};
export default InputText;
