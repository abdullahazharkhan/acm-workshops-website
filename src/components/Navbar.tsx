'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

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

    return (
        <Navbar className="bg-white/50 backdrop-blur-lg py-2">
            <NavbarBrand>
                <AcmeLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {links.map((link) => (
                    <NavbarItem key={link.name}>
                        <Link href={link.href} className={`text-lg font-[500] text-primaryblue duration-400 hover:text-primaryblue`}>
                            {link.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="#" variant="solid" target="_blank" className="text-lg font-[500] bg-primaryred text-white">
                        ACM NUCES
                        <SquareArrowOutUpRight size={20} />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
