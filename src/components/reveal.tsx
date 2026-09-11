"use client"

import { motion, type Variants, type Transition } from "framer-motion"
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  easeOutExpo,
} from "@/lib/animations"

type RevealVariant = "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn"

const variantMap: Record<RevealVariant, Variants> = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
}

export function Reveal({
  children,
  variant = "fadeInUp",
  transition,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  variant?: RevealVariant
  transition?: Transition
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variantMap[variant]}
      transition={transition || { ...easeOutExpo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  variant = "fadeInUp",
  transition,
  className,
}: {
  children: React.ReactNode
  variant?: RevealVariant
  transition?: Transition
  className?: string
}) {
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={transition || easeOutExpo}
      className={className}
    >
      {children}
    </motion.div>
  )
}
