import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();
  const fetchRelDocData = async () => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter((doc) => {
        return doc.speciality === speciality && doc._id !== docId;
      });
      setRelDoc(doctorsData);
    }
  };

  useEffect(() => {
    fetchRelDocData();
  }, [doctors, speciality, docId]);
  return (
    relDoc.length > 0 && (
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx10">
        <h1 className="text-3xl font-medium">Related Doctors to Book</h1>
        <p className="sm:w-1/3 text-center  text-sm">
          Simply browse through our extensive list of trusted doctors
        </p>

        <div className="w-full grid grid-cols-auto gap-4 pt-5   center gap-y-6  px-3 sm:px-0">
          {relDoc.length > 0 ? (
            relDoc.slice(0, 5).map((doctor, index) => (
              <div
                onClick={() => {
                  navigate(`/appointment/${doctor._id}`);
                  scrollTo(0, 0);
                }}
                key={index}
                className="border  border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              >
                <img className="bg-blue-50" src={doctor.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available </p>
                  </div>
                  <p className="text-lg text-gray-900 font-medium">
                    {doctor.name}
                  </p>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
          {relDoc.length > 5 && (
            <button
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
            >
              See More
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default RelatedDoctors;
