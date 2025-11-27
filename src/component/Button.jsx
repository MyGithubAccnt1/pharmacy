export default function Button({ type, className, onClick, children }) {
    return (
        <button
            type={type ?? "button"}
            className={`${className} px-5 py-3 rounded-sm transition-all duration-300 cursor-pointer`}
            onClick={onClick ?? null}
            >
            <b>{children}</b>
        </button>
    )
}