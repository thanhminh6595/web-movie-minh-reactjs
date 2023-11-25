const Banner = (props) => {
  return (
    <div className="relative">
      <div>
        <img
          className=" w-full object-cover h-screen"
          src={`https://image.tmdb.org/t/p/original/${props.banner.backdrop_path}`}
          alt={props.banner.name}
        />
      </div>

      <div className="absolute top-1/3 text-white pl-10 max-w-6xl">
        <div>
          <h1 className="uppercase text-5xl font-bold tracking-wider mb-8">
            {props.banner.name}
          </h1>
        </div>

        <div className="mb-3">
          <button className="bg-gray-600 opacity-60 py-2 px-6 mr-3 cursor-pointer hover:bg-gray-500">
            Play
          </button>
          <button className="bg-gray-600 opacity-60 py-2 px-6 mr-3 cursor-pointer hover:bg-gray-500">
            My List
          </button>
        </div>

        <p className="w-full">{props.banner.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
