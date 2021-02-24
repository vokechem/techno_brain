import React, { useEffect, useState } from "react";
const Tutorial = (props) => {
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);
  const url = "/api/tutorial";
  const fetchData = () => {
    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": window.sessionStorage.getItem("xtoken"),
        },
      }
    )
      .then((res) => res.json())
      .then((Data) => {
        if (Data.length > 0) {
          setData(Data);
        } else {
          //  dispatch({ type: "FETCH_ERROR", payload: Data.error });
        }
      })
      .catch((err) => {
        // dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (inputs.id) {
      Update();
    } else {
      Save()
    }
  };
  const Save = () => {
    let data = {
      title: inputs.title,
      description: inputs.description
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.success) {
            fetchData();
            alert("Saved successfully");
          } else {
            alert(data.message);
          }
        })
      )
      .catch((err) => {
        alert("Failed");
      });
  };
  const Update = () => {
    let data = {
      title: inputs.title,
      description: inputs.description
    }
    fetch(url + "/" + inputs.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.success) {
            fetchData();
            alert("Saved successfully");
          } else {
            alert(data.message);
          }
        })
      )
      .catch((err) => {
        alert("Failed");
      });
  };
  const handleSelectModule = (k, e) => {
    setInputs(k)
  };
  return (
    <div className="list row">
    <div className="col-md-8">
      <div className="input-group mb-3">
       
        
      </div>
    </div>
    <div className="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group list-group-flush">
                      {data.map((k, i) => {
                        return (
                          <li class="list-group-item" style={{ cursor: "pointer" }} onClick={(e) => handleSelectModule(k, e)}>{k.description}</li>

                        );
                      })}
                    </ul>
      <button
        className="m-3 btn btn-sm btn-danger"
        
      >
        Remove All
      </button>
    </div>
    <div className="col-md-6">
    <form className="form-horizontal" onSubmit={HandleSubmit}>
                  <div className=" row">
                    <div className="col-sm">
                      <div className="form-group">
                        <label htmlFor="Datereceived" className="fontWeight-bold">
                          Title
                      </label>
                        <input
                          type="text"
                          title="Enter Title"
                          className="form-control"
                          name="title"
                          required
                          value={inputs.title}
                          onChange={handleInputChange}
                        // defaultvalue={inputs.name}
                        />
                      </div>
                    </div>

                  </div>

                  <div className=" row">
                    <div className="col-sm">
                      <div className="form-group">
                        <label htmlFor="Datereceived" className="fontWeight-bold">
                          Description
                      </label>
                        <input
                          type="text"
                          title="description"
                          className="form-control"
                          name="description"
                          required
                          value={inputs.description}
                          onChange={handleInputChange}
                        // defaultvalue={inputs.name}
                        />
                      </div>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4">
                          <div class="d-flex flex-row float-right">
                            {inputs.id ? <button className="btn btn-primary p-2" type="submit">
                              Update
                          </button> : <button className="btn btn-primary p-2" type="submit">
                                Submit
                          </button>}
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
    </div>
  </div>
  );
};
export default Tutorial;