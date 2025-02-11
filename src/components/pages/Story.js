import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";
import { commonStyles } from "../../themes";

const Story = () => {
  const query = `query MyQuery {
    screenworksSite {
      storyPageTitle
      storyPhoto {
        url
        alt
      }
      storyDescription {
        blocks
        links
        value
      }
    }
  }`;

  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;

  return (
    <InfoPage
      title={pageData?.storyPageTitle}
      imgData={pageData?.storyPhoto}
      description=""
      isLoaded={cmsData.isLoaded}
      overrideStyles={commonStyles.basicInfoStyles}
    >
      <StructuredText data={pageData?.storyDescription} />
    </InfoPage>
  );
};

export default Story;
