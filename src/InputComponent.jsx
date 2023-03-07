import InputTextComponent from "./InputTextComponent"
import InputTextAreaComponent from "./InputTextAreaComponent"
import InputRangeComponent from "./InputRangeComponent"
import InfoComponent from "./InfoComponent"
import InputMultipleComponent from "./InputMultipleComponent"

import { INPUT_TYPE } from "./App"

export default function InputComponent({ input, dispatch }) {
    function renderInput(input) {
        switch(input.getType()) {
            case INPUT_TYPE.RADIO:
            case INPUT_TYPE.CHECKBOX:
                return <InputMultipleComponent key={input.getId()} input={input} dispatch={dispatch} />
            case INPUT_TYPE.INFO:
                return <InfoComponent key={input.getId()} info={input} />
            case INPUT_TYPE.TEXT_AREA:
                return <InputTextAreaComponent key={input.getId()} input={input} dispatch={dispatch}/>
            case INPUT_TYPE.RANGE:
                return <InputRangeComponent key={input.getId()} input={input} dispatch={dispatch}/>
            default:
                return <InputTextComponent key={input.getId()} input={input} dispatch={dispatch} />
        }
    }

    return (
        <div className="flex flex-col gap-1 w-full">
            {
                renderInput(input)
            }
        </div>
    )
}