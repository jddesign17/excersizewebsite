import React, { useEffect, useState } from 'react';
import { GiGymBag } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const List = () => {
    const [category, setCategory] = useState('waist');
    const [exerciseData, setExerciseData] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const bodyParts = ['waist', 'back', 'chest', 'cardio'];
            const apiKey = "b5f964935dmsh5698ec9c2cef439p12e0e8jsna6d7c33301eb";
            const rapidApiHost = 'exercisedb.p.rapidapi.com';

            try {
                const promises = bodyParts.map(async (part) => {
                    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`;
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': apiKey,
                            'X-RapidAPI-Host': rapidApiHost,
                        },
                    });
                    const data = await response.json();
                    return data;
                });
                const results = await Promise.all(promises);
                const flatArray = results.flat();
                setExerciseData(flatArray);
                console.log(flatArray)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = exerciseData.filter((item) => item.bodyPart === category);
        const slicedData = filtered.slice(0, 8);
        setData(slicedData);
    }, [category, exerciseData]);

    const handleButton = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    function handlenavigate(id)
    {
        navigate(`/exercises/${id}`)
    }
    return (
        <div className="py-5 lg:px-20 px-10">
            <p className="text-xl uppercase font-extrabold text-center">
                <span className="text-primary">Select</span> Category
            </p>
            <div className="flex justify-around mt-10">
                {['waist', 'back', 'chest', 'cardio'].map((part) => (

                  <a href='#exercise'>
                    <div
                        key={part}
                        className={`${
                            category === part ? 'text-primary' : 'text-black'
                        } flex flex-col justify-center items-center cursor-pointer`}
                        onClick={() => handleButton(part)}
                    >
                        <GiGymBag className="text-2xl md:text-5xl" />
                        <p className="text-md mt-4 uppercase font-bold">{part}</p>
                    </div>
                  </a>

                ))}
            </div>

            <div className="md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10" id='exercise'>
                {data.map(({ bodyPart, gifUrl, name, equipment ,id}) => (
                    <div
                        key={id} onClick={()=>handlenavigate(id)}
                        className="shadow-lg border-gray px-3 py-7 rounded-l-lg cursor-pointer flex flex-col items-center justify-center"
                    >
                        <img src={gifUrl} className="md:w-[100%]" alt={name} />
                        <p className="text-black font-bold uppercase text-center text-lg md:text-sm py-5 px-2">
                            {name}
                        </p>
                        <div className="flex space-x-3 justify-center">
                            <button className="bg-primary md:px-2 md:py-1 px-5 py-3 rounded-xl text-xs font-bold text-white uppercase">
                                {bodyPart}
                            </button>
                            <button className="bg-primary md:px-2 md:py-1 px-5 py-3 rounded-xl text-xs font-bold text-white uppercase">
                                {equipment}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
