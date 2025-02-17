import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');
    const url = req.nextUrl.clone();

    if (token && url.pathname === '/auth') {
        url.pathname = '/';
        return NextResponse.redirect(url);
    }


    return NextResponse.next();
}