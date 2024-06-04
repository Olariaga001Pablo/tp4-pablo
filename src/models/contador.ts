import mongoose, { Schema } from "mongoose";

interface Otro extends mongoose.Document {
    contador: number;
}

const contSchema: Schema = new Schema({
    contador: { type: Number, required: true }
});

export default mongoose.models.Otro || mongoose.model<Otro>('Otro', contSchema);
