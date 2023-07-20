import React from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CImage,
  CButton,
  CButtonGroup,
  CPagination,
  CPaginationItem,
} from "@coreui/react";
import ReactImg from "../../assets/images/react.jpg";

export default function TotalUsers() {
  return (
    <div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">User Photo</CTableHeaderCell>

            <CTableHeaderCell scope="col">First Name</CTableHeaderCell>

            <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>

            <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>

            <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>

            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>

          <CTableRow>
            <CImage rounded src={ReactImg} width={50} height={50} />
            <CTableHeaderCell scope="row">First Name</CTableHeaderCell>

            <CTableDataCell>Last Name</CTableDataCell>

            <CTableDataCell>Email Id</CTableDataCell>

            <CTableDataCell>1234567890</CTableDataCell>

            <CButtonGroup role="group" aria-label="Basic mixed styles example">
              <CButton color="danger">Delete</CButton>

              <CButton color="warning">Edit</CButton>

              <CButton color="success">View</CButton>
            </CButtonGroup>
          </CTableRow>
        </CTableBody>
      </CTable>
      <br></br>
      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem>Previous</CPaginationItem>

        <CPaginationItem>1</CPaginationItem>

        <CPaginationItem>2</CPaginationItem>

        <CPaginationItem>3</CPaginationItem>

        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    </div>
  );
}
