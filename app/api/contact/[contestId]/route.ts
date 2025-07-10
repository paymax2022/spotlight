import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/contact.model';
import { dbConnect } from "@/lib/dbConnect";

export async function GET(request: Request, { params }: { params: { contestId: string } }) {
  const { contestId } = params;
  console.log('Fetching contacts with contest ID:', contestId);
  try {
    if (!mongoose.Types.ObjectId.isValid(contestId)) {
      return NextResponse.json({ message: 'Invalid contest ID format' }, { status: 400 });
    }

    await dbConnect();

    const contacts = await Contact.find({ contest_id: contestId }).lean();
    if (!contacts || contacts.length === 0) {
      return NextResponse.json({ message: 'No contacts found for this contest' }, { status: 404 });
    }

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ message: 'Error fetching contacts', error: error }, { status: 500 });
  }
}