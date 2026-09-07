interface props {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  deleteTaskFunc: (taskId: string) => void; // callback function
  toggleDoneTaskFunc: (taskId: string) => void; // callback function
}

export default function TaskCard({
  id,
  title,
  description,
  isDone,
  deleteTaskFunc,
  toggleDoneTaskFunc,
}: props) {
  // callback function when delete button is clicked
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div key={id} className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4 text-center">
            <h5
              className={
                isDone
                  ? "text-decoration-line-through card-title mb-0"
                  : "card-title mb-0"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4 text-center">
            <p className="card-text mb-0">{description}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 text-center">
            <button className="btn btn-success" onClick={toggleDoneBtnOnClick}>
              Done
            </button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 text-center">
            <button className="btn btn-danger" onClick={deleteBtnOnClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
