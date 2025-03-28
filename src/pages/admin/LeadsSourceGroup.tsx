import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import {
  useAddLeadsToGroupMutation,
  useGetLeadSourceGroupByIdQuery,
  useGetLeadSourcesQuery,
} from "../../lib/rtkQuery/challengeApi";
import menu from "../../assets/icons/Menu.svg";
import PopoverMenu from "../../components/ui/popup/PopupMenu";
import Spinner from "../../components/ui/loader/Spinner";

const LeadsSourceGroup = () => {
  const location = useLocation();
  const id = location.state?.id;
  const { data, refetch: refecthLeadsSourceById } =
    useGetLeadSourceGroupByIdQuery(id);
  const { data: leadSources, refetch } = useGetLeadSourcesQuery({
    keyword: "",
    status: "",
  });

  const [addLeadsToGroup, { isLoading: isLoadingAddLeads }] =
    useAddLeadsToGroupMutation();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAction = async (action: string, sourceId: number) => {
    if (action === "add") {
      setLoadingId(sourceId);
      try {
        await addLeadsToGroup({
          groupId: id,
          leadSourceIds: [sourceId],
        }).unwrap();
        refetch();
        refecthLeadsSourceById();
      } catch (error) {
        console.error("Error adding lead to group:", error);
      } finally {
        setLoadingId(null);
      }
    }
  };

  return (
    <div>
      <CardLayout>
        <MainTitle title="Leads Source Group" />

        <div className="flex justify-between w-full">
          {/* Available Leads Source */}
          <CardLayout className="w-[49%]">
            <div className="flex justify-between items-center">
              <MainTitle title="Available Leads Source" />
              <h1 className="bg-(--secondary) rounded-full text-white py-1 px-3">
                {
                  leadSources?.leadSources?.filter(
                    (source: any) =>
                      !data?.group?.leadSources?.some(
                        (groupSource: any) => groupSource.id === source.id
                      )
                  ).length
                }
              </h1>
            </div>

            <div className="mt-1">
              {leadSources?.leadSources
                ?.filter(
                  (source: any) =>
                    !data?.group?.leadSources?.some(
                      (groupSource: any) => groupSource.id === source.id
                    )
                )
                .map((source: any) => (
                  <div
                    key={source.id}
                    className="p-3 border border-gray-300 rounded-lg flex justify-between items-center m-1"
                  >
                    <span className="text-sm font-medium">{source.name}</span>
                    {/* <span className="text-xs text-gray-600">
                      {source.status}
                    </span> */}
                    {loadingId === source?.id ? (
                      <Spinner color="text-black" />
                    ) : (
                      <PopoverMenu
                        triggerImage={menu}
                        options={[
                          {
                            label: "Add to Group",
                            onClick: () => handleAction("add", source.id),
                          },
                        ]}
                      />
                    )}
                  </div>
                ))}
            </div>
          </CardLayout>

          {/* Active Leads Source */}
          <CardLayout className="w-[49%]">
            <div className="flex justify-between items-center">
              <MainTitle title="Active Leads Source" />
              <h1 className="bg-(--secondary) rounded-full text-white py-1 px-3">
                {data?.group?.leadSources?.length}
              </h1>
            </div>

            <div className="mt-1">
              {data?.group?.leadSources?.map((source: any) => (
                <div
                  key={source.id}
                  className="p-3 border border-gray-300 rounded-lg flex justify-between items-center m-1"
                >
                  <span className="text-sm font-medium">{source.name}</span>
                  {/* <span className="text-xs text-gray-600">{source.status}</span> */}
                  <PopoverMenu
                    triggerImage={menu}
                    options={[
                      {
                        label: "Remove from Group",
                        onClick: () => handleAction("remove", source.id),
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </CardLayout>
        </div>
      </CardLayout>
    </div>
  );
};

export default LeadsSourceGroup;
