interface Props {
  children: string;
  color?: "dark" | "primary"; // "?" khong can khai bao ben App.tsx, chi co the chon 2 mau o day
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
