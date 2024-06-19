import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../Utility";
import Lists from "../Lists/Lists";
import ListedBooks from "../ListedBooks/ListedBooks";

const ListedBook = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobs = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobs) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <ListedBooks />

            <div>
                {appliedJobs.map(job => (
                    <Lists key={job.id} appliedJob={job} />
                ))}
            </div>
        </div>
    );
};

export default ListedBook;
