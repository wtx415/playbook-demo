import { useNavigate } from 'react-router-dom';
import { EditButton } from "../buttons";

export function PlaybookCard({ id: playbookID, title, description, status, lastModified, showVersion = false }) {
  const navigate = useNavigate();

  return (
    <div class="bg-white p-4 rounded-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-5">
          <div class="h-9 w-9 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
            <span role="img" aria-label="build" class="anticon anticon-build">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="build" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM612 746H412V546h200v200zm268-268H680V278h200v200z">
                </path>
              </svg>
            </span>
          </div>
          <div class="pp-fragment text-2xl">
            {title}
          </div>
          <span color="green" class="whitespace-nowrap text-xs rounded-full overflow-hidden px-2.5 py-1 text-ellipsis text-green-500 bg-green-100 border border-green-100 undefined">
            {status}
          </span>
          <div class="text-sm text-gray-300">
            {lastModified}
          </div>
        </div>
        <div class="flex items-center gap-6">
          <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-slate-200 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-200 data-[state=unchecked]:bg-transparent">
            <span data-state="checked" class="pointer-events-none block h-4 w-4 rounded-full bg-indigo-400 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-25">
            </span>
          </button>
          <EditButton onClick={() => navigate(`/playbook/${playbookID}`)} />
        </div>
      </div>
      <div class="flex pl-14 pb-1 pt-3">
        <div class="whitespace-pre-wrap cursor-pointer">{description}</div>
      </div>
      {showVersion ? (
        <div class="flex pl-14 items-center gap-2 mt-4 ">
          Versions:
          <div class="flex items text-blue-600">
            Production
          </div>
          <div>
            <span class="text-gray-400">·</span>
          </div>
          <div class="flex items text-blue-600">
            Staging
          </div>
          <span class="text-gray-400">·</span>
          <div class="flex items text-blue-600">
            Draft
          </div>
        </div>
      ) : null}
    </div>
  );
}