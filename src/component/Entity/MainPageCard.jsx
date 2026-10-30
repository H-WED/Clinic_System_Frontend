import "../Entity/MainPageCard.scss";
import { CardContainer, Card } from "../UI/Card.jsx";
function MainPageCard({ clinic_content }) {
  if (clinic_content === null) {
    return <p>Loading clinics...</p>;
  }
  return (
    <>
      {clinic_content.map((clinic_c) => {
        return (
          <>
            <CardContainer>
              <Card key={clinic_c.Clinic_ID}>
                <div className="clinic_information">
                  <h1>{clinic_c.Clinic_Name}</h1>
                  <p>{clinic_c.Clinic_Address}</p>
                </div>
              </Card>
            </CardContainer>
          </>
        );
      })}
    </>
  );
}

export default MainPageCard;
