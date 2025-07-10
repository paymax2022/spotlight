import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/contact.model';
import Contest from '@/models/contest.model';
import { dbConnect } from "@/lib/dbConnect";
import {sendContactEmails} from "@/lib/email"

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { contest_id, name, email, phone, subject, message, image, address, gender, category } = data;

    // Validate contest_id
    if (!mongoose.Types.ObjectId.isValid(contest_id)) {
      return NextResponse.json({ message: 'Invalid contest ID format' }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();

    const contest = await Contest.findById(contest_id).lean();
    if (!contest) {
      return NextResponse.json({ message: 'Contest not found' }, { status: 404 });
    }

    const contact = await Contact.create({
      contest_id,
      name,
      email,
      phone,
      subject,
      message,
      image,
      address,
      gender,
      category,
    });

    // Send emails after successful contact creation (only contest organizer)
    await sendContactEmails(contact, contest);

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ message: 'Error creating contact', error: error }, { status: 500 });
  }
}