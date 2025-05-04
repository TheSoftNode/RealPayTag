"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Github,
    Twitter,
    Linkedin,
    Construction,
    CheckCircle,
    ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast"
import Footer from "./Footer";
import EnhancedNavbar from "./navbar";

const ComingSoonPage: FC = () => {
    const [email, setEmail] = useState("");
    const [daysLeft, setDaysLeft] = useState(30);
    const [hoursLeft, setHoursLeft] = useState(12);
    const [minutesLeft, setMinutesLeft] = useState(45);
    const [isSubscribing, setIsSubscribing] = useState(false);

    // Simulate countdown timer
    useEffect(() => {
        const interval = setInterval(() => {
            if (minutesLeft > 0) {
                setMinutesLeft(minutesLeft - 1);
            } else if (hoursLeft > 0) {
                setHoursLeft(hoursLeft - 1);
                setMinutesLeft(59);
            } else if (daysLeft > 0) {
                setDaysLeft(daysLeft - 1);
                setHoursLeft(23);
                setMinutesLeft(59);
            }
        }, 60000);

        return () => clearInterval(interval);
    }, [daysLeft, hoursLeft, minutesLeft]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast("Please enter a valid email address",
            );
            return;
        }

        setIsSubscribing(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribing(false);
            setEmail("");
            toast(
                "We'll notify you when we launch.",
            );
        }, 1500);
    };

    const features = [
        {
            icon: <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
            text: "PayTag Registry - Human-readable wallet addresses"
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
            text: "Instant Payments - No delays or high fees"
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
            text: "Airtime Convert - Tokens to airtime instantly"
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
            text: "Payroll System - Automated employee payments"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Sophisticated background with layers */}
            <EnhancedNavbar />


            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl w-full mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="mb-4 mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                            <Construction className="w-8 h-8" />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-xs">
                        Coming Soon
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent leading-tight"
                    >
                        This Feature is Under Development
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
                    >
                        We're working hard to bring you a seamless way to send and receive payments backed by real-world assets. Be the first to know when we launch.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mb-10">
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 min-w-[100px] shadow-sm">
                                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">{daysLeft}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Days</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 min-w-[100px] shadow-sm">
                                <div className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400">{hoursLeft}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Hours</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 min-w-[100px] shadow-sm">
                                <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">{minutesLeft}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Minutes</div>
                            </div>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 h-11 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                disabled={isSubscribing}
                                className="h-11 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-md rounded-lg"
                            >
                                {isSubscribing ? (
                                    <>Subscribing...</>
                                ) : (
                                    <>Notify Me <ChevronRight className="ml-1 h-4 w-4" /></>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-10">
                        <div className="mb-4 text-sm text-slate-700 dark:text-slate-300 font-medium">Upcoming Features</div>
                        <div className="flex flex-col gap-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 max-w-lg mx-auto text-left">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    {feature.icon}
                                    <span className="text-sm text-slate-800 dark:text-slate-200">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex justify-center space-x-4">
                        <Link href="https://github.com" target="_blank">
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-300 dark:border-slate-600">
                                <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                            </Button>
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-300 dark:border-slate-600">
                                <Twitter className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-300 dark:border-slate-600">
                                <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ComingSoonPage;