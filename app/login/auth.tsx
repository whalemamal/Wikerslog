import { SubmitButton } from "@/components/submitbutton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="wikers@gmail.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              data-testid="email-input"
              
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              data-testid="password-input"
              
            />
       

          </div>
          <SubmitButton/>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
       
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
     
    </div>
  )
}