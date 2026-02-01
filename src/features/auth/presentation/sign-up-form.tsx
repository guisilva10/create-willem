"use client";

import { Button } from "@/app/_components/ui/button";

import { Input } from "@/app/_components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { LoaderIcon, LogInIcon } from "lucide-react";
import { SignUpData, signupSchema } from "../schemas/sign-up-schema";
import { signUpAction } from "@/features/server/sign-up-action";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignUpForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<SignUpData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpData) => {
    startTransition(async () => {
      try {
        await signUpAction(data);
        toast.success("Account created successfully!");
        router.push("/auth/sign-in");
      } catch (error) {
        toast.error("Error creating account, please try again!");
        console.log(error);
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details to get started.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="enter your name"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="enter your email"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="enter your password"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <p className="flex items-center">
                Creating <LoaderIcon className="ml-2 size-4 animate-spin" />
              </p>
            ) : (
              <p className="flex items-center">
                Create <LogInIcon className="ml-2 size-4" />
              </p>
            )}
          </Button>
        </form>
      </Form>
      <div className="mt-4 flex items-center justify-center gap-2">
        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
