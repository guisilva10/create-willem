import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
