import ReactMarkdown from "react-markdown"
import { data } from "./data"
export default function Page() {

  return <div>
    <ReactMarkdown className={"prose"}>{data}</ReactMarkdown>
  </div>
}