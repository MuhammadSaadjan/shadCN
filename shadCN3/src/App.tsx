import { Button } from "./components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center  bg-gray-200">
        <Card className="w-[350px] h-[350px]">
          <div>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4 ">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Name of your project"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="Next.js">Next.js</SelectItem>
                        <SelectItem value="SvelteKit">SvelteKit</SelectItem>
                        <SelectItem value="Astro">Astro</SelectItem>
                        <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
