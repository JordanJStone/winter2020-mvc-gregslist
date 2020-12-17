import { ProxyState } from "../AppState.js"
import JobsService from "../Services/JobsService.js"

//Private
function _drawJobs() {
  let jobs = ProxyState.jobs
  let templates = ''
  jobs.forEach(job => {
    templates += job.Template;
  });
  document.getElementById("jobs").innerHTML = templates;
}



//Public
export default class JobsController {

  constructor() {
    console.log("Building Job Controller");
    _drawJobs();
  }


  createJob(event) {
    event.preventDefault();
    let formData = event.target;
    console.log("creating the job");
    JobsService.createJob();
    _drawJobs();
  }
}