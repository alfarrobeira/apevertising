"use client";

import useSWR from "swr";
import { JobListItem } from "./JobListItem";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function JobList() {
  //Set up SWR to run the fetcher function when calling "/api"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  //const { data: comments, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/comments?_limit=6", fetcher);
  const { data, error, isLoading } = useSWR("/api", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load jobs</div>;

  //Handle the loading state
  if (isLoading) return <div>Loading jobs...</div>;

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div className="py-4 lg:py-10">
      <ul>
          {data.jobs.map((job: any, index: number) => (
            // <li key={index}>
            //   {job.title}
            // </li>
            <JobListItem key={job.id} {...job} />
          ))}
        </ul>
    </div>
  );
}
