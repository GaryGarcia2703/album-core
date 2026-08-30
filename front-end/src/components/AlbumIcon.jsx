// components/AlbumIcon.jsx
function AlbumIcon({ coverUrl }) {
  return (
    <img
      src={coverUrl}
      alt=""
      className="w-10 h-10 rounded object-cover"
    />
  );
}

export default AlbumIcon;