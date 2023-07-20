import React from "react";
import ReactImg from "../../assets/images/react.jpg";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardTitle,
  CPagination,
  CPaginationItem,
} from "@coreui/react";
export default function availableCars() {
  return (
    <div className="divAvailabecars">
      <div className="one-available-cars">
        <CCardGroup>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>
        </CCardGroup>
      </div>

      <br></br>

      <div className="two-available-cars">
        <CCardGroup>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>
        </CCardGroup>
      </div>

      <br></br>

      <div className="three-available-cars">
        <CCardGroup>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>

          <CCard>
            <CCardImage orientation="top" src={ReactImg} />

            <CCardBody>
              <CCardTitle>Card title</CCardTitle>

              <CButton href="#">Delete</CButton>
            </CCardBody>

            <CCardFooter>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardFooter>
          </CCard>
        </CCardGroup>
      </div>

      <br></br>

      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>

        <CPaginationItem>1</CPaginationItem>

        <CPaginationItem>2</CPaginationItem>

        <CPaginationItem>3</CPaginationItem>

        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  );
}
