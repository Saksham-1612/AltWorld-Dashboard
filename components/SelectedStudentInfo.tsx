import React from "react";
import { students } from "@/mockData/students";

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

  const behaviouralScrore =
    (selectedStudentObject &&
      (selectedStudentObject?.behavioural / 10) * 100) ||
    0;

  const communicationScrore =
    (selectedStudentObject &&
      (selectedStudentObject?.communication / 10) * 100) ||
    0;

  const situationScrore =
    (selectedStudentObject &&
      (selectedStudentObject?.situationHandling / 10) * 100) ||
    0;

  console.log(behaviouralScrore);
  console.log(selectedStudentObject);

  return (
    <div className="bg-white p-3 rounded-xl flex gap-5 shadow-md">
      <div className="flex-1 px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-16 w-16 overflow-hidden rounded-xl">
              <img
                className="h-full w-full"
                src={"https://img.lovepik.com/element/45001/3052.png_860.png"}
                alt={"Avatar"}
              />
            </div>
            <div className="">
              <p className="text-sm font-bold ">
                {selectedStudentObject?.name}
              </p>
              <p className="text-gray-400 text-[.65rem]">
                {selectedStudentObject?.email}
              </p>
            </div>
          </div>
          <div className="">
            <p
              className={`${
                total < 75 ? "text-yellow-500" : "text-green-500"
              } font-bold text-xl`}
            >
              {total}%
            </p>
          </div>
        </div>

        {/* stats */}

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[.6rem] text-gray-400 font-bold">
                Behavioural
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[200px] bg-[#e2e8f0] rounded-full h-[.42rem]">
                <div
                  style={{
                    width: `${behaviouralScrore}%`,
                  }}
                  className={`h-full rounded-full ${
                    behaviouralScrore < 75 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
              <div>
                <p
                  className={`text-[.65rem] ${
                    behaviouralScrore < 75
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {selectedStudentObject?.behavioural} / 10
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[.6rem] text-gray-400 font-bold">
                Communication
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[200px] bg-[#e2e8f0] rounded-full h-[.42rem]">
                <div
                  style={{
                    width: `${communicationScrore}%`,
                  }}
                  className={`h-full rounded-full ${
                    communicationScrore < 75 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
              <div>
                <p
                  className={`text-[.65rem] ${
                    communicationScrore < 75
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {selectedStudentObject?.communication} / 10
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[.6rem] text-gray-400 font-bold">
                Situation Handling
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[200px] bg-[#e2e8f0] rounded-full h-[.42rem]">
                <div
                  style={{
                    width: `${situationScrore}%`,
                  }}
                  className={`h-full rounded-full ${
                    situationScrore < 75 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
              <div>
                <p
                  className={`text-[.65rem] ${
                    situationScrore < 75 ? "text-yellow-500" : "text-green-500"
                  }`}
                >
                  {selectedStudentObject?.situationHandling} / 10
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h1 className="text-sm font-bold">About</h1>
            <p className="text-[.65rem] mt-1 text-gray-500">
              {selectedStudentObject?.about}
            </p>
          </div>

          <div className="mt-8">
            <h1 className="text-sm font-bold">Experience</h1>
            <p className="text-[.65rem] mt-1 text-gray-500">
              {selectedStudentObject?.experience}
            </p>
          </div>

          <div className="mt-8">
            <h1 className="text-sm font-bold">Hobbies</h1>
            <p className="text-[.65rem] mt-1 text-gray-500">
              {selectedStudentObject?.hobbies}
            </p>
          </div>

          <div className="mt-8">
            <h1 className="text-sm font-bold">Introduction</h1>
            <p className="text-[.65rem] mt-1 text-gray-500">
              {selectedStudentObject?.introduction}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#1dc3b3] text-white text-sm font-medium py-2 px-20 rounded-xl">
            SHORTLIST
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default SelectedStudentInfo;
