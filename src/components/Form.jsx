"use client";
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { useForm } from "react-hook-form";
// import { Form } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const FormSchema = z.object({
//   rankingType: z.number().min(1, {
//     message: "Rank inválido!"
//   }),
// })

const FormComponent = () => {
  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // })
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione um critério" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pontos</SelectLabel>
          <SelectItem value="0">Kills</SelectItem>
          <SelectItem value="1">Vitórias</SelectItem>
          <SelectItem value="2">XP</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


export default FormComponent;