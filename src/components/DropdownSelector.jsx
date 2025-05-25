function DropdownSelector() {
  return (
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">X Axis</label>
          <div className="control">
            <div className="select">
              <select defaultValue="sepal length">
                <option>sepal length</option>
                <option>sepal width</option>
                <option>petal length</option>
                <option>petal width</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="field">
          <label className="label">Y Axis</label>
          <div className="control">
            <div className="select">
              <select defaultValue="sepal width">
                <option>sepal length</option>
                <option>sepal width</option>
                <option>petal length</option>
                <option>petal width</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownSelector;