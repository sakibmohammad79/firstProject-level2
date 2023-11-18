import { StudentModel } from '../student.model';
import { Student } from './interface.student';

const studentCreatInotDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentServices = {
  studentCreatInotDB,
};
