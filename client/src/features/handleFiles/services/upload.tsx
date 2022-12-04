import apiClient from "../../../lib/client";

const endpoint = "/upload";

const uploadFormData = async (formData: FormData, path_id: string) => {
  let { data, ok, problem } = await apiClient.post(
    endpoint + "/files/" + path_id,
    formData
  );
  if (!ok) return console.warn(problem);
  console.log("Success!");
  return data;
};

export { uploadFormData };
