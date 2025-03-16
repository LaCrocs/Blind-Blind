import React from 'react';
import '../../styles/games/hint.css';

interface HintProps {
    isOpen: boolean;
    hint: string;
    onClose: () => void;
}

const HintImage: React.FC<HintProps> = ({ isOpen, hint, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="hint-overlay">
            <div className="hint-popup">
                <h2>💡 Indice</h2>
                <p>Voici un indice pour vous aider à trouver la bonne chanson :</p>
                <img alt={hint} src={hint}/>
                <button className="hint-close-btn" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default HintImage;
