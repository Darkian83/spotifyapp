import AlbumCard from "./AlbumCard";

const AlbumArtist = ({ albums }) => {
  return (
    <div>
      <section>
        <h3>Artist´s Albums</h3>
        <div>
          {albums?.map((albumInfo) => (
            <AlbumCard key={albumInfo.id} album={albumInfo} />
            // <article key={album.id}>
            //   <img src={album.images[0].url} alt="" />
            //   <h3>{album.name}</h3>
            // </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AlbumArtist;
