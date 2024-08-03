import { createFileRoute } from "@tanstack/react-router";
import ResetPassword from "./-component";

export const Route = createFileRoute("/reset-password/")({
  component: resetPassword,
});
function resetPassword() {
  return <ResetPassword />;
}
