import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  LocalGaurdian,
  Student,
  Student,
  Student,
  UserName,
} from './student/interface.student';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGaurdian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  contactNo: { type: String },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  avatar: { type: String },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImge: { type: String },
  isActive: ['active', 'blocked'],
});

//create a model
export const StudentModel = model<Student>('Student', studentSchema);
