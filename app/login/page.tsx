
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "./auth";

const AuthenticationPage = () => {


    return(
        <>

        <div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
            {/* <center>
            <Image 
              src=""
              width={80}
              height={843}
              alt="Logo"
              quality={100}
              className="block dark:hidden"

            />
              <Image
                src=""
                width={80}
                height={843}
                alt="Logo"
                quality={100}
                className="hidden dark:block"
              />
              </center> */}
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Wikers
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to signIn your account
              </p>
            </div>
            <UserAuthForm/>
            <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
            Not a member?{""}
            <button
            className="underline"
            data-testid="register-button"
            >
            Join us
          </button>
            </span>
        </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to wikers{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        </div>
    </>
    )
}

export default AuthenticationPage