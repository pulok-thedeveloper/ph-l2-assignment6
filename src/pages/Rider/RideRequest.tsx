/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRequestRideMutation } from "@/redux/features/ride/rideApi";
import { Loader2Icon } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const RideRequest = () => {
    const [addTour,{isLoading}] = useRequestRideMutation()

    const form = useForm({
        defaultValues:{
            pickupLat: 23.73815000987529,
            pickupLong: 90.39586539150973,
            pickupAddress: "Shahbagh Bus Stop",
            destinationLat: 23.757371622272277,
            destinationLong: 90.39026929002739,
            destinationAddress: "Farmgate Bus Stop",
            distanceKm: 3.6
        }
    })

    const onSubmit = async (data: FieldValues) => {
        const rideData = {
          pickupLocation : {
            lat: data.pickupLat,
            long: data.pickupLong,
          },
          pickupAddress: data.pickupAddress,
          destinationLocation : {
            lat: data.destinationLat,
            long: data.destinationLong,
          },
          destinationAddress: data.destinationAddress,
          distanceKm: data.distanceKm
        }

        try {
            const res = await addTour(rideData).unwrap()
            if(res?.success){
                toast.success("Tour Added Successfully!")
                form.reset()
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to add tour. Please try again.")
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 mt-">
            <Card>
                <CardHeader>
                    <CardTitle>Ride Request</CardTitle>
                    <CardDescription>
                        Make a ride request to get your ride
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="grid grid-cols-2 gap-5" id="ride-request" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="pickupAddress"
                                render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Pickup Address</FormLabel>
                                    <FormControl>
                                    <Input type="text" placeholder="Pickup Address" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Pickup Address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pickupLat"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pickup Latitude</FormLabel>
                                    <FormControl>
                                    <Input type="number" placeholder="Pickup Latitude" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Pickup Latitude.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pickupLong"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pickup Longtitude</FormLabel>
                                    <FormControl>
                                    <Input type="number" placeholder="Pickup Longtitude" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Pickup Longtitude.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinationAddress"
                                render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Destination Address</FormLabel>
                                    <FormControl>
                                    <Input type="text" placeholder="Destination Address" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Destination Address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinationLat"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Destination Latitude</FormLabel>
                                    <FormControl>
                                    <Input type="number" placeholder="Destination Latitude" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Destination Latitude.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinationLong"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Destination Longtitude</FormLabel>
                                    <FormControl>
                                    <Input type="number" placeholder="Destination Longtitude" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Destination Longtitude.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="distanceKm"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Distance (Km)</FormLabel>
                                    <FormControl>
                                    <Input type="number" placeholder="Approx Distance" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is Distance.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />

                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex-col gap-2 self-end">
                    <Button disabled={isLoading} type="submit" form="ride-request">
                        {isLoading && <Loader2Icon className="animate-spin" />}
                        Ride Request
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RideRequest;