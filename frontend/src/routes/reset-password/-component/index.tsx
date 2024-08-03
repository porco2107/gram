import { useForm } from "react-hook-form";
import { supabase } from "@/auth/supabase";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  type ResetPasswordForm,
  ResetPasswordSchema,
} from "@/components/login/schema";

const ResetPassword = () => {
  const form = useForm<ResetPasswordForm>({
    mode: "onBlur",
    resolver: valibotResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data: ResetPasswordForm) => {
    try {
      const email = data.email;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/reset-password/forget",
      });
      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      form.reset({ email: data.email });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">送信</Button>
      </form>
    </Form>
  );
};

export default ResetPassword;
