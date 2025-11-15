import { useAuthActions } from "@/hooks/use-auth-actions";
import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Link } from "react-router";

interface Props {
  type: "login" | "register";
  isLoading: boolean;
}

const CardFooterAuth = ({ type, isLoading }: Props) => {
  const isLogin = type === "login";

  const { loginWithGoogle } = useAuthActions();

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      console.log("Log in successful");
    } else {
      toast.error("Log in failed");
    }
  };
  return (
    <div>
      <CardFooter className="flex flex-col items-center gap-4">
        <Button
          onClick={handleLoginWithGoogle}
          className="w-full cursor-pointer"
          variant="outline"
          disabled={isLoading}>
          <Mail className="mr-2" />
          {isLogin ? "Log in with google" : "Register with Google"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          {isLogin ? "Don´t have an account? " : "Already have an account? "}
          <Link to={isLogin ? "/auth/register" : "/auth/login"}>
            <Button variant="link" className="p-0 h-auto font-normal cursor-pointer">
              {isLogin ? "Register" : "Sign in"}
            </Button>
          </Link>{" "}
        </p>
      </CardFooter>
    </div>
  );
};

export default CardFooterAuth;
