import jobServices from "../../services/jobServices";

const jobLoader = async ({ params }) => {
  try {
    const response = await jobServices.getJob(params.id);
    return response.data;
  } catch (error) {
    return {};
  }
};

export default jobLoader;
