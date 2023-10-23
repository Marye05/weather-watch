import React, { useState } from 'react'
import jsonData from '../../assets/data/city.list.min.json'
import style from './Search.module.css'
import Weather from './Weather';


    const Search = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [selectedId, setSelectedId] = useState(null); // Estado para almacenar el ID seleccionado
      const [menuVisible, setMenuVisible] = useState(true); // Inicialmente visible
  
      const handleSearch = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      if(term.length >= 3 ){
        // Filtrar resultados basados en el término de búsqueda
        const filteredResults = jsonData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        ).slice(0, 100);

        // Crear una lista de nombres únicos conservando su ID y país
        const uniqueNames = Array.from(
            new Set(filteredResults.map((result) => result.name))
          ).map((name) => {
            const firstMatch = filteredResults.find((result) => result.name === name);
            return {
              id: firstMatch.id,
              name: name,
              country: firstMatch.country,
            };
          });
          setSearchResults(uniqueNames);
          setMenuVisible(true);
        }else{
          setSearchResults([]);
          setMenuVisible(false);
        }
      };
      
      const handleSelectResult = (selectedItem) => {
        // Guarda el ID seleccionado en el estado
        setSelectedId(selectedItem.id);
        // Oculta el menú desplegable
        setMenuVisible(false);
      };
      
      return (
        <div>
        <div className={style.searchcontainer}>
          <div className={style.searchbox}>
            <input
              className={style.inputtext}
              type="text"
              placeholder="Buscar por nombre"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
           
          {searchResults.length === 0 && searchTerm.length > 0 ? 
            (<div className={style.nomatchesmessage}>No se encontraron coincidencias</div>) 
            : (<div className={style.searchresults} style={{ display: menuVisible ? 'block' : 'none' }}>
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleSelectResult(result)}>
                      {result.name} ({result.country})
                    </li>
                  ))}
                </ul>
              </div>)
          }
           </div>
          {selectedId && !menuVisible &&  <Weather locationId={selectedId} />}
          </div>

        );
      };
      

export default Search 