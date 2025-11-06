import { Button } from "@/components/ui/button";
import { useAuthActions } from "../../hooks/use-auth-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const LoginPage = () => {
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
    <Card>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Log in to your account using email and password or with Google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooter>
        <Button onClick={handleLoginWithGoogle} className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
