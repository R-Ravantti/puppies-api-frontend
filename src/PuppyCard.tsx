import React from 'react';
import {DogDTO, deletePuppy} from './Apicalls';

type PuppyCardProps = {
    puppyInfo: DogDTO,
    setPuppies: React.Dispatch<React.SetStateAction<DogDTO[]>>
}

function PuppyCard(props: PuppyCardProps) {
    const { puppyInfo, setPuppies } = props;
    return (
        <div className="PuppyCard">
            <button onClick={() => {
                deletePuppy(puppyInfo.id, setPuppies);
            }}>X</button>
            <p>{puppyInfo.id}</p>
            <p>{puppyInfo.name}</p>
            <p>{puppyInfo.breed}</p>
            <p>{puppyInfo.birthdate}</p>
        </div>
    )
}

export default PuppyCard;