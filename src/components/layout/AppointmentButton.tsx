"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AppointmentButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>Prendre Rendez-vous</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white">Prendre un rendez-vous</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-4">
          <Button asChild>
            <a href="https://www.doctolib.fr/dentiste/chateau-thierry/marouane-echetouani" target="_blank" rel="noopener noreferrer">
              Dr. Marouane Echetouani
            </a>
          </Button>
          <Button asChild>
            <a href="https://www.doctolib.fr/dentiste/chateau-thierry/ahmed-echetouani" target="_blank" rel="noopener noreferrer">
              Dr. Ahmed Echetouani
            </a>
          </Button>
          <Button asChild>
            <a href="https://www.doctolib.fr/dentiste/vincennes/melanie-charron" target="_blank" rel="noopener noreferrer">
              Dr. Mélanie Charron
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}