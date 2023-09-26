import Image from 'next/image'
import axios from 'axios';
import React, { useState, FC } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface City {
  id: number;
  nome: string;
  dataCriacao: string;
  populacao: number;
  pib: string;
  idh: number;
  imageURL: string;
  descricao: string;
}

interface MainPageProps {
  initialData: City[];
}

const MainPage: FC<MainPageProps> = ({ initialData }) => {
  const [cities, setCities] = useState<City[]>(initialData);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const handleCityClick = (city: City, index: number) => {
    if (selectedCity === index) {
      setSelectedCity(null);
    } else {
      setSelectedCity(index);
    }
  };

  return (
  <div className="container mx-auto text-gray-700">
    <ul className="list-none">
      {cities.map((city, index) => (
        <li
          key={index}
          onClick={() => handleCityClick(city, index)}
          className="cursor-pointer p-2 hover:bg-gray-100"
        >
          {city.nome}
          {selectedCity === index && (
            <div className="p-4 border border-gray-300 bg-white mt-2 rounded shadow-lg">
              <img
                src={`/${city.nome}.jfif`}
                alt={`${city.nome}`}
                className="w-auto h-64 object-cover rounded"
              />
              <p className="text-sm mt-2">{city.descricao}</p>
              <button
                onClick={() => setSelectedCity(null)}
                className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 mt-2 rounded"
              >
                Fechar
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>

  );
};

export async function getServerSideProps() {
  const res = await axios.get( `${process.env.NEXT_PUBLIC_BASE_URL}/cidades/getAll`); // 'http://localhost:5000/cidades/getAll
  console.log(res);
  return { props: { initialData: res.data } };
}

export default MainPage;
