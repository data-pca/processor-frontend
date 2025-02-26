import { redirect } from "next/navigation";
import {Paths} from "@/shared/consts/paths";

export default function Page() {
  redirect(Paths.login)
}
