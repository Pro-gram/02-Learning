import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }){
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setDoneEditing ] = useState(false);
    
    function handleEditClick() {
        setDoneEditing((editing) => !editing);
    }
function handleChange(event) {
    setPlayerName(event.target.value);
}

    let editableName = <span className="payer-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editableName = (<input type="text" required value={playerName} onChange={handleChange}/>
        );
       // btnCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editableName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
      );
    }