"use client";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

function getSystemTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const darkTheme = darkThemeMq.matches;

    return darkTheme ? "dark" : "light";
}

export default function ThemeToggle() {
    const [checked, setChecked] = useState(true); // dark theme

    useEffect(() => {
        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", getSystemTheme());
        }
        setChecked(localStorage.getItem("theme") === "dark");
    }, []);

    useEffect(() => {
        // console.log(checked);
        localStorage.setItem("theme", checked ? "dark" : "light");

        if (checked) document.body.classList.add("dark");
        else document.body.classList.remove("dark");
    }, [checked]);

    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
                type="checkbox"
                onChange={() => setChecked((old) => !old)}
                checked={checked}
            />

            {/* sun icon */}
            <Sun className="swap-on fill-current" />

            {/* moon icon */}
            <MoonStar className="swap-off fill-current" />
        </label>
    );
}
