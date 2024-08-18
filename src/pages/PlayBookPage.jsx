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
