import longRunningFunction from "./longRunningFunction.js";
import Bull from "bull"

const consumer = function() {
  const imageProcessingQueue = new Bull('processing-image');

  imageProcessingQueue.process(async function(job) {
    console.log("job.id", job.id, "job.data", job.data);

    longRunningFunction(job.data.imageURL);

    if (job.id % 2 === 0) {
      throw new Error("job failed")
    }

    return {imageURL: job.data.imageURL, result: "OK"};
  });
};

consumer();
