import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contest from '@/models/contest.model';
import { dbConnect } from "@/lib/dbConnect";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    const contest = new Contest(data);
    await contest.save();

    return NextResponse.json({ message: 'Contest created successfully', contest }, { status: 201 });
  } catch (error) {
    console.error('Error creating contest:', error);
    return NextResponse.json({ message: 'Error creating contest' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const contests = await Contest.find().lean();
    return NextResponse.json(contests, { status: 200 });
  } catch (error) {
    console.error('Error fetching contests:', error);
    return NextResponse.json({ message: 'Error fetching contests' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ message: 'Contest ID is required' }, { status: 400 });
    }

    const deletedContest = await Contest.findByIdAndDelete(id);
    
    if (!deletedContest) {
      return NextResponse.json({ message: 'Contest not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contest deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contest:', error);
    return NextResponse.json({ message: 'Error deleting contest' }, { status: 500 });
  }
}