"use client";

import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/data";

interface ServiceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service;
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl h-[90vh] p-0 flex flex-col">
                <div className="p-6 pb-0">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-headline text-center">
                            {service.title}
                        </DialogTitle>
                    </DialogHeader>
                </div>

                <ScrollArea className="flex-1 px-6 overflow-y-auto">
                    <div className="pb-6">
                        <div className="grid gap-6">
                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.imageHint}
                                />
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.longDescription}
                            </p>
                        </div>
                    </div>
                </ScrollArea>
                <DialogFooter className="p-4 border-t flex items-center">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Fermer
                            </Button>
                        </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
