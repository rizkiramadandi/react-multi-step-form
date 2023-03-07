export default function InputTextComponent({ input, dispatch }) {
    function handleChange(e) {
        let val = e.target.value
        if(input.getPattern().length > 0) {
            const regex = new RegExp(`[^${input.getPattern().join('')}]`,'g')
            val = val.replace(regex, '')
        }
        
        input.setValue(val)
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
            <input className="w-full border-b-2 leading-8 border-gray-200 border-solid focus:outline-0 focus:border-gray-500" id={input.getId()} type={input.getType()} placeholder={input.getPlaceholder()} maxLength={input.getMaxLength()} value={input.getValue()} name={`${input.getName()}_${input.getId()}`} onChange={(e) => handleChange(e)}></input>
            {input.getHelper() ? (
                <div className="text-sm text-gray-400">
                    { input.getHelper() }
                </div>
            ) : (<></>)}

            {input.getPattern().length > 0 ? (
                <div className="text-sm text-gray-400">
                    Only accept: { input.getPattern().join(', ') }
                </div>
            ) : (<></>)}

            {input.getMaxLength() ? (
                <div className="text-sm text-gray-400">
                    Max length: { input.getMaxLength() } character(s)
                </div>
            ) : (<></>)}
        </>
    )
}