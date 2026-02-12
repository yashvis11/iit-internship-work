type CourseCardProps={ //the structure of the props that will be passed by the parent
  title: string;
  progress: number,
  studentName: string;
}

export default function CourseCard(props: CourseCardProps) {  //Only show UI does not have dynamic behaviour yet
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
        <p>{props.progress}%</p>
      </div>
    </>
  );
}
