import React from 'react';

const ActorCard = ({ actor }) => {

    return (
        <>
            {actor ? <div className="bg-gray-900 rounded-lg shadow-lg p-6 px-5 my-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
                <div className="mx-auto sm:mx-0 sm:mr-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
                <div className="mx-auto sm:mx-0 sm:ml-4 mt-4 sm:mt-0">
                    <h2 className="text-3xl font-bold text-white">{actor.name}</h2>
                    <p className="text-gray-400 text-lg">
                        Department: {actor.known_for_department}
                    </p>
                    <p className="text-gray-400 text-lg">Popularity: {actor.popularity}</p>
                    <p className="text-gray-400 text-lg">Gender: {actor.gender}</p>
                    <p className="text-gray-400 text-lg">ID: {actor.id}</p>
                </div>
                <div className="mt-6 sm:mt-0 sm:mx-6 pt-9 px-4">
                    <h3 className="text-xl font-semibold text-white">Known For</h3>
                    <ul className="list-disc list-inside text-gray-400 text-lg">
                        {actor.known_for.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                </div>
            </div> : null}
        </>
    );
};

export default ActorCard;
