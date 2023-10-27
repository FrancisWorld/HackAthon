import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {motion} from "framer-motion";
import Form  from "@/components/Form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"


const Config = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <motion.div className='m-4'>
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className='bg-white text-black hover:bg-white/60 text-xl' >Config</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Config</DialogTitle>
          <DialogDescription>
            Altere a forma de cálculo de pontos para ser exibido o <strong>LeaderBoard</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Base de pontos
            </Label>
            <Form/>
          </div>
        </div>
        <DialogFooter>
          <Button className='bg-green-600 hover:bg-green-600/50 text-white' type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </motion.div>
  );
};

export default Config;
