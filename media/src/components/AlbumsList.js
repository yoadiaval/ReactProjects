import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem"

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, result] = useAddAlbumMutation();
  const handleAddAlbums = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    //En skeleton es importante especificar className="h-3 w-full" para que muestre como que está cargando
    content = <Skeleton className="h-3 w-full" times />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album}></AlbumListItem>

    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> Albums for {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleAddAlbums}>+ Add Album</Button>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
