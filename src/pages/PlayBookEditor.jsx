import { EnvDropDown } from "../components/playbook/EnvDropDown";

export function PlayBookEditor() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-none">
          <EnvDropDown />
        </div>
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  )
}