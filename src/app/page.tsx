import CardDividas from "@/components/layout/cards-dividas";

export default function Home() {
 return(
  <>
  <title>Brasil Transpararente</title>
   <CardDividas data={{
     orgao: "Ministério da Saúde",
     totalGasto: 123456789
   }} />
  </>
  );
}
