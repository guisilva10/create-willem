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
        toast.success("Conta criada com sucesso!");
        router.push("/auth/sign-in");
      } catch (error) {
        toast.error("Erro ao criar conta, tente novamente!");
        console.log(error);
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Crie sua conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Insira seu email e senha para seguir.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="digite seu nome"
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
                Criando <LoaderIcon className="ml-2 size-4 animate-spin" />
              </p>
            ) : (
              <p className="flex items-center">
                Criar <LogInIcon className="ml-2 size-4" />
              </p>
            )}
          </Button>
        </form>
      </Form>
      <div className="mt-4 flex items-center justify-center gap-2">
        <p className="text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href="/auth/sign-in" className="text-primary hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
