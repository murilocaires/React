import {Badge} from "../components/badge";
import Button from "../components/button";
import Card from "../components/card";
import Container from "../components/container";
import InputCheckbox from "../components/inputCheckbox";
import InputText from "../components/inputText";
import Skeleton from "../components/skeleton";
import {Text} from "../components/text";
import {Icon} from "../components/icon";
import ButtonIcon from "../components/buttonIcon";
import TrashIcon from "../assets/icons/trash.svg?react"
import SpinerIcon from "../assets/icons/spiner.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import Pencil from "../assets/icons/pencil.svg?react"


export default function PageComponents() {

  return (
    <Container>
    <div className="flex flex-col gap-6">

      <div className="flex flex-col">
        <Text variant={"body-sm-bold"} className="text-green-dark">Olá mundo</Text>
        <Text variant={"body-md-bold"} className="text-green-base">Olá mundo</Text>
        <Text variant={"body-md"} className="text-pink-dark">Olá mundo</Text>
      </div>
      
      <div className="flex gap-2">
        <Icon svg={TrashIcon}/>
        <Icon svg={PlusIcon}/>
        <Icon svg={Pencil}/>
        <Icon svg={SpinerIcon} animate />
        <Icon svg={CheckIcon} className="fill-green-base" />
      </div>
    
      <div className="flex gap-2 items-center ">
        <Badge variant="secondary">5</Badge>
       <Badge>5 de 20</Badge>
       <Badge loading>S</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-1 ">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={TrashIcon} loading />

      </div>

      <div>
        <InputText />
        
      </div>

       <div className="flex gap-1 ">
        <InputCheckbox />
         <InputCheckbox loading/>
      </div>

      <div>
        <Card size={"md"}>Olá mundo!</ Card>
      </div>

      <div className="flex flex-col gap-1">
        <Skeleton className=" h-5"/>
        <Skeleton className=" h-5"/>
        <Skeleton className="w-96 h-5"/>
      </div>

    </div>
    </Container>
  )
}