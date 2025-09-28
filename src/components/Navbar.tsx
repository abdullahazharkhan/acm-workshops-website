'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export const AcmeLogo = () => {
    return (
        <img src="/acm-logo.png" alt="ACM NUCES" className="h-20 w-20" />
    );
};

export default function App() {
    const links = [
        { name: "Workshops", href: "#workshops" },
        { name: "Leads", href: "#leads" },
        { name: "Mentors", href: "#mentors" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            className={`fixed top-0 w-full transition-colors duration-500 ${isScrolled ? "bg-white/50 backdrop-blur-lg" : "bg-transparent"
                } py-2`}
        >
            <NavbarBrand>
                <AcmeLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {links.map((link) => (
                    <NavbarItem key={link.name}>
                        <Link
                            href={link.href}
                            className="text-lg font-[500] text-primaryblue hover:text-primaryblue transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#"
                        variant="solid"
                        target="_blank"
                        className="text-lg font-[500] bg-primaryred text-white"
                    >
                        ACM NUCES
                        <SquareArrowOutUpRight size={20} />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
