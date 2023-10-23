"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const GoToApp = ({ path }) => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/${path}`);
    }, [path, router]);

    return <div></div>;
};

export default GoToApp;
