import { PlaybookCard } from "../components/playbook/PlaybookCard";

export function PlayBookPage() {
  return <div style={{width: '840px', backgroundColor: 'black'}}>
    <PlaybookCard
      title={"Get User Info and switch to Issue refund"}
      description={"Use this playbook if the user is saying that they're not satisfied with the product."}
      status={"Live"}
      lastModified={"5 days ago"}
      showVersion={false} />
  </div>
}

const PLAYBOOKS = [
  {
    id: 1,
    title: "Get User Info and switch to Issue refund",
    description: "Use this playbook if the user is saying that they're not satisfied with the product.",
    status: "Live",
    lastModified: "5 days ago",
  },
  {
    id: 2,
    title: "Issue Refund",
    description: "Use this playbook if the user is asking for a refund.",
    status: "Live",
    lastModified: "4 days ago",
  },
  {
    id: 3,
    title: "Modern Tagalog",
    description: "Use playbook whenever the customer speaks Tagalog\n Use a modern, semi-professional, Tagalog tone. Avoid deep Tagalog words.",
    status: "Live",
    lastModified: "3 days ago",
  },
  {
    id: 4,
    title: "Tone",
    description: "Use this playbook always. Use this playbook always.",
    status: "Live",
    lastModified: "3 days ago",
  },
];

export function PlayBookPageContainer() {
  return (
    <div className="bg-gray-100 px-4">
      <div className="font-bold" style={{fontSize: '3rem'}}>
        Playbooks
      </div>
      <div className="mt-4">
        These playbooks allow you to seamlessly define custom business logic for the AI to follow. These workflows can reference other data, take actions, or trigger other workflows.
      </div>
      <div className="w-10/12 mx-auto py-2">
        {PLAYBOOKS.map((playbook, index) => (
          <div style={{padding: '8px 0px'}}>
            <PlaybookCard key={playbook.id} {...playbook} showVersion={true} />
          </div>
        ))
        }
      </div>
    </div>
  )
}