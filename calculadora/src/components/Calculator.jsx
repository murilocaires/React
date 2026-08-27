import { Button } from "./Button"
import { CalculatorDisplay } from "./CalculatorDisplay"
import { Card } from "./Card"
import { calculatorButtons } from '../data/calculatorButtons'

import "../hooks/useOperation"
import { useOperation } from "../hooks/useOperation";

export function Calculator(){

    const { operation, result, doOperation } = useOperation();
    
    function handleButtonClick(input){
        doOperation(input)
    }
    
    return (
        <Card className="flex flex-col gap-6.5 w-89 pt-14 px-8 pb-8">
            <CalculatorDisplay operation={operation} result={result}/>
            <div className="flex flex-col gap-3">
                {calculatorButtons.map((row, index)=>(
                <div key={`row-${index}`} className="flex gap-3">
                    {row.map( button => 
                    <Button
                        onClick={() => handleButtonClick(button.input)}
                        key={button.input} 
                        className={button.className || "w-16 h-16"} 
                        variant={button.variant}>
                        {button.input}
                    </Button>)}
                </div>))}
            </div>
        </Card>
    )
}