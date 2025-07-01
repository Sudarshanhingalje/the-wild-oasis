import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      toast.success(`Welcome ${user.name}`);
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
  });
  return { signup, isLoading };
}
