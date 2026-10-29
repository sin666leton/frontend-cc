import FormLogin from "../components/organism/FormLogin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../lib/shadcn/ui/card";

export default function LoginPage() {

    return <div className="relative overflow-hidden h-screen flex items-center justify-center">
        <img src="/images/SelfieDoodle.svg" alt="" className="absolute w-7xl -bottom-52 md:w-7xl md:-bottom-80 md:-left-80"/>
        <Card className="relative rounded-lg mx-12 w-full md:max-w-md z-10 bg-white">
            <CardHeader>
                <CardTitle className="font-bold text-2xl">ABCD</CardTitle>
                <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate.</CardDescription>
            </CardHeader>

            <CardContent>
                <FormLogin/>
            </CardContent>
        </Card>
    </div>
}