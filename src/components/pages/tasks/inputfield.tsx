
interface InputFieldProps {
    value: string,
    handleInput: (str: string) => void,
    handleSubmit: () => void,
}
export const InputField =({value, handleInput, handleSubmit}: InputFieldProps) => {
    return (
        <label>
            <input placeholder='Add ToDo' value={value} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add ToDo</button>
        </label>
    );

}