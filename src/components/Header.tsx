type HeaderProps = {
  text?: string;
};

export const Header = ({ text = "Hello world" }: HeaderProps) => {
  return (
    <h1 style={{ fontSize: "36px", textAlign: "left", marginBottom: "36px" }}>
      {text}
    </h1>
  );
};
