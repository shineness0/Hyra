const page = ({ params }) => {
  console.log(params);
  return <div>Welcome to teaching {params.teachingId}</div>;
};

export default page;
