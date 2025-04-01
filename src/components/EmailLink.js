import { useFetchDatoCms } from "../helpers/customHooks";

const EmailLink = () => {
  const query = `query MyQuery {
    screenworksSite {
        emails {
            name
            value
            primary
        }
      }
    }`;
  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;
  const primaryEmail = pageData?.emails.find((item) => item.primary)?.value;
  return <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>;
};

export default EmailLink;
