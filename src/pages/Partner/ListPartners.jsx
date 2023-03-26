import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Div, TitleList } from "../../assets/style/cards";
import PartnerCard from "../../components/Cards/PartnerCard";
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.jpeg";
import { getPartners } from "../../redux/action/partner";

function ListPartners() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partnerReducer.partners);

  useEffect(() => {
    dispatch(getPartners());
  }, [dispatch]);

  return (
    <Div>
      <TitleList>
        List Partners{" "}
        <Link to="add">
          <img width="40px" src={plus} alt="" />
        </Link>
      </TitleList>
      <Container>
        {partners.map((part, i) => (
          <PartnerCard
            key={i}
            id={part.id}
            name={part.name}
            email={part.email}
            phone={part.phone}
            address={part.address}
          />
        ))}
      </Container>
    </Div>
  );
}

export default ListPartners;
