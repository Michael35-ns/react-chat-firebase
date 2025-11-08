import CardFooterAuth from "@/components/card-footer-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthActions } from "@/hooks/use-auth-actions";

const LoginPage = () => {
  const { isLoading } = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Log in to your account using email and password or with Google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth 
        isLoading={isLoading} 
        type="login" 
        />
    </Card>
  );
};

export default LoginPage;
