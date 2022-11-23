import apiClient from "../../../lib/client";

const endpoint = "/upload";

const uploadFormData = async (formData, path_id) => {
  let { data, ok, problem } = await apiClient.post(
    endpoint + "/files/" + path_id,
    formData
  );
  if (!ok) return console.warn(problem);
  console.log("Success!");
  return data;
};

const getPreview = async (id) => {
  let { data } = await apiClient.get(endpoint + "/files/" + id);
  return data;
};

export { uploadFormData, getPreview };
