import { DataWrapper, Wrapper } from "./styles";
import { Vendor } from "../../../types/vendor";
import TextComponents from "../../../components/TextComponents";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "../../../components/Touchables/Buttons";
import { useNavigate } from "react-router";

type Props = {
  vendor: Vendor;
};

const ServicesDisplay = (props: Props) => {
  const services = props.vendor.services;
  const vendorId = props.vendor.id;
  const navigate = useNavigate();

  const handleClick = (service: Vendor["services"][0]) => {
    navigate(`/bookvisit/${vendorId}/${service.id}`, {
      state: { service, vendor: props.vendor },
    });
  };
  return (
    <Wrapper>
      {services.map((item) => {
        return (
          <DataWrapper key={item.id}>
            <TextComponents.Subtitle accent>
              {item.title}
            </TextComponents.Subtitle>
            <TextComponents.Body>{item.description}</TextComponents.Body>
            <TextComponents.Body>{item.category}</TextComponents.Body>
            <TextComponents.Body>{item.subcategory}</TextComponents.Body>
            <TextComponents.Body>
              minimum duration {item.durationMin}min
            </TextComponents.Body>
            <DataWrapper style={{ backgroundColor: "transparent" }}>
              {item.includes &&
                item.includes.map((include) => {
                  return (
                    <TextComponents.Body key={include}>
                      <FaLongArrowAltRight /> {include}
                    </TextComponents.Body>
                  );
                })}
            </DataWrapper>
            {item.discount ? (
              <s>
                <TextComponents.Body>
                  {item.priceRange.min}pln{" "}
                  {item.priceRange.max && `- ${item.priceRange.max}pln`}
                </TextComponents.Body>
              </s>
            ) : (
              <TextComponents.Body>
                {item.priceRange.min}pln{" "}
                {item.priceRange.max && `- ${item.priceRange.max}pln`}
              </TextComponents.Body>
            )}
            {item.discount && (
              <TextComponents.Body accent>
                new price: {item.discount}pln
              </TextComponents.Body>
            )}

            <Button
              style={{ alignSelf: "flex-end", marginTop: "1rem" }}
              onClick={() => handleClick(item)}
            >
              Book a visit
            </Button>
          </DataWrapper>
        );
      })}
    </Wrapper>
  );
};

ServicesDisplay.defaultProps = {
  // bla: 'test',
};

export default ServicesDisplay;
