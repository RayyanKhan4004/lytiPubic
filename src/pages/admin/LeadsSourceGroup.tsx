import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardLayout from "../../components/layouts/CardLayout";
import MainTitle from "../../components/ui/typography/MainTitle";
import {
  useAddLeadsToGroupMutation,
  useGetLeadSourceGroupByIdQuery,
  useGetLeadSourcesQuery,
  useDeleteLeadSourceGroupMutation,
} from "../../lib/rtkQuery/challengeApi";
import menu from "../../assets/icons/Menu.svg";
import PopoverMenu from "../../components/ui/popup/PopupMenu";
import Spinner from "../../components/ui/loader/Spinner";

const LeadsSourceGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.id;

  const { data, refetch: refetchLeadsSourceById } =
    useGetLeadSourceGroupByIdQuery(id);
  const { data: leadSources, refetch } = useGetLeadSourcesQuery({
    keyword: "",
    status: "",
  });

  const [addLeadsToGroup, { isLoading: isLoadingAddLeads }] =
    useAddLeadsToGroupMutation();
  const [deleteLeadSourceGroup, { isLoading: isDeleting }] =
    useDeleteLeadSourceGroupMutation();
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
        refetchLeadsSourceById();
      } catch (error) {
        console.error("Error adding lead to group:", error);
      } finally {
        setLoadingId(null);
      }
    }
  };

  const handleDeleteGroup = async () => {
    if (!id) return;

    try {
      await deleteLeadSourceGroup(id).unwrap();
      console.log("Group deleted successfully");
      navigate("/admin/lead-source");
    } catch (error) {
      console.error("Error deleting lead source group:", error);
    }
  };

  return (
    <div>
      <CardLayout>
        <MainTitle title="Leads Source Group" />
        <CardLayout>
          <div className="flex justify-between items-center">
            {/* <InputField
              label="Group Name"
              name="name"
              control={control}
              type="text"
              placeholder="Group Name"
              error={errors.name?.message}
              className="w-[38%]"
            /> */}
            <div className="flex  flex-col">
              <label htmlFor="name">Group Name</label>
              <input
                id="name"
                type="text"
                value={data?.group?.name || ""}
                readOnly
                className="border border-gray-300 rounded-lg p-2.5 w-[250px] bg-gray-100"
              />
            </div>

            <button
              onClick={handleDeleteGroup}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all"
              disabled={isDeleting}
            >
              {isDeleting ? <Spinner color="text-white" /> : "Delete Group"}
            </button>
          </div>
        </CardLayout>

        <div className="flex justify-between w-full">
          {/* Available Leads */}
          <CardLayout className="w-[49%]">
            <div className="flex justify-between items-center">
              <MainTitle title="Available Leads Source" />
              <h1 className="bg-gray-600 rounded-full text-white py-1 px-3">
                {leadSources?.leadSources?.filter(
                  (source: any) =>
                    !data?.group?.leadSources?.some(
                      (groupSource: any) => groupSource.id === source.id
                    )
                ).length || 0}
              </h1>
            </div>

            <div className="mt-1">
              {leadSources?.leadSources?.length > 0 ? (
                leadSources?.leadSources
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
                  ))
              ) : (
                <div className="p-3 text-center text-gray-500 border border-gray-300 rounded-lg">
                  No Data Found
                </div>
              )}
            </div>
          </CardLayout>

          {/* Active Leads */}
          <CardLayout className="w-[49%]">
            <div className="flex justify-between items-center">
              <MainTitle title="Active Leads Source" />
              <h1 className="bg-gray-600 rounded-full text-white py-1 px-3">
                {data?.group?.leadSources?.length || 0}
              </h1>
            </div>

            <div className="mt-1">
              {data?.group?.leadSources?.length > 0 ? (
                data?.group?.leadSources?.map((source: any) => (
                  <div
                    key={source.id}
                    className="p-3 border border-gray-300 rounded-lg flex justify-between items-center m-1"
                  >
                    <span className="text-sm font-medium">{source.name}</span>
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
                ))
              ) : (
                <div className="p-3 text-center text-gray-500 border border-gray-300 rounded-lg">
                  No Data Found
                </div>
              )}
            </div>
          </CardLayout>
        </div>
      </CardLayout>
    </div>
  );
};

export default LeadsSourceGroup;
