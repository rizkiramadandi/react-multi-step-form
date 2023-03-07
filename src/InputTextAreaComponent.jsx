export default function InputTextAreaComponent({ input, dispatch }) {
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
                    {input.getRequired() ? ' *Required':''}
                </span>
            </label>
            <textarea className="border p-2 border-2 rounded border-gray-200 focus:border-gray-500" id={input.getId()} type={input.getType()} placeholder={input.getPlaceholder()} name={`${input.getName()}_${input.getId()}`} onChange={(e) => handleChange(e)} value={input.getValue()} rows={input.getRows()} cols={input.getCols()}></textarea>
            {input.getHelper() ? (
                <div className="text-sm text-gray-400">
                    *{ input.getHelper() }
                </div>
            ) : (<></>)}

            {input.getPattern().length > 0 ? (
                <div className="text-sm text-gray-400">
                    Only accept: { input.getPattern().join(', ') }
                </div>
            ) : (<></>)}
        </>
    )
}