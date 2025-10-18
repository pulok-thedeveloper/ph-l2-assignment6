/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { useSendOTPMutation, useVerifyOTPMutation } from "@/redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";


const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})
const Verify = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email] = useState(location.state)
    const [confirmed, setConfirmed] = useState(false)
    const [sendOTP] = useSendOTPMutation()
    const [verifyOTP] = useVerifyOTPMutation()
    const [timer, setTimer] = useState(120)


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    const handleSendOTP = async () => {
        const toastId = toast.loading("Sending OTP")
        try {        
            const res = await sendOTP({email}).unwrap()
            if(res.success){
                toast.success("OTP Sent to your email!", {id: toastId})
                setConfirmed(true)
                setTimer(120)
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error.data.message, {id: toastId})
        }
    }

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const toastId = toast.loading("Verifying OTP");
        const userInfo = {
            email,
            otp: data.pin,
        };

        try {
        const res = await verifyOTP(userInfo).unwrap();
        if (res.success) {
            toast.success("OTP Verified", { id: toastId });
            setConfirmed(true);
            navigate("/")
        }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if(!email){
            navigate("/")
        }
    },[email])

    useEffect(()=>{
        const timerID= setInterval(() => {
            if(email && confirmed){
                setTimer((prev) => (prev > 0 ? prev -1 : 0))
            }
        }, 1000)

        return () => clearInterval(timerID)
    },[email, confirmed])

    return (
        <div className="grid place-content-center h-screen">
            {
                confirmed ? 
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Verify your email address</CardTitle>
                    <CardDescription>Please enter the 6-digit code we sent to <br/> {email}</CardDescription>
                </CardHeader>
                <CardContent>
                     <Form {...form}>
                        <form id="otp-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>One-Time Password</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={4} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    <Button type="button" variant="link" onClick={handleSendOTP} disabled={timer !== 0} className={cn("p-0 m-0", {"cursor-not-allowed text-gray-500": timer !==0})}>Resend OTP :{" "}</Button> {timer}
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button form="otp-form" type="submit">Submit</Button>
                </CardFooter>
                </Card>:
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Verify your email address</CardTitle>
                        <CardDescription>We will send you an OTP at <br/> {email}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Button className="w-[300px]" type="submit" onClick={handleSendOTP}>Confirm</Button>
                    </CardFooter>
                </Card>
            }
            
        </div>
    );
};

export default Verify;