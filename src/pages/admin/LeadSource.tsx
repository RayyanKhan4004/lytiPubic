import { useState } from "react";
import copy from "../../assets/icons/CopySimple.svg";
import archieve from "../../assets/icons/ArchiveBox.svg";
import Breadcrumb from "../../components/common/BreadCrumb";

import CustomizableDropdown from "../../components/common/CustomizableDropdown";
import MainTitle from "../../components/ui/typography/MainTitle";
import CardLayout from "../../components/layouts/CardLayout";
import InputField from "../../components/inputs/InputFields";
import { SubmitHandler, useForm } from "react-hook-form";
import { LeadSourceType } from "../../utils/types";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import {
  useAddLeadSourceGroupMutation,
  useAddLeadSourceMutation,
  useGetLeadSourcesQuery,
} from "../../lib/rtkQuery/challengeApi";
import Spinner from "../../components/ui/loader/Spinner";
import toast from "react-hot-toast";
import SelectField from "../../components/inputs/SelectField";
import { LeadSorceStatusOptions, roleOption } from "../../utils/options";
import SearchInput from "../../components/inputs/SearchInput";

const LeadSource = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    register,
    handleSubmit: handleSubmitLeadSource,
    formState: { errors: leadSourceErrors },
    reset: resetLeadSource,
    control: leadSourceControl,
  } = useForm<LeadSourceType>({
    defaultValues: {
      name: "",
    },
  });

  const {
    register: registerGroup,
    handleSubmit: handleSubmitGroupForm,
    formState: { errors: groupErrors },
    reset: resetGroup,
    control: groupControl,
  } = useForm<{ groupName: string }>({
    defaultValues: {
      groupName: "",
    },
  });

  const { data: leadSources, isLoading, refetch } = useGetLeadSourcesQuery();
  console.log(leadSources, "=source==");

  const [addLeadSource, { isLoading: isLoadingLeadSource, error }] =
    useAddLeadSourceMutation();

  const [addLeadSourceGroup, { isLoading: isLoadingLeadSourceGroup }] =
    useAddLeadSourceGroupMutation();

  const onSubmitLeadSource: SubmitHandler<LeadSourceType> = async (data) => {
    try {
      await addLeadSource(data);
      toast.success("Lead source created successfully");
      resetLeadSource({ name: "" });
      refetch();
    } catch (error: any) {
      toast.error(error?.message?.name || "Error in creation");
    }
  };

  const handleSubmitGroup = async (data: { groupName: string }) => {
    try {
      await addLeadSourceGroup({ name: data.groupName });
      toast.success("Lead source group created successfully");
      resetGroup({ groupName: "" });
      refetch();
    } catch (error: any) {
      toast.error(error?.message?.name || "Error in creation");
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
  };
  return (
    <div className="w-full px-4 my-8 font-Poppins">
      <Breadcrumb items={["Admin", "Lead Sources"]} />
      <div className="w-full flex justify-between  my-6">
        <div className="shadow-(--cardShadow) rounded-2xl bg-white w-[77%] px-4 min-h-[90vh] py-4">
          <div className="font-Poppins flex justify-between items-center w-full ">
            <MainTitle title="Configured Lead Sources" />
            <div className="flex items-center gap-3">
              <SearchInput
                debounceTimeout={500}
                placeholder="Search..."
                onChange={handleSearch}
              />
              {/* <SelectField
                label=""
                name="status"
                control={control}
                options={LeadSorceStatusOptions}
                placeholder="Status"
                error={errors.status?.message}
                required={false}
                height="46px"
              /> */}

              <div className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] px-3 rounded-xl text-white">
                <img src={copy} alt="" />
              </div>
            </div>
          </div>

          <div className="my-4 ">
            {leadSources?.leadSources?.map((e: any, i: number) => (
              <div
                key={i}
                className="border-t-[1.5px] border-(--smoke) flex justify-between items-center py-3"
              >
                <div className="flex items-center gap-4 text-sm">
                  <input
                    type="checkbox"
                    className="accent-(--primary) h-[21px] w-[21px]"
                  />
                  <h2>{e.name}</h2>
                </div>
                <div className="bg-(--secondary) flex items-center gap-2 rounded-xl px-5 w-fit h-[32px]">
                  <img src={archieve} alt="" />
                  <p className="text-white">
                    {e?.status === "Active" ? "Archive" : "Archived"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6  w-[21%] ">
          <form onSubmit={handleSubmitLeadSource(onSubmitLeadSource)}>
            <CardLayout className="mt-0">
              <MainTitle title="Add Lead Sources" />
              <div>
                <InputField
                  label="Lead Source"
                  name="name"
                  control={leadSourceControl}
                  type="text"
                  required={true}
                  placeholder="Enter name"
                  error={leadSourceErrors.name?.message}
                />
                <p className="text-greyText text-xs font-semibold mt-1">
                  Add custom source
                </p>
              </div>

              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-full px-8 justify-center rounded-xl text-white"
              >
                {isLoadingLeadSource ? <Spinner /> : "Add"}
              </button>
            </CardLayout>
          </form>

          <form onSubmit={handleSubmitGroupForm(handleSubmitGroup)}>
            <CardLayout className="mt-0">
              <MainTitle title="Add Lead Source Group" />
              <div>
                <InputField
                  label="Group name"
                  name="groupName"
                  control={groupControl}
                  type="text"
                  required={true}
                  placeholder="Enter name"
                  error={groupErrors.groupName?.message}
                />
                <p className="text-greyText text-xs font-semibold mt-1">
                  Add custom source
                </p>
              </div>

              <button
                type="submit"
                className="bg-(--primary) flex items-center cursor-pointer gap-1.5 text-sm h-[44px] w-full px-8 justify-center rounded-xl text-white"
              >
                {isLoadingLeadSourceGroup ? <Spinner /> : "Add"}
              </button>
            </CardLayout>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadSource;
