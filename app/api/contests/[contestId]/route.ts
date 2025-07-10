import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contest from '@/models/contest.model';
import { dbConnect } from "@/lib/dbConnect";

export async function GET(request: Request, { params }: { params: { contestId: string } }) {
  const { contestId } = params;
  console.log('Fetching contest with ID:', contestId); // Debugging
  try {
    if (!mongoose.Types.ObjectId.isValid(contestId)) {
      return NextResponse.json({ message: 'Invalid contest ID format' }, { status: 400 });
    }

    await dbConnect();

    const contest = await Contest.findById(contestId).lean();
    if (!contest) {
      return NextResponse.json({ message: 'Contest not found' }, { status: 404 });
    }

    return NextResponse.json(contest, { status: 200 });
  } catch (error) {
    console.error('Error fetching contest:', error);
    return NextResponse.json({ message: 'Error fetching contest', error: error }, { status: 500 });
  }
}