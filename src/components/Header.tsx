type HeaderProps = {
  text?: string;
};

export const Header = ({ text = "Hello world!!!" }: HeaderProps) => {
  return <h1>{text}</h1>;
};
