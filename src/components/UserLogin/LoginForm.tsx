import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define the schema for the form validation using Zod
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log("Login submitted with:", values);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-96 bg-surface p-6 shadow-md rounded-md">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="border-0 border-b border-input rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary h-10"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="border-0 border-b border-input rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary h-10"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="pt-1" />
                  </FormItem>
                )}
              />
               <div className="flex justify-end mt-2">
                <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-accent hover:text-accent/90">
                  Forgot Password
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md h-11 text-base" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/90 font-semibold">
              SignUp
            </Button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
