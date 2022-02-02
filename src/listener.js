import Bull from "bull";

const listener = function() {
  const imageProcessingQueue = new Bull('processing-image');

  imageProcessingQueue.on('global:completed', (job, result) => {
    console.log("Job Completed: ", job, "Result: ", result);
  })
};

listener();

