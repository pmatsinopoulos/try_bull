import Bull from "bull"

console.log("Background long running jobs with Bull...");

const producer = function () {
  const imageProcessingQueue = new Bull('processing-image');

  console.log("About to enqueue 2 jobs");

  (async function () {
    const job1 = await imageProcessingQueue.add({imageURL: 'https://picsum.photos/1920/1080'});

    const job2 = await imageProcessingQueue.add({imageURL: 'https://picsum.photos/200/200'});
  })();
};

producer();


