import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

const PaymentDetailsForm = () => {
  const form = useForm({
    defaultValues: {
      accountHolderName: '',
      ifsc: '',
      accountNumber: '',
      bankName: '',
      confromAccountNumber:''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                 
                    className="border w-full border-gray-700 p-5"
                    placeholder="Code with"
                    {...field} // ✅ Spread the field as props here
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC code</FormLabel>
                <FormControl>
                  <Input
                 
                    className="border w-full border-gray-700 p-5"
                    placeholder="Code with"
                    {...field} // ✅ Spread the field as props here
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                  
                    className="border w-full border-gray-700 p-5"
                    placeholder="Code with"
                    {...field} // ✅ Spread the field as props here
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="conformAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confrom Account Number</FormLabel>
                <FormControl>
                  <Input
                  
                    className="border w-full border-gray-700 p-5"
                    placeholder="Code with"
                    {...field} // ✅ Spread the field as props here
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bacnk Name</FormLabel>
                <FormControl>
                  <Input
                  
                    className="border w-full border-gray-700 p-5"
                    placeholder="Code with"
                    {...field} // ✅ Spread the field as props here
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose className='w-full'>
                 <Button type="submit" className="w-full py-5">
                Submit
            </Button>
          </DialogClose>
           
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
