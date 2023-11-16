import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 
import { useSession } from 'next-auth/react'

/**
 * This Middleware function will automatically redirect the user to the login page if they are not logged in.
 * @param request 
 * @returns 
 */
export function middleware(request: NextRequest) {
    
};