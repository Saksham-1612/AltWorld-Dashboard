import React from "react";
import { students } from "@/mockData/students";
import { log } from "console";

type StudentListProps = {
  selectedStudent: number;
  setSelectedStudent: (id: number) => void;
};

const SelectedStudentInfo: React.FC<StudentListProps> = ({
  selectedStudent,
  setSelectedStudent,
}) => {
  // Find the student object where id matches selectedStudent
  const selectedStudentObject = students.find(
    (student) => student.id === selectedStudent
  );
  const total = selectedStudentObject?.total || 0;
  console.log(selectedStudentObject);

  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="flex">
        <div>
          <div className="h-10 w-10 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full"
              src={"https://img.lovepik.com/element/45001/3052.png_860.png"}
              alt={"Avatar"}
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex justify-center mx-2  flex-col items-start">
              <p className="text-sm font-bold ">
                {selectedStudentObject?.name}
              </p>
              <p className="text-gray-400 text-xs">
                {selectedStudentObject?.email}
              </p>
            </div>
            <div className="h-full flex items-center">
              <p>{total}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedStudentInfo;
