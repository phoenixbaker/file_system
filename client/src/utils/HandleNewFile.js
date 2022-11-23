import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

export default function HandleNewFIle() {
  const { name } = useParams();
  const history = useHistory();
  return history.push(`/documents/${uuidV4()}/${name}`);
}
