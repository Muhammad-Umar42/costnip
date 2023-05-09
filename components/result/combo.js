import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import useSWR from 'swr';
import DefaultLoading from '../loding';

const Combo = () => {
  const [query, setQuery] = useState('');

  const [data, setData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('test');

  const handleChange = async (e) => {
    setQuery(e.target.value);
    const url = `https://cnbackend.appspot.com/search?key=AIzaSyCK-zbsEAEkwSHSBMG6qJG9S121VAH_ArU&search=${e.target.value}&radius=2000&location=40,-70`;
    try {
      const res = await fetch(url);
      const realData = await res.json();
      console.log(realData);
      setData(realData);
    } catch (error) {
      console.log(error);
    }
  };

  const selectChange = (e) => {
    console.log(e, 'e');
    setSelectedPerson(e);
  };

  const filteredPeople =
    query === ''
      ? data
      : data?.filter((person) => {
          return person.service_code
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={selectChange}>
      <Combobox.Input
        className={'w-full bg-gray-100 py-2 px-3 outline-none'}
        onChange={handleChange}
      />
      <Combobox.Options>
        {filteredPeople?.map((person) => (
          <Combobox.Option
            key={person.index}
            value={person.service_code}
            className='px-3 py-2 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-800'
          >
            {person.service_code}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default Combo;
