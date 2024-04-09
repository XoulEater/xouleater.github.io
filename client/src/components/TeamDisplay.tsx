import React from "react";
import TeamTabs from "./TeamTabs";
import type { UserDTO } from "../lib/data";
import { teachers } from "../lib/data";
import w from "../../dist/_astro/Input.gWfe5j1Z";

const TeamDisplay: React.FC = () => {
  const user = localStorage.getItem("user");
  const userDTO = JSON.parse(user as string) as UserDTO;
  const isAssistant = userDTO.userType === "assistant";
  let isLeader = false;
  if (userDTO.userType === "teacher") {
    isLeader =
      teachers.find((t) => t.isLeader && t.email === userDTO.email) !==
      undefined;
  }

  function handleAddMember() {
    // redirect to teachers page
    window.location.href = "/teachers";
  }
  function handleNewPlan() {
    // TODO: manage the creation of a new plan
  }

  return (
    <div>
      <article className="flex justify-between mx-20 my-6">
        <div>
          <h1 className="text-3xl font-semibold">Equipo</h1>
          <h2 className="text-xl">Informacion del equipo</h2>
        </div>

        <aside className="flex gap-3">
          {isAssistant && (
            <button
              id="add-member"
              onClick={handleAddMember}
              className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-plus"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              </svg>
              Añadir
            </button>
          )}
          {isLeader && (
            <button className="bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings-2"
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
                <path d="M6 9l6 0" />
                <path d="M4 5l4 0" />
                <path d="M6 5v11a1 1 0 0 0 1 1h5" />
                <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
              </svg>
              Nuevo Plan
            </button>
          )}
        </aside>
      </article>
      <main className="grid place-items-center">
        <TeamTabs />
      </main>
    </div>
  );
};

export default TeamDisplay;