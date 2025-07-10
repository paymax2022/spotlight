import mongoose, { Schema } from 'mongoose';

const RoundSchema = new Schema({
  name: { type: String, required: true },
  min_votes: { type: Number, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});

const PrizeAwardSchema = new Schema({
  position: { type: Number, required: true },
  prize: { type: Number, required: true },
});

const OtherBenefitSchema = new Schema({
  position: { type: Number, required: true },
  type: { type: String, required: true },
  benefit_name: { type: String, required: true },
});

const ContestSchema = new Schema({
  title: { type: String, required: true },
  alias: { type: String },
  description: { type: String, required: true },
  country: { type: String, required: true },
  audience: { type: String, required: true },
  leaderName: { type: String, required: true },
  leaderRole: { type: String, required: true },
  asstName: { type: String, required: true },
  asstRole: { type: String, required: true },
  participationFee: { type: Number, required: true },
  repeatContest: { type: String, required: true },
  min_age: { type: Number },
  juryWinnig: { type: String },
  rounds: [RoundSchema],
  prizeAwards: [PrizeAwardSchema],
  otherBenefits: [OtherBenefitSchema],
}, { timestamps: true });

export default mongoose.models.Contest || mongoose.model('Contest', ContestSchema);