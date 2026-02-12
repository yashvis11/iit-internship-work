type EnrollmentProps = {
  //the structure of the props that will be passed by the parent
  onEnroll: ()=>void; //cannot be onEnroll: handleEnroll because
  //handleEnroll is a variable not a function so it cannot be used as type
  //the type is void not because setEnroll is void but because logically it is not supposed
  //to return anything
};

export default function EnrollmentCard(props: EnrollmentProps){
    return(
        <>
            <button onClick={props.onEnroll}>Enroll Now</button> {/*props.onEnroll is used as 
            onEnroll is not a variable defined locally and is a property of props*/}
        </>
    )
}