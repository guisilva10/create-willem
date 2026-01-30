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
import { SignInData, signinSchema } from "../schemas/sign-in-schema";
import Link from "next/link";

export function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<SignInData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInData) => {
    startTransition(async () => {
      try {
        await signIn(
          "credentials",
          {
            email: data.email,
            password: data.password,
          },
          {
            callbackUrl: "/app",
          },
        );

        toast.success("Seja bem vindo(a)");
      } catch (error) {
        toast.error("Erro ao fazer login, tente novamente!");
        console.log(error);
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Acesse sua conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Insira seu email e senha para seguir.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="digite seu email"
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="digite sua senha"
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
                Entrando <LoaderIcon className="ml-2 size-4 animate-spin" />
              </p>
            ) : (
              <p className="flex items-center">
                Entrar <LogInIcon className="ml-2 size-4" />
              </p>
            )}
          </Button>
        </form>
      </Form>
      <div className="mt-4 flex items-center justify-center gap-2">
        <p className="text-muted-foreground">
          Não tem uma conta?{" "}
          <Link href="/auth/sign-up" className="text-primary hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
