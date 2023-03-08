type GreetProps = {
  name?: string;
};

const Greet = ({ name }: GreetProps) => {
  return <div>hello {name}</div>;
};

export default Greet;
