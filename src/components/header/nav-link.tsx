'use client'
 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Link, { LinkProps } from "next/link";
import { ReactNode, cloneElement } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  shouldMatchExactHref?: boolean;
}

export function NavLink({shouldMatchExactHref=false, ...props}: NavLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  let isActive = false;

  
  if (shouldMatchExactHref && (pathname === props.href || pathname === props.as)) {
    isActive = true;
  }
  
  if (!shouldMatchExactHref && (pathname.startsWith(String(props.href)) || pathname.startsWith(String(props.as)))) {
    isActive = true;
  }

  return (
    <Link
    className={`px-3 py-1.5 rounded-full text-zinc-100 font-medium text-xs gap-1.5 flex items-center transition ${isActive ? 'bg-zinc-800 hover:bg-zinc-900' : 'hover:bg-zinc-900'} `}
    {...props}
    />
  );
}
