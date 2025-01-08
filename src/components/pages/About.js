import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";

const About = () => {
  const query = `query MyQuery {
  screenworksSite {
    aboutPageDescription {
      value
      blocks
      links
    }
    aboutPageImage {
      url
    }
    aboutPageTitle
  }
}`;

  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;
  console.log(cmsData);
  return (
    <InfoPage
      title={pageData?.aboutPageTitle}
      imgSrc={pageData?.aboutPageImage?.url}
      description=""
    >
      <StructuredText data={pageData?.aboutPageDescription}></StructuredText>
    </InfoPage>
  );
};

export default About;
