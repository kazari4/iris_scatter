function DropdownSelector({ xAxis, yAxis, setXAxis, setYAxis }) {
  return (
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">X Axis</label>
          <div className="control">
            <div className="select">
              <select defaultValue={xAxis} onChange={(e) => setXAxis(e.target.value)}>
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
              <select defaultValue={yAxis} onChange={(e) => setYAxis(e.target.value)}>
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