export default function InputTextComponent({ input, dispatch }) {
    function handleChange(e) {
        let val = e.target.value
        input.setValue(parseInt(val))
        dispatch({})
    }

    return (
        <>
            <label htmlFor={input.getId()} className="font-bold">
                {input.getLabel()}
                <span className="text-red-500 text-xs">
                    {input.getRequired() && !input.getValue() ? ' *Required':''}
                </span>
            </label>
            <div className="flex gap-2">
                <span>{input.getMin()}</span>
                <input className="grow border-b-2 border-gray-200 border-solid focus:outline-0 focus:border-gray-500" id={input.getId()} type={input.getType()} min={input.getMin()} max={input.getMax()} value={input.getValue()} name={`${input.getName()}_${input.getId()}`} onChange={(e) => handleChange(e)}></input>
                <span>{input.getMax()}</span>
            </div>
            <div className="text-center font-bold">{input.getValue()}</div>
            {input.getHelper() ? (
                <div className="text-sm text-gray-400">
                    { input.getHelper() }
                </div>
            ) : (<></>)}
        </>
    )
}