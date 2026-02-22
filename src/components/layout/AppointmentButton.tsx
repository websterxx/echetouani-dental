"use client";

import { doctors } from "@/lib/data";
import { Button } from "@/components/ui/button";
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
          <DialogTitle className="text-black">
            Prendre un rendez-vous
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 p-4">
          {doctors.map((doctor, index) => (
            <Button key={index} asChild>
              <a
                href={doctor.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. {doctor.firstName} {doctor.lastName}
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}