'use client'
import React, { useEffect, useState } from 'react';

const Completionist = () => <span>You are good to go!</span>;

export default function CountdownTimer() {
  const threeMonthsInMs = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds
  const [timeLeft, setTimeLeft] = useState(threeMonthsInMs); // Set initial time to 3 months

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1000, 0)); // Decrease by 1 second
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, [timeLeft]);

    const formatTime = (ms: number) => {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="flex flex-col items-center justify-center h-auto bg-transparent text-white">
            {timeLeft > 0 ? (
                <div className="flex space-x-4">
                {[
                    { label: 'Days', value: days },
                    { label: 'Hrs', value: hours },
                    { label: 'Mins', value: minutes },
                    { label: 'Secs', value: seconds },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center border border-gray-500 rounded-lg px-6 py-4 bg-gray-800"
                    >
                        <span className="text-4xl font-bold">{value.toString().padStart(2, '0')}</span>
                        <span className="text-sm uppercase mt-1">{label}</span>
                    </div>
                ))}
                </div>
            ) : (
                <Completionist />
            )}
        </div>
    );
}
