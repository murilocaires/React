import { Card } from "./Card";
import { Text } from "./Text";
import { useCalculator } from "../context/CalculatorContext";
export function OperationHistory(){
    const { history } = useCalculator();

    return (
        <Card className="py-10 px-8 w-full">
            <Text as='h1' variant='heading' className='mb-4'>
                Histórico de operações
            </Text>
            {history.length > 0 ? (
                <ul className="flex flex-col gap-3">
                    {history.map((value, index) => (
                    <Text as="li" key={index}>{value}</Text>))}
                    </ul>
             ): <Text as="p" variant="muted">Não há operações</Text>
            }
            
        </Card>
    )
}