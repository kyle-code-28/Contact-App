import React from "react";

const DeleteConfirm = ({ onConfirm, onCancel }) => {
    return (
        <div style={{
            position: "fixed", top: 0, left: 0,
            width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000
        }}>
            <div className="ui card" style={{ padding: "20px", textAlign: "center", width: "250px" }}>
                <h3>Are you sure?</h3>
                <p style={{ color: "gray", marginBottom: "20px" }}>
                    This contact will be permanently deleted.
                </p>
                <button 
                    className="ui button red"
                    onClick={onConfirm}
                >
                    Yes, Delete
                </button>
                <button 
                    className="ui button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteConfirm;