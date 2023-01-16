import HeaderBar from "../HeaderBar";
import Navbar from "../Navbar";

export interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
  data: any;
}

export default function Header({ data, className, ...props }: HeaderProps) {
  return (
    <header {...props}>
      <HeaderBar />
      <Navbar data={data} />
    </header>
  );
}
