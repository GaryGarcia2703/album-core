// components/AlbumIcon.jsx
function AlbumIcon({ coverUrl }) {
  return (
    <img
      src={coverUrl}
      alt=""
      className="w-6 h-6 rounded object-cover"
    />
  );
}

export default AlbumIcon;