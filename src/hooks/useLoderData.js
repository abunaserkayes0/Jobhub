const useLoaderData = async () => {
  const jobs = await fetch("jobs.json");
  const data = await jobs.json();
  return data;
};
export default useLoaderData;
