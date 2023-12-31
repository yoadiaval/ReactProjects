import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { BsTrash } from "react-icons/bs";
import PhotosList from "./PhotosList";

function AlbumListPanel({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();
  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button className="mr-2" loading={result.isLoading} onClick={handleRemoveAlbum}>
        <BsTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  );
}

export default AlbumListPanel;
