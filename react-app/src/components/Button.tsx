interface Props {
  children: string;
  color?: string; // "?" khong can khai bao ben App.tsx
  onClick: () => void;
}
const Button = ({ children, onClick, color = "dark" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
