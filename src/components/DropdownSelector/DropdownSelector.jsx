function DropdownSelector({ xProperty, yProperty, setXProperty, setYProperty }) {
  return (
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">x property</label>
          <div className="control">
            <div className="select">
              <select defaultValue={xProperty} onChange={(e) => setXProperty(e.target.value)}>
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
          <label className="label">y property</label>
          <div className="control">
            <div className="select">
              <select defaultValue={yProperty} onChange={(e) => setYProperty(e.target.value)}>
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