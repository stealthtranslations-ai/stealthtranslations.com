import { NextRequest, NextResponse } from 'next/server';

const DISCOVERY_PASSWORD = process.env.VISTATEC_DISCOVERY_PASSWORD;
const ADMIN_PASSWORD = process.env.VISTATEC_DISCOVERY_ADMIN_PASSWORD;

export async function POST(request: NextRequest) {
  try {
    const { password, type = 'discovery' } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password required' },
        { status: 400 }
      );
    }

    const correctPassword = type === 'admin' ? ADMIN_PASSWORD : DISCOVERY_PASSWORD;

    if (!correctPassword) {
      console.error(`Password not configured for ${type} access`);
      return NextResponse.json(
        { success: false, error: 'Authentication not properly configured' },
        { status: 500 }
      );
    }

    const isValid = password === correctPassword;

    if (isValid) {
      // Return success with a timestamp for session management
      return NextResponse.json({
        success: true,
        timestamp: Date.now(),
        type
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
