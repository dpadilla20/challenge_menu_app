import styles from "./Footer.module.scss";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

export default function Footer({ className, ...props }: FooterProps) {
  const year = new Date();

  return (
    <footer className="w-full bg-[#073290] px-10">
      <div className="container flex py-5 items-center justify-center mx-auto">
        <div className="w-4/12 flex justify-center">
          <img src="/images/Isotipo.svg" />
        </div>
        <div className="w-4/12 text-center">
          <p className="text-white text-xs">{`© ${year.getFullYear()} Novopayment Inc. All rights reserved`}</p>
        </div>
        <div className="w-4/12 flex justify-center">
          <img src="/images/Isotipo.svg" />
        </div>
      </div>
    </footer>
  );
}
