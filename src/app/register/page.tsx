"use client";
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Link,
} from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RegisterFormData, registerSchema } from "@/model/types";
import { useAuthListener } from "@/store/hooks/useAuthListener";
import { useDispatch } from "react-redux";
import { db } from "@/apis/firebaseConfig";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const result = registerSchema.safeParse(data);

    try {
      if (result.success) {
        const auth = getAuth();

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        const { uid, email, displayName } = userCredential.user;

        

        router.push("/login");
      }
    } catch (error) {
      setError("root", { message: "Invalid email or password" });
    }
  };

  useAuthListener();

  return (
    <div className="h-screen flex justify-center items-center">
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Create an Account
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name")}
              margin="normal"
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              error={!!errors.name}
            />

            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}

            <TextField
              {...register("email")}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={!!errors.email}
            />

            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}

            <TextField
              {...register("password")}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={!!errors.password}
            />

            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}

            <TextField
              {...register("confirmPassword")}
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              error={!!errors.confirmPassword}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};


export default RegisterPage;
