'use client';

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom"

type ComponentProps = {
    title: string;
} & React.ComponentPropsWithoutRef<typeof Button>

export const SubmitButton = ({ title, ...rest }: ComponentProps) => {
    const { pending } = useFormStatus();

    return(
        <Button type="submit" aria-disabled={pending} {...rest}>
            {pending ? <Loader2 className="animate-spin" /> : title}
        </Button>
    )
}