import { useParams } from "react-router";

const Materi = () => {
  const { id } = useParams();

  return (
    <div className="mt-29">
      <p>Materi ke - {id}</p>
    </div>
  );
};

export default Materi;
