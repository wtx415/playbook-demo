import { EnvDropDown } from "../components/playbook/EnvDropDown";
import { SaveButton, HistoryButton, DeployButton } from "../components/buttons";
import { useParams } from 'react-router-dom';


export function PlayBookEditorPage({title}) {
  return (
    <div>
      <div className="font-bold text-4xl" style={{fontSize: '2.25rem'}}>{title}</div>
      <div className="flex justify-between mt-4">
        <div className="flex-none">
          <EnvDropDown />
        </div>
        <div className="flex-none flex">
          <div>
            <SaveButton />
          </div>
          <div className="pl-4" style={{paddingLeft: '1rem'}}>
            <DeployButton />
          </div>
          <div className="pl-4" style={{paddingLeft: '1rem'}}>
            <HistoryButton />
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 py-2 border border-gray-300 rounded">
        This is where the playbook content goes
      </div>
    </div>
  )
}


export function PlayBookEditorPageContainer() {
  const { playbookId } = useParams();

  return (
    <PlayBookEditorPage title={`Playbook ID: ${playbookId}`}/>
  )
}