'use client';

import { SubmitButton } from "@/components/submitButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createLink } from "@/lib/links";
import { CreateLinkFormState } from "@/types";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { parse } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFormState } from "react-dom"
import { toast } from "sonner";

const initialState: CreateLinkFormState = {
    error: null
};

type ComponentProps = {
    cftsSiteKey?: string;
}

export const CreateLink = ({ cftsSiteKey }: ComponentProps) => {
    const [state, formAction] = useFormState(createLink, initialState);
    const [expirationType, setExpirationType] = useState("NONE");
    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState<string>();

    const turnstileRef = useRef<TurnstileInstance>();

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    }

    const expirationValue = useMemo(() => {
        if(time) {
            return parse(time, 'HH:mm', date || new Date()).getTime();
        }

        return date?.getTime();
    }, [date, time]);

    useEffect(() => {
        if(state.message) {
            toast.success(state.message);
            navigator.clipboard.writeText(state.link);

            setExpirationType('NONE');
            setDate(undefined);
            setTime(undefined);

            turnstileRef.current?.reset();
        }
    }, [state]);

    return(
        <form action={formAction} className="w-full flex flex-col gap-6" key={state.key}>
            <div className="flex flex-col gap-1">
                <Label htmlFor="url" isRequired>Target URL</Label>
                <Input id="url" name="url" placeholder="Enter url..." className="w-full" required  />
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex-1 w-full flex flex-col gap-1">
                    <Label htmlFor="slug">Custom Slug</Label>
                    <Input id="slug" name="slug" placeholder="Enter custom slug..." className="w-full" startAdornment={<span className="pointer-events-none">/</span>} />
                </div>
                <div className="flex-1 w-full flex flex-col gap-1">
                    <Label htmlFor="expirationType" isRequired>Expires</Label>
                    <Select name="expirationType" value={expirationType} onValueChange={setExpirationType}>
                        <SelectTrigger id="expirationType">
                            <SelectValue placeholder="Expiration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="NONE">Never</SelectItem>
                            <SelectItem value="DATE">After Date</SelectItem>
                            <SelectItem value="CLICKS">After Clicks</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {expirationType !== "NONE" && (
                <div className="flex flex-col sm:flex-row items-start gap-3">
                    <div className="flex-1 w-full flex flex-col gap-1">
                        {expirationType === "DATE" && (
                            <>
                                <Label htmlFor="date" isRequired>Date</Label>
                                <DatePicker date={date} setDate={setDate} />
                            </>
                        )}
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-1">
                        {expirationType === "CLICKS" && (
                            <>
                                <Label htmlFor="expirationValue" isRequired>Clicks</Label>
                                <Input id="expirationValue" name="expirationValue" type="number" placeholder="Enter number of clicks..." className="w-full" min="1" required />
                                <HoverCard>
                                    <HoverCardTrigger asChild className="self-end">
                                        <Button variant="link" className="text-xs h-fit py-1 px-2 active:pointer-events-none" role="tooltip">Sending this to other people?</Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="p-2">
                                        <p className="text-sm">You know that cool link preview you get when you send a link in Slack or Discord?<br/><br />We try to ignore them, but those can count as clicks too. Maybe <strong className="text-primary">allow a few extra clicks</strong>, just in case?</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </>
                        )}

                        {expirationType === "DATE" && (
                            <>
                                <Label htmlFor="time" isRequired>Time</Label>
                                <Input id="time" name="time" type="time" placeholder="Enter time..." className="w-full" required value={time} onChange={handleTimeChange} />
                            </>
                        )}
                    </div>

                    {expirationType === "DATE" && (
                        <input id="expirationValue" name="expirationValue" type="hidden" value={expirationValue} />
                    )}
                </div>
            )}

            <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                    <Checkbox id="metaPassthrough" name="metaPassthrough" aria-label="Show real metadata in link previews" />
                    <Label htmlFor="metaPassthrough" className="cursor-pointer">Show real metadata in link previews</Label>
                </div>
            </div>

            {cftsSiteKey && <Turnstile ref={turnstileRef} siteKey={cftsSiteKey} className="self-end" options={{
                appearance: 'interaction-only'
            }} />}

            <SubmitButton title="Create Link" className="w-fit self-end" />

            <p aria-live="polite" className="text-destructive text-center empty:hidden">{state?.error}</p>
        </form>
    )
}