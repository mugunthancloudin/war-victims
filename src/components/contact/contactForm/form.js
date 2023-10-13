import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./form.css";
import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import contact from "../../asssets/contact/Contactus_banner.svg";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid p-0">
          <div className="container-fluid p-0 mb-4">
            <div className="row text-center mt-3">
              <h2 className="fw-bold">Contact Us</h2>
              <p>
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis suscipit <br></br>laboriosam nisi commodi consequatur.
              </p>
            </div>
            
            <div className="row me-4">
              <div className="col-lg-6 text-center">
                <img src={contact} className="contact_pic" />
                <h2 className="fw-bold mt-4">Are You Facing Any Problem..?</h2>
                <div className="row contact_subrow mt-4 ps-5">
                  <div className="col-lg-4 text-right">
                    <div className="d-flex justify-content-center">
                      <div className="contact_number">
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="1x"
                          className="contact_icon mt-1"
                        />
                      </div>

                      <div>
                        <p className="ms-3 ">0544417515</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="d-flex justify-content-center">
                      <div>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="1x"
                          className="contact_icon"
                        />
                      </div>
                      <div className="ms-2 mt-0">
                        <p>gbsolutions@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="row text-start mt-3 contact_h4">
                 
                    <h4 className="">Get In Touch</h4>
                
                </div>

                <div className="row  p-0 m-0">
                 
                    <div className="card  contct_subcontainer">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mt-4">
                            <input
                              type="text"
                              placeholder="Name"
                              className="form-control contact_border shadow-none"
                              {...register("Name", { required: true })}
                              aria-invalid={errors.Name ? "true" : "false"}
                            />
                            {errors.Name?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Enter your name
                              </p>
                            )}
                          </div>
                          <div className="col-lg-6 mt-4 ">
                            <input
                              type="email"
                              placeholder="E-Mail Id"
                              className="form-control contact_border shadow-none"
                              {...register("email", { required: true })}
                              aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Enter your email
                              </p>
                            )}
                          </div>

                          <div className="col-md-6 mt-4 ">
                            <input
                              type="number"
                              placeholder="Phone"
                              className="form-control contact_border shadow-none"
                              {...register("number", { required: true })}
                              aria-invalid={errors.number ? "true" : "false"}
                            />
                            {errors.number?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Enter your contact_number.
                              </p>
                            )}
                          </div>
                          <div className="col-md-6 mt-4">
                            <input
                              type="text"
                              placeholder="Your Region"
                              className="form-control contact_border shadow-none"
                              {...register("region", { required: true })}
                              aria-invalid={errors.region ? "true" : "false"}
                            />
                            {errors.region?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Enter your Region.
                              </p>
                            )}
                          </div>

                          <div className="col-md-6 mt-4">
                            <input
                              type="text"
                              placeholder="Enter Your Service"
                              className="form-control contact_border shadow-none"
                              {...register("Service", { required: true })}
                              aria-invalid={errors.Service ? "true" : "false"}
                            />
                            {errors.region?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Enter your service.
                              </p>
                            )}
                          </div>
                          <div className="col-md-6 mt-4">
                            <input
                              type="text"
                              placeholder="Industry Type"
                              className="form-control contact_border shadow-none"
                              {...register("industry_type", { required: true })}
                              aria-invalid={
                                errors.industry_type ? "true" : "false"
                              }
                            />
                            {errors.industry_type?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Define your industry type.
                              </p>
                            )}
                          </div>

                          <div className="col-md-12 mt-4">
                            <textarea
                              type="text"
                              placeholder=" Message"
                              className="contact_text_area form-control contact_border shadow-none  resize-none"
                              {...register("Message", { required: true })}
                              aria-invalid={errors.Message ? "true" : "false"}
                            />
                            {errors.Message?.type === "required" && (
                              <p className="text-danger" role="alert">
                                * Define your industry type.
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 text-center">
                            <input type="submit" className="contact_button" />
                          </div>
                        </div>
                      </div>
                    </div>
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
