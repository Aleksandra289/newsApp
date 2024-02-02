import {
  StyledBannerDiv,
  StyledTextDiv,
  StyledImg,
  StyledTextAndImg
} from "./StyledBanner";
import Text from "../Text/Text";
import { ThemeColor } from "../../shared/theme/theme";

type BannerProps = {
  title: string;
  description: string;
  image: string;
  firstGradientColor?: ThemeColor;
  secondGradientColor?: ThemeColor;
};

export default function Banner({
  title,
  description,
  image,
  firstGradientColor = "turquoise",
  secondGradientColor = "classicBlue"
}: BannerProps) {
  return (
    <StyledBannerDiv
      $firstGradientColor={firstGradientColor}
      $secondGradientColor={secondGradientColor}
    >
      <StyledTextAndImg>
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
        </StyledTextDiv>
        <StyledImg src={image} alt="news"></StyledImg>
      </StyledTextAndImg>
    </StyledBannerDiv>
  );
}
