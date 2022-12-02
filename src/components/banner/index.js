import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();

  return (
      <BannerContainer >

        <BannerImage src="/images/banner/stray.jpeg" />
        <BannerContent>
          <BannerTitle variant="h2">
            New Games in 2022!
          </BannerTitle>

          <BannerDescription variant="subtitle">
           Check out what we have!
          </BannerDescription>


        </BannerContent>
      </BannerContainer>
  );
}