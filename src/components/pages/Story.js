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
      imgSrc={pageData?.storyPhoto?.url}
      description=""
      isLoaded={cmsData.isLoaded}
      overrideStyles={commonStyles.basicInfoTabletStyles}
    >
      <StructuredText data={pageData?.storyDescription} />
    </InfoPage>
  );
};

export default Story;
