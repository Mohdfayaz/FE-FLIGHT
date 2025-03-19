import React from "react";
import { useLoaderData } from "react-router";
import jobServices from "../../services/jobServices";
import { toast } from "react-toastify";

const CandidateDashboard = () => {
  const jobs = useLoaderData();

  const handleJobApply = (jobId) => {
    jobServices
      .applyJob(jobId)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Candidate Dashboard</h2>
      <div>
        {jobs.map((job) => (
          <div key={job._id} className="border rounded p-3 mb-3">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button
              className="bg-green-500 text-white px-3 py-1 mt-2"
              onClick={() => handleJobApply(job._id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateDashboard;
