import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CFormInput,
  CCol,
  CForm,
  CFormTextarea,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const MyForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Car Name"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter car name"
          id="validationTooltip01"
          label="Car Name"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Max Power"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter car max power"
          id="validationTooltip02"
          label="Max Power"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Top Speed"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter car top speed"
          id="validationTooltip02"
          label="Top Speed"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Motor"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter car motor cc"
          id="validationTooltip02"
          label="Motor"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip04Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select a gear type"
          id="validationTooltip04"
          label="Gear Type"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Automatic</option>
          <option>Manual</option>
        </CFormSelect>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip05Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select a Seater type"
          id="validationTooltip04"
          label="Seater"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </CFormSelect>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip06Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select a Fuel type"
          id="validationTooltip04"
          label="Fuel Type"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>CNG</option>
          <option>Electric</option>
          <option>Petrol & CNG</option>
          <option>Diesel & CNG</option>
        </CFormSelect>
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Color"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter car color"
          id="validationTooltip02"
          label="Color"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip07Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select Air Condition"
          id="validationTooltip04"
          label="Air Condition"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Yes</option>
          <option>No</option>
        </CFormSelect>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip08Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select Music"
          id="validationTooltip04"
          label="Music"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Yes</option>
          <option>No</option>
        </CFormSelect>
      </CCol>

      <CForm>
        <CFormTextarea
          id="exampleFormControlTextarea1"
          label="Car Description"
          rows={5}
          placeholder="Enter your text here"
        ></CFormTextarea>
      </CForm>

      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  );
};

export default function AddNewCar() {
  return (
    <div className="addcar-div">
      <div className="addcar-img">
        <CCard style={{ width: "18rem" }}>
          <CCardImage
            component="svg"
            orientation="top"
            width="100%"
            height="162"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Add Photo</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <CIcon icon={icon.cilImagePlus} size="sm" />
          </CCardImage>

          <CCardBody>
            <CCardTitle>Add new car</CCardTitle>

            <div className="mb-3">
              <CFormInput type="file" id="formFile" />
            </div>

            <CButton href="#">Upload</CButton>
          </CCardBody>
        </CCard>
      </div>
      <br></br>
      <div>
        <MyForm />
      </div>
    </div>
  );
}
