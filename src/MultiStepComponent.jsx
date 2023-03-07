import InputComponent from './InputComponent'

import { ACTION_TYPE } from './App'

export default function MultiStepComponent({ multiStep, dispatch }) {
  return (
    <div className='flex min-w-[75vw] min-h-[75vh] w-[75vw] h-[75vh]'>
        <div className='flex flex-col rounded-l-2xl overflow-hidden w-[25%]'>
        {multiStep.map((ms, idx) => {
            return (
            <div key={ms.getId()} className='flex grow justify-center' data-active={ ms.getActive() ? 'true':'false' }>
                <div className={`flex items-center p-2 w-full text-center justify-center hover:cursor-pointer ${ms.getActive() ? `bg-cyan-500 text-white hover:bg-cyan-600 font-bold`:`bg-stone-100 hover:bg-stone-200`}`} onClick={() => dispatch({type: ACTION_TYPE.ACTIVATE_STEP, payload: { id: ms.getId() }})}>
                    <div className='flex justify-center flex-col'>
                        {ms.getName()}
                        <span className={`text-xs${ms.getActive() ? ``:` text-red-500`}`}>
                        { ms.getList().filter(ls => ls.getRequired()).map(ls => !ls.getValue() || ls.getValue().length === 0).includes(true) ? ' *Required':'' }
                    </span>
                    </div>
                </div>
            </div>
            )
        })}
        </div>

        <div className='w-full h-full rounded-r-2xl flex flex-col bg-white overflow-hidden'>
        {multiStep.map((ms, idx) => {
            return (
                <div key={ms.getId()} className={`h-full w-full flex flex-col ${ms.getActive() ? `block`:`hidden`}`}>
                    <h1 className='p-4 text-xl font-bold bg-cyan-500 text-white'>{ ms.getName() }</h1>
                    <div className='p-4 gap-4 flex flex-col overflow-y-auto'>
                        {ms.getList().map((sl) => {
                        return (
                            <InputComponent key={sl.getId()} input={sl} dispatch={dispatch} />
                        )
                        })}
                    </div>

                    <div className='mt-auto sticky bottom-0 w-full bg-white p-4 border-t-2'>
                        <div className='flex gap-1 justify-end'>
                            { idx > 0 ? (
                                <div className='bg-stone-500 p-2 rounded text-white hover:bg-stone-600 hover:cursor-pointer' onClick={() => dispatch({ type: ACTION_TYPE.ACTIVATE_STEP, payload: { id: multiStep[(idx - 1)].getId() } })}>Back</div>
                            ) : (<></>) }

                            { idx < multiStep.length - 1 ? (
                                <div className='bg-cyan-500 p-2 rounded text-white hover:bg-cyan-600 hover:cursor-pointer' onClick={() => dispatch({ type: ACTION_TYPE.ACTIVATE_STEP, payload: { id: multiStep[(idx + 1)].getId() } })}>Next</div>
                            ) : (<></>) }

                            { idx === multiStep.length - 1 ? (
                                <button className='bg-cyan-500 p-2 rounded text-white hover:bg-cyan-600'>Submit</button>
                            ) : (<></>) }
                        </div>
                    </div>
            </div>
        ) }) }
        </div>
    </div>
  )
}
