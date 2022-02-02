import longRunningFunction from "./longRunningFunction.js";
import Bull from "bull"

const consumer = function() {
  const imageProcessingQueue = new Bull('processing-image');

  imageProcessingQueue.process(function(job, done) {
    console.log("job.id", job.id, "job.data", job.data);

    longRunningFunction(job.data.imageURL);

    done(null, {imageURL: job.data.imageURL, result: "OK"});

  });
};

consumer();
