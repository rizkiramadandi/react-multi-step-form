import { INPUT_TYPE } from "./App"

export default function InputMultipleComponent({ input, dispatch }) {
    function handleChange(e, idx) {
        switch(input.getType()) {
            case INPUT_TYPE.CHECKBOX:
                let val = input.getList()[idx]
                val.checked = e.target.checked

                input.setValue(input.getList().filter(il => il.checked).map(il => il.text))
                break
            default:
                input.setValue(e.target.value)
                break
        }

        dispatch({})
    }

    return (
        <>
            <label htmlFor={input.getId()} className="font-bold">
                {input.getLabel()}
                <span className="text-red-500 text-xs">
                    {input.getRequired() && (!input.getValue() || input.getValue().length === 0) ? ' *Required':''}
                </span>
            </label>

            <div className="flex gap-2 items-center justify-between">
                {input.getList().map((il, idx) => {
                    return (
                    <div className="flex gap-2">
                        <input className="border-b-2 p-2 border-gray-200 border-solid focus:outline-0 focus:border-gray-500 hover:cursor-pointer" id={`${input.getId()}_${idx}`} type={input.getType()} placeholder={input.getPlaceholder()} maxLength={input.getMaxLength()} value={il.text} name={`${input.getName()}_${input.getId()}[]`} onChange={(e) => handleChange(e, idx)}></input>
                        <label className="hover:cursor-pointer" htmlFor={`${input.getId()}_${idx}`}>{il.text}</label>
                    </div>
                    )
                })}
            </div>

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