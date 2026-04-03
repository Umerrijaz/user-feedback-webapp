// 1. Define the "shape" of the data
interface UserProps {
  name: string;
  emoji: string;
  role: string;
}

// 2. Tell the function to use that interface
export default function UserCard(props: UserProps) {
  return (
    <div>
      <span>{props.emoji}</span>
      <h2>Hello, {props.name}!</h2>
      <p>{props.role}</p>
    </div>
  );
}
