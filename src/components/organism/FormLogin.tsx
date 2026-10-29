import useLogin from "../../hooks/useLogin";
import { Button } from "../../lib/shadcn/ui/button";
import AppInputGroup from "../molecules/AppInputGroup";

export default function FormLogin() {
    const { handleChange, handleSubmit, isLoading, errorMessage, form } = useLogin()

    return <form method="POST" onSubmit={handleSubmit}>
        {errorMessage && <p className="mb-5 text-center bg-red-400 text-white font-semibold border-2 border-red-600 py-2 rounded-md">{errorMessage}</p>}

        <div className="space-y-5 mb-9">
            <AppInputGroup
                type="email"
                label="Email"
                defaultValue=""
                name="email"
                onChange={handleChange}
                placeholder="contoh: example@mail.com"
                value={form.email}
            />
            <AppInputGroup
                type="password"
                label="Password"
                defaultValue=""
                value={form.password}
                name="password"
                onChange={handleChange}
                placeholder="******"
            />
        </div>
        <p className="text-center mb-2">Tidak memiliki akun? Daftar disini</p>
        <Button type="submit" className="neo-shadow w-full py-5 cursor-pointer text-xs" disabled={isLoading}>
            {isLoading ? "Loading.." : "Masuk"}
        </Button>
    </form>
}