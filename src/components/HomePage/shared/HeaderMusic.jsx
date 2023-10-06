import { useSelector } from "react-redux";
import TrackList from "./TrackList";

const HeaderMusic = () => {
  const tracksPlaylist = useSelector((store) => store.tracks);

  return (
    <header>
      <h1>Gift Music</h1>
      <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
          </div>
          <div>
            <label htmlFor="to">To</label>
            <input type="text" id="to" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <div>
            {tracksPlaylist.map((track) => (
              <TrackList key={track.id} track={track} />
            ))}
          </div>
          <button>Create</button>
        </form>
      </div>
    </header>
  );
};

export default HeaderMusic;
