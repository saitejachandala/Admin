import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
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
          placeholder="First Name"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter First name"
          id="validationTooltip01"
          label="First Name"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Last Name"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter user Last Name"
          id="validationTooltip02"
          label="Last Name"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomEmailid">Email Id</CFormLabel>

        <CInputGroup className="has-validation">
          <CInputGroupText>@</CInputGroupText>

          <CFormInput
            type="email"
            aria-describedby="inputGroupPrependFeedback"
            feedbackValid="Looks Good!."
            feedbackInValid="Please enter valid email id"
            id="validationCustomUsername"
            required
            tooltipFeedback
          />
        </CInputGroup>
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          placeholder="Address"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter user address"
          id="validationTooltip02"
          label="Address"
          required
          tooltipFeedback
        />
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormInput
          aria-describedby="validationTooltip04Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter a user city"
          id="validationTooltip04"
          label="City"
          required
          tooltipFeedback
        ></CFormInput>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormInput
          aria-describedby="validationTooltip05Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter user State"
          id="validationTooltip04"
          label="State"
          required
          tooltipFeedback
        ></CFormInput>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip06Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select a Id Proof"
          id="validationTooltip04"
          label="ID Proof"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Aadhar Card</option>
          <option>Voter ID</option>
          <option>Passport</option>
          <option>Driving License</option>
        </CFormSelect>
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormInput type="file" id="formFile" label="Id Proof file" />
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip07Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please select User Gender"
          id="validationTooltip04"
          label="Gender"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </CFormSelect>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormInput
          aria-describedby="validationTooltip08Feedback"
          feedbackValid="Looks good!"
          feedbackInvalid="Please enter user Mobile Number"
          id="validationTooltip04"
          label="Mobile Number"
          required
          tooltipFeedback
        ></CFormInput>
      </CCol>

      <CForm>
        <CFormTextarea
          id="exampleFormControlTextarea1"
          label="Remarks"
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

export default function AddUser() {
  return (
    <div className="adduser-div">
      <div className="adduser-img">
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
            <CCardTitle>Add new user</CCardTitle>

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
