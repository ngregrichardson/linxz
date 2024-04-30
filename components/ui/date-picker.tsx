import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";

type ComponentProps = {
    date?: Date;
    setDate: SelectSingleEventHandler;
    placeholder?: string;
}

export const DatePicker = ({ date, setDate, placeholder }: ComponentProps) => <Popover>
    <PopoverTrigger asChild>
        <Button variant="outline" className={cn('justify-start items-center leading-none text-left font-normal', !date && 'text-muted-foreground')} id="date" name="date">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? <span>{format(date, 'MMM do, yyyy')}</span> : placeholder || <span>Select date...</span>}
        </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto bg-background border-border border rounded-md mt-1">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus required fromDate={new Date()} />
    </PopoverContent>
</Popover>