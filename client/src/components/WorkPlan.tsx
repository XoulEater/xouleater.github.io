import React, { useState } from "react";
import {
  type WorkPlanDTO,
  type ActivityDTO,
  ActivityStatus,
} from "../lib/data";
import ActivitesAccordion from "./ActivitiesAccordion";

interface WorkPlanProps {
  workplanDTO?: WorkPlanDTO;
}

const WorkPlan: React.FC<WorkPlanProps> = ({ workplanDTO }) => {
  const workplan = workplanDTO;
  const activities = workplan?.activities;
  // clasify activities by week
  const activitiesByWeek: {
    [week: number]: ActivityDTO[];
  } = {};
  activities?.forEach((activity) => {
    if (activitiesByWeek[activity.week]) {
      activitiesByWeek[activity.week].push(activity);
    } else {
      activitiesByWeek[activity.week] = [activity];
    }
  });
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<ActivityDTO | null>(
    null
  );
  const [activityStatus, setActivityStatus] = useState<ActivityStatus | null>(
    null
  );

  function handleAccordionToggle(week: number) {
    if (openAccordions.includes(week)) {
      setOpenAccordions(openAccordions.filter((w) => w !== week));
    } else {
      setOpenAccordions([...openAccordions, week]);
    }
  }

  function handleActivityStatusChange(status: ActivityStatus) {
    if (selectedActivity) {
      setActivityStatus(status);
      selectedActivity.status = status;
      // TODO: update activity
    }
  }

  return (
    <article>
      <header className="flex justify-between mx-20 my-6">
        <div>
          <h1 className="text-3xl font-bold">{workplan?.name}</h1>
          <p>{workplan?.description}</p>
        </div>
        <aside>
          <button className="bg-primary-dark text-white  w-52 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-calendar-plus"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
            Nueva Actividad
          </button>
        </aside>
      </header>
      {/* Activities */}
      <div className="flex mx-20 gap-10">
        {ActivitesAccordion(
          activitiesByWeek,
          handleAccordionToggle,
          openAccordions,
          setSelectedActivity,
          setActivityStatus
        )}
        {/* Activity Details */}
        <aside className="my-6 w-8/12 h-[560px] rounded-lg overflow-y-scroll no-scrollbar shadow-md ">
          {selectedActivity && (
            <div className="p-4 bg-white rounded-lg h-full flex flex-col gap-2">
              <header>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">
                    {selectedActivity.name}
                  </h2>

                  <span className="border-2 py-1 px-2 rounded-full border-primary-light text-primary-light text-lg">
                    {selectedActivity.type}
                  </span>
                </div>
                <p className="text-xl text-gray-600 -mt-2">
                  {selectedActivity.date.toDateString()} -{" "}
                  {selectedActivity.time}
                </p>
              </header>

              <section className="flex justify-between">
                <div>
                  <p className=" text-xl  font-bold">Responsables:</p>
                  <ul>
                    {selectedActivity.responsibles.map((teacher) => (
                      <li key={teacher.name} className=" text-lg">
                        - {teacher.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className=" my-2 shadow-sm flex gap-4  place-items-center px-3 text-gray-400 text-lg rounded-md border-2 border-black/10">
                  Archivo <br /> adjunto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" "
                    width="46"
                    height="46"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M12 17v-6"></path>
                    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
                  </svg>
                </button>
              </section>
              <section>
                <p className="text-xl font-bold">Descripción:</p>
                <p className=" text-lg">{selectedActivity.modality}</p>
                {selectedActivity.modality === "Virtual" && (
                  <a
                    href={selectedActivity.link}
                    className="text-primary-light text-lg hover:underline"
                  >
                    Enlace
                  </a>
                )}
              </section>
              <footer className="flex justify-center gap-3">
                {selectedActivity.status === "Planeada" && (
                  <button
                    onClick={() =>
                      handleActivityStatusChange(ActivityStatus.PUBLICADA)
                    }
                    className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M19 22v-6" />
                      <path d="M22 19l-3 -3l-3 3" />
                    </svg>
                    Publicar
                  </button>
                )}
                {selectedActivity.status === "Publicada" && (
                  <button
                    onClick={() =>
                      handleActivityStatusChange(ActivityStatus.NOTIFICADA)
                    }
                    className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M11 15h1" />
                      <path d="M12 15v3" />
                      <path d="M19 16v3" />
                      <path d="M19 22v.01" />
                    </svg>
                    Notificar
                  </button>
                )}
                {selectedActivity.status === "Notificada" && (
                  <button
                    onClick={() =>
                      handleActivityStatusChange(ActivityStatus.REALIZADA)
                    }
                    className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M15 19l2 2l4 -4" />
                    </svg>
                    Realizar
                  </button>
                )}
                {selectedActivity.status === "Realizada" && (
                  <button
                    disabled
                    className=" bg-gray-600 text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center transition duration-300 ease-in-out group"
                  >
                    Realizada
                  </button>
                )}
                {selectedActivity.status !== "Cancelada" && (
                  <button className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M19.001 15.5v1.5" />
                      <path d="M19.001 21v1.5" />
                      <path d="M22.032 17.25l-1.299 .75" />
                      <path d="M17.27 20l-1.3 .75" />
                      <path d="M15.97 17.25l1.3 .75" />
                      <path d="M20.733 20l1.3 .75" />
                    </svg>
                    Editar
                  </button>
                )}
                {selectedActivity.status !== "Cancelada" && (
                  <button
                    onClick={() =>
                      handleActivityStatusChange(ActivityStatus.CANCELADA)
                    }
                    className="bg-red-800 text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:brightness-125 transition duration-300 ease-in-out group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-calendar-x"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6.5" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M22 22l-5 -5" />
                      <path d="M17 22l5 -5" />
                    </svg>
                    Cancelar
                  </button>
                )}
              </footer>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
};

export default WorkPlan;