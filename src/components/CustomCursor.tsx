import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, select, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [isVisible, cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999]"
                style={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                }}
            />

            {/* Trailing Aura */}
            <motion.div
                className="fixed top-0 left-0 border border-accent/30 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
                animate={{
                    width: isHovering ? 60 : 36,
                    height: isHovering ? 60 : 36,
                    x: (isHovering ? cursorX.get() - 30 : cursorX.get() - 18),
                    y: (isHovering ? cursorY.get() - 30 : cursorY.get() - 18),
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                    borderColor: isHovering ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.3)',
                }}
                transition={{ type: 'spring', ...springConfig }}
            />
        </>
    );
}
