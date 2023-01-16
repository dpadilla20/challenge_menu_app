export interface NavbarProps extends React.ComponentPropsWithoutRef<"div"> {
  data: any;
}

export const items: any = {
  card_list: "Lista de tarjetas",
  pays_transfer: "Transferencias y pagos",
  between_cards: "Entre tarjetas",
  banks: "Bancos",
  credit_card: "Tarjetas de crédito",
  support: "Atención al cliente",
  lock: "Bloqueos",
  change_pass: "Cambio de contraseña",
  enterprises: "Empresas",
};

export default function Navbar({ data, className, ...props }: NavbarProps) {
  const list = data?.lista[0];

  const getSubItems = (subItems: []) => {

    return (
      <div className="w-full">
        {subItems.map((item: any, index: number) => {
          return (
            <div key={index} className="w-full">
              {Object.keys(item).map((subitemKey, subitemIndex) => {
                return (
                  <div
                    key={subitemIndex}
                    className="relative group2 border p-2 border-black bg-white"
                  >
                    {items[subitemKey]}
                    {item[subitemKey] && item[subitemKey]?.length! > 0 && (
                      <div className="absolute top-0 left-full invisible group2-hover:visible z-40 w-[200px]">
                        {getSubItems(item[subitemKey])}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div {...props} className="container mx-auto">
      <div className="flex">
        {Object.keys(list).map((key, index: number) => {
          return (
            <div className="relative group mx-2" key={index}>
              <div className="hover:border-b-2 hover:border-[#073290] py-3">
                {items[key]}
                {list[key] && list[key]?.length > 0 && (
                  <div className="mt-4 absolute invisible group-hover:visible z-30">
                    {getSubItems(list[key])}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
