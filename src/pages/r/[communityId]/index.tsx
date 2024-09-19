import React from "react";
import { NextPageContext } from "next";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/src/firebase/clientApp";
import { Community } from "@/src/atoms/communityAtom";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "@/src/components/Community/NotFound";
import Header from "@/src/components/Community/Header";
import PageContent from "@/src/components/Layout/PageContent";
type CommunityPageProps = {
  communityData: Community;
};
const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log("here is data", communityData);

  if (!communityData) {
    return <NotFound />;
  }
  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>LHS</>
        <>RHS</>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string,
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({
                id: communityDoc.id,
                ...communityDoc.data(),
              }),
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getserverSideProps error", error);
  }
}
export default CommunityPage;
