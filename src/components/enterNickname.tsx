import { useState } from "react";

interface EnterNicknameProps {
    onCorrectNickname: () => void;
}

export default function EnterNickname({ onCorrectNickname }: EnterNicknameProps) {
    const [nickname, setNickname] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
        if (nickname.toLowerCase() === 'little shit') {
            onCorrectNickname();
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full h-screen" data-theme="retro">
            <h1 className="text-4xl font-bold text-black">Enter your nickname</h1>
            <div className="relative w-full max-w-xs">
                <input 
                    type="text" 
                    placeholder="Nickname" 
                    className="input input-bordered w-full focus:outline-none"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                {showError && (
                    <p className="absolute -bottom-6 left-0 text-red-500">OOOH that doesn't look right!</p>
                )}
            </div>
            <button 
                className="btn btn-primary w-full max-w-xs"
                onClick={handleSubmit}
            >
                LOVE YOU !
            </button>
        </div>
    )
}