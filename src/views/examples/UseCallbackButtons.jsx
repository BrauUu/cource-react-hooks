import React from "react";

const UseCallbackButtons = (props) => {
    return (
        <div>
            <button className="btn"
                onClick={() => props.onClick(6)}
            >
                +6
            </button>
            <button className="btn"
                onClick={() => props.onClick(12)}
            >
                +12
            </button>
            <button className="btn"
                onClick={() => props.onClick(18)}
            >
                +18
            </button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)