type JobListItemProps = {
  id: number;
  title: string;
  employmentType: string;
  active: boolean
};

export function JobListItem({ id, title, employmentType, active }: JobListItemProps) {
  return (
    <>
      <div><span>{title}</span><span>Alle Geschlechter willkommen</span></div>
      <div>{employmentType}</div>
    </>
  );
}
