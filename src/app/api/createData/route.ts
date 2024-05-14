import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const description = searchParams.get('description');
  const status = "New";
 
  try {
    if (!name || !email ||!description) throw new Error('Name, email, and description are required');
    await sql`INSERT INTO users (Name, email, description, status) VALUES (${name}, ${email}, ${description}, ${status});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ "valid" : "valid" }, { status: 200 });
}

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const description = searchParams.get('description');
    const status = "New";
   
    try {
      if (!name || !email ||!description) throw new Error('Name, email, and description are required');
      await sql`INSERT INTO users (Name, email, description, status) VALUES (${name}, ${email}, ${status}, ${status});`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
   
    return NextResponse.json({ "valid" : "valid" }, { status: 200 });
  }