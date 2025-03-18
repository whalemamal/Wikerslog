"use client"
import { useFormStatus } from "react-dom"
import { Icons } from "./icons"
import { Button } from "./ui/button"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
export function SubmitButton({className, ...props }: UserAuthFormProps) {
    const { pending } = useFormStatus()
    return(
    <Button disabled={pending}>
            {pending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
    </Button>
    )
}