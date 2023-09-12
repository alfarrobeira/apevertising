type JobListItemProps = {
  id: number;
  title: string;
  jobType: string;
  experienceLevel: string;
};

export function JobListItem({
  id,
  title,
  jobType,
  experienceLevel,
}: JobListItemProps) {
  return (
    <>
      <div className="flex justify-between w-full shadow-md hover:shadow-lg space-x-3 md:space-x-5 lg:space-x-8 my-2 p-4">
        <div className="px-5">
          <div>
            <span className="uppercase">{title}</span>
            <span> (Alle Geschlechter willkommen)</span>
          </div>
          <div>
            {experienceLevel}, {jobType}
          </div>
        </div>
        <img src="/images/ArrowRight32.png" alt="arrow right" className="object-none" />
      </div>
    </>
  );
}
