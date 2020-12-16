import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobService {

  constructor() {
    console.log("Creating Jobs Service");
  }

  createJob() {
    console.log("creating job from the service");
    let job = new Job("new Job");
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
}

const service = new JobService();
export default service;