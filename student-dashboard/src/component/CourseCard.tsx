type CourseCardProps = {
  //the structure of the props that will be passed by the parent
  title: string;
  level: string;
  students: number;
};

export default function CourseCard(props: CourseCardProps) {
  //Only show UI does not have dynamic behaviour yet
  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "14px",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      >
        <h3>{props.title}</h3>
        <p>Level: {props.level}</p>
        <p>Number of Students:{props.students}</p>
      </div>
    </>
  );
}
