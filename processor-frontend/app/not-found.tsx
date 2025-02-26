"use client"

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React, {Suspense} from "react";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>

            <motion.h1
                className="text-4xl font-extrabold text-center mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                404 - Page Not Found
            </motion.h1>

            <motion.p
                className="text-lg mt-2 text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                We couldn't find the page you were looking for. But don’t worry, it happens to the best of us!
            </motion.p>

            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}>
                <FaceFrownIcon className="w-10 text-gray-400" />
            </motion.div>


            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Link
                    href="/"
                    className="px-8 py-3 text-xl font-semibold bg-white text-indigo-600 rounded-lg shadow-lg transform transition-all hover:bg-indigo-700 hover:text-white hover:scale-105"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
}
