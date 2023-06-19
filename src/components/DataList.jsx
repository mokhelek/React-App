import React, { useState } from "react";
import { Link } from "react-router-dom";

function DataList(props) {
    return (
        <div className="container">
            <div className="row justify-content-center" style={{ marginTop: "30px" }}>
                <div className="col-md-8">
                    {props.list.map(function (item) {
                        return (
                            <div style={{ marginBottom: "1rem" }} key={item.id}>
                                <div>
                                    <Link style={{ textDecoration: "none" }} to={`read/${item.id}`}>
                                        <h3 style={{ marginBottom: "0.2rem" }}>{item.title}</h3>
                                    </Link>

                                    <span>
                                        <small className="lead" style={{ fontSize: "0.95rem", color: "gray" }}>
                                            {item.dateAdded}
                                        </small>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DataList;
