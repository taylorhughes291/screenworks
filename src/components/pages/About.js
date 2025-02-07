import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";
import { commonStyles } from "../../themes";

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

  return (
    <InfoPage
      title={pageData?.aboutPageTitle}
      imgSrc={pageData?.aboutPageImage?.url}
      description=""
      isLoaded={cmsData.isLoaded}
      overrideStyles={commonStyles.basicInfoTabletStyles}
    >
      <div>
        <StructuredText data={pageData?.aboutPageDescription}></StructuredText>
      </div>
    </InfoPage>
  );
};

export default About;
