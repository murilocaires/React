
import { Calculator } from "./components/Calculator"
import { OperationHistory } from "./components/OperationHistory"
import { CalculatorProvider } from "./context/CalculatorContext";


export function App() {
  return (
   <main className=" min-h-screen bg-linear-[180deg,#807ECE_0%,#807ECE_100%] text-(--text) font-(--font-sans) py-16 px-4 sm:px-40 flex flex-col sm:flex-row items-center sm:items-stretch gap-4" >
      <CalculatorProvider>
        <Calculator/>
        <OperationHistory/>
      </CalculatorProvider>
   </main>
   
  )
}

export default App
