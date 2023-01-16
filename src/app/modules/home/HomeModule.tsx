import BaseLayout from "@/app/layouts/base";

interface HomeModuleProps extends React.ComponentPropsWithoutRef<"div"> {
  data: any;
}

export default function HomeModule({ data, ...props }: HomeModuleProps) {
  return (
    <BaseLayout {...props} data={data}>
      <div className="bg-i-content bg-repeat-x bg-contain min-h-[80vh]">
        <div className="container mx-auto py-5">Home Container</div>
      </div>
    </BaseLayout>
  );
}
