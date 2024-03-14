import { Wrapper } from "./styles";
import { Vendor } from "../../../types/vendor";
import { ImageContainer } from "../../ServicesPage/SearchDisplayContainer/DisplaySection/SingleVendor/styles";
import { useEffect, useState } from "react";
import TextComponents from "../../../components/TextComponents";

type Props = {
  vendor: Vendor;
};

const DisplayVendorInfo = (props: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error fetching dog image:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchDogImage().then((url) => setImageUrl(url));
  }, []);
  const address = props.vendor.address;
  return (
    <Wrapper>
      <ImageContainer style={{ maxHeight: "100%" }} src={imageUrl} />
      <div>
        <TextComponents.Subtitle accent>
          {props.vendor.name}
        </TextComponents.Subtitle>
        <TextComponents.Body>{props.vendor.phoneNumber}</TextComponents.Body>
        <TextComponents.Body>{props.vendor.email}</TextComponents.Body>
        <TextComponents.Body>
          {address.street} {address.houseNumber}/{address.apartmentNumber}{" "}
          {address.city} {address.postalCode}
        </TextComponents.Body>
      </div>
    </Wrapper>
  );
};

DisplayVendorInfo.defaultProps = {
  // bla: 'test',
};

export default DisplayVendorInfo;
