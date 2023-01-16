import clsx from "clsx";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface BaseLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
  data: any;
}

export default function BaseLayout({
  data,
  children,
  className,
  ...props
}: BaseLayoutProps) {
  return (
    <div className={clsx("flex min-h-screen flex-col", className)}>
      <Header {...props} data={data} />
      <main className={clsx("grow bg-white")}>{children}</main>
      <Footer />
    </div>
  );
}
