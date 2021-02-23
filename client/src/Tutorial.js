import React, { useEffect, useState } from "react";
import Search from "./Search";
const Tutorial = (props) => {
  const [inputs, setInputs] = useState({});
  
  const [errorMessage, setErrorMessage] = useState(null);
  
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
   const search = searchValue => {
   
    setErrorMessage(null);

    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setData(jsonResponse.Search);
    
        } else {
          setErrorMessage(jsonResponse.Error);
          
        }
      });
  	};


  const HandleSubmit = (event) => {
    event.preventDefault();
      Update();
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
    <section id="services">
      <br/>
      <br/>
    <div className="container" data-aos="fade-up">
      <div className="row vertical-center-row">
          <div className="col-sm-9 col-md-7 col-lg-12 mx-auto">
	<div class="row">
	 <br/>
      <br/>
	   <br/>
      <br/>
  <div class="col-6">
   <div class="card-body">
               <Search search={search} />
                  <h3 >Tutorial list</h3>
                  <div class="collapsiblecontent">
                    <ul class="list-group list-group-flush">
                      {data.map((k, i) => {
                        return (
                          <li class="list-group-item" style={{ cursor: "pointer" }} onClick={(e) => handleSelectModule(k, e)}>{k.description}
						  
</li>

                        );
                      })}
                    </ul>
                  </div>


                </div>
  </div>
  <div class="col-6">
 <h3>Tutorial</h3>
              <div className="ibox-content">
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
</div>
	   </div>
          </div>
        </div>
   
    
  </section>
  );
};
export default Tutorial;
