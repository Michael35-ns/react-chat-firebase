import CardFooterAuth from "@/components/card-footer-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthActions } from "@/hooks/use-auth-actions";

const RegisterPage = () => {
  const { isLoading } = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Register to your account using email and password or with google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth isLoading={isLoading} type="register" />
    </Card>
  );
};

export default RegisterPage;
