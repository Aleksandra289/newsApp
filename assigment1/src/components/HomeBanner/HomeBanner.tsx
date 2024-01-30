import {
  StyledHomeBannerDiv,
  StyledTextDiv,
  StyledImg
} from "./StyledHomeBanner";
import Text from "../Text/Text";
import image from "../../assets/slikaaa 1.png";

type HomeBannerProps = {
  title: string;
  description: string;
};

export default function HomeBanner({ title, description }: HomeBannerProps) {
  return (
    <StyledHomeBannerDiv>
      <StyledTextDiv>
        <Text
          fontSize="extraLarge"
          fontWeight="extraBold"
          lineHeight="higher"
          color="white"
        >
          {title}
        </Text>
        <Text
          fontSize="medium"
          fontWeight="regular"
          lineHeight="higher"
          color="pale"
        >
          {description}
        </Text>
        <StyledImg src={image} alt="news"></StyledImg>
      </StyledTextDiv>
    </StyledHomeBannerDiv>
  );
}
