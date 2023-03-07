import { useState, useReducer, useEffect } from "react"
import MultiStepComponent from './MultiStepComponent'

const TXT = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas ratione, officia qui fugiat sequi. Temporibus dolorum commodi voluptates cum nobis asperiores et sed quia corporis optio ut libero cumque neque reiciendis facilis, maiores delectus alias rem incidunt aspernatur ab, autem omnis consequuntur veritatis!.

Esse vero veritatis, quasi vel suscipit illo assumenda hic, non id sed dolorem nesciunt dicta. Suscipit cumque ex quos ab, quo qui natus. A, dicta velit! Debitis, id ipsam ducimus vel incidunt quos delectus doloribus. Architecto totam ut quo tempore nulla dolorem quod perspiciatis, nam dolore in, ea, suscipit cum id at? Natus culpa nihil voluptas officiis nam error repudiandae ipsum nobis eos, incidunt sed consequuntur quibusdam doloremque ratione illo facere asperiores dicta! Eum est provident commodi eaque maxime numquam laboriosam ad, quae quisquam harum fugiat dolore voluptatibus ullam et nostrum delectus quaerat deserunt nulla, eius perspiciatis eveniet. Maiores laboriosam aliquid, et enim beatae temporibus nesciunt, doloribus maxime eum autem accusantium?.

Dolore inventore quod exercitationem consequatur architecto dolor minus velit incidunt. Accusantium, doloremque! Aut tempora iste vero maxime eius iusto magni quod, ducimus optio sit beatae nisi inventore voluptatum consequatur neque voluptatem quae ut delectus omnis, assumenda natus fugiat enim animi. Consequatur, harum cum accusantium quos omnis quae. Porro explicabo optio doloribus tempora perspiciatis sint exercitationem eos mollitia vitae, itaque doloremque reprehenderit magni natus, similique dignissimos quibusdam. Ab nihil placeat laborum corporis cumque repellat dolorem reprehenderit ipsam possimus eligendi perspiciatis nobis fuga facilis, saepe asperiores! Optio est quibusdam facere sed sequi, vel sint rerum veniam quia iure odio minus ullam saepe cumque doloribus maiores debitis eum nulla inventore harum hic. Adipisci delectus omnis velit magni consectetur odio dolores corporis, animi optio fugit facilis vero nemo inventore ut alias porro. Doloremque, impedit nulla qui delectus, aut quae quasi officia perspiciatis sunt corporis distinctio odit ducimus vitae. Iure, dolorum. Adipisci nisi hic et asperiores accusamus sunt ratione quidem, ullam deserunt.

Blanditiis recusandae dicta repellat a temporibus neque, porro molestias repudiandae minus est repellendus impedit unde quasi, eius asperiores, debitis dolore dolores non nostrum! Est fugit et ut, veritatis dignissimos perferendis a similique natus id corrupti quod. Distinctio delectus suscipit enim beatae quidem! Doloremque, debitis! Nostrum, fugiat voluptate. Dolore in tempore, sed cupiditate velit explicabo id ad libero odio, consectetur, quasi voluptates.

Cupiditate accusantium libero asperiores quos ipsum, voluptate placeat. Consectetur provident adipisci corrupti aliquid praesentium ea dolores, amet fugit quaerat. Magnam consequuntur voluptatibus sit, odit, aspernatur illo cupiditate voluptate porro quis harum alias obcaecati veniam animi saepe earum aliquid! Ex iusto beatae quas quisquam dolore dicta, distinctio exercitationem libero numquam, hic consectetur impedit iste quam. Ipsa magnam quo odio debitis facere! Odio eum cum, culpa laudantium corrupti vel, aperiam perferendis excepturi aliquid deserunt necessitatibus aspernatur nulla vero dicta ab eaque. Tempora dicta, debitis commodi ut quos autem rerum non vitae modi excepturi, velit laboriosam deleniti. Reiciendis perspiciatis et unde, consequatur assumenda rem eius nemo obcaecati distinctio autem dolore, earum, ea natus? Similique et incidunt in alias, nemo, temporibus architecto officiis nihil nulla reprehenderit labore eligendi voluptas voluptatum repudiandae suscipit, nostrum eveniet culpa tempore provident quod amet! Nisi inventore quas non voluptatem laboriosam quam fuga voluptas! Dignissimos distinctio consequatur amet perspiciatis sed neque! Officiis deleniti ducimus sint magnam doloremque cumque numquam voluptates odio quia exercitationem earum, eligendi placeat impedit nisi dicta iusto quibusdam neque ea, quasi maiores explicabo? Suscipit aut maxime, accusamus nam, illum ipsum neque mollitia excepturi magni autem unde obcaecati et sunt atque saepe necessitatibus, culpa pariatur voluptas ut omnis. Ipsa magni ipsum quae deserunt, molestiae sunt dolorem non aspernatur earum commodi tenetur distinctio enim, architecto nam blanditiis quo accusamus ipsam soluta natus atque autem perferendis? Placeat, a culpa omnis numquam consequuntur architecto error maiores rem pariatur, est incidunt modi, repudiandae saepe asperiores sed laborum? Saepe necessitatibus ratione natus, assumenda corrupti provident alias autem, aut, nulla ea quasi error id at animi veniam modi explicabo unde eligendi nisi. Magni, sequi ratione? Commodi hic, dolorem eveniet architecto laboriosam ab facere ratione. Odit ex doloribus placeat quidem adipisci odio at id accusantium dolorum, deserunt vel eligendi tenetur nam asperiores nesciunt blanditiis modi quas saepe autem! Quis voluptas, alias vitae quidem eos, quo sint libero, excepturi blanditiis facere vel ipsam rem sed saepe perferendis velit! Ipsum corrupti beatae tempore, ad quaerat quidem dicta rem quasi, repellendus provident, odit magni ab praesentium quas pariatur consequuntur hic accusantium nam. Minima, molestias. Sed aut voluptas, nam voluptate cumque, illo quod aliquid, eveniet quo totam delectus magni! Earum, maiores!.

Ipsa porro suscipit magnam necessitatibus inventore laborum ipsum odio tempora hic sed atque velit consectetur facere accusantium perferendis, nemo eos repellat animi. Fugiat mollitia eum sequi voluptatibus, dignissimos natus maxime dolorem modi odit, quis dolorum numquam, reprehenderit repellendus necessitatibus. Velit alias id molestias iusto consequatur sint pariatur et animi odio inventore placeat autem tempore quo totam rem molestiae cum ipsam, quos labore eos provident. Dignissimos temporibus totam quaerat possimus iste explicabo impedit aspernatur fugit itaque autem fuga numquam nam nobis accusamus, illo nihil non sunt sequi repellat, quisquam quod provident vel! Voluptate, repellat numquam corporis sequi ratione, qui voluptates eum ipsa officia neque, quis voluptatibus! Dignissimos beatae commodi hic et delectus doloremque reprehenderit libero accusantium impedit veniam harum, unde nobis quibusdam officiis amet, officia eveniet voluptatem dolore culpa? Magni, nihil at. Vel, rem magni molestias quasi consectetur nisi ipsa, modi cum a hic doloribus molestiae quae nostrum quo sapiente enim, vero harum deleniti? Earum, facere expedita! Dolorum, optio rem quibusdam mollitia, voluptates eveniet sit inventore illum nobis molestiae voluptatibus. Et adipisci assumenda quisquam dicta, laborum rem laudantium eligendi iure vitae. Eveniet, omnis porro necessitatibus asperiores fugit inventore quisquam deserunt corrupti. Ullam qui perspiciatis eos reiciendis sunt. Veniam id dignissimos, ipsum mollitia, asperiores reprehenderit quam odit, dolorum veritatis quod nostrum voluptas ex accusantium in nihil impedit temporibus perferendis fugiat iusto itaque. Voluptas est, consectetur ipsa odit velit cumque earum pariatur. Dignissimos eum perspiciatis repellendus consequuntur ullam ipsa, quod, quasi placeat aut inventore ratione tenetur laborum eveniet minus earum nisi officiis, architecto natus? Ullam nulla sequi explicabo at pariatur quod, id quam, iusto assumenda velit provident aut!`

// { name = `New Step`, list = [], active = false}
class Step {
  constructor(step) {
    this.id = new Date().getTime() + Math.floor(Math.random() * 999999)
    this.name = step.name || 'New Step'
    this.list = step.list || []
    this.active = step.active || false
  }
  setList(list) {
    this.list = list
  }
  getList() {
    return this.list
  }
  getName() {
    return this.name
  }
  pushList(data) {
    this.list.push(data)
  }
  getId() {
    return this.id
  }
  setActive(active) {
    this.active = active
  }
  getActive() {
    return this.active
  }
}

// { name = 'input', placeholder = null, label = null, type = INPUT_TYPE.TEXT, value = '', required = false, helper = null, pattern = [], maxLength = null}
class Input {
  constructor(input) {
    this.id = new Date().getTime() + Math.floor(Math.random() * 999999)
    this.name = input.name?.replace(/[^A-Za-z_]/g, ' ').replace(/ +/g, '_').toLowerCase() || 'input'
    this.placeholder = input.placeholder || input.name[0].toUpperCase() + input.name.slice(1) || 'Input'
    this.label = input.label || input.name[0].toUpperCase() + input.name.slice(1) || 'Input'
    this.type = input.type || INPUT_TYPE.TEXT
    this.value = input.value || ''
    this.required = input.required || false
    this.helper = input.helper || null
    this.pattern = input.pattern || []
    this.maxLength = input.maxLength || null
  }
  getType() {
    return this.type
  }
  getName() {
    return this.name
  }
  getPlaceholder() {
    return this.placeholder
  }
  getLabel() {
    return this.label
  }
  getValue() {
    return this.value
  }
  getId() {
    return this.id
  }
  getRequired() {
    return this.required
  }
  getHelper() {
    return this.helper
  }
  setValue(value) {
    this.value = value
  }
  getPattern() {
    return this.pattern
  }
  getMin() {
    return this.min
  }
  getMaxLength() {
    return this.maxLength
  }
}

class TextArea extends Input {
  constructor(input, textarea) {
    super(input)
    this.rows = textarea.rows || 4,
    this.cols = textarea.cols || 4
  }
  getRows() {
    return this.rows
  }
  getCols() {
    return this.cols
  }
}

class Range extends Input {
  constructor(input, range) {
    input.value = range.min || 1
    super(input)
    this.min = range.min || 1
    this.max = range.max || 100
  }
  getMin() {
    return this.min
  }
  getMax() {
    return this.max
  }
}

class Info extends Input {
  constructor(input, info) {
    super(input)
    this.type = info.type || INPUT_TYPE.INFO
    this.text = info.text || TXT
  }
  getText() {
    return this.text
  }
}

class Multiple extends Input {
  constructor(input, multiple) {
    super(input)
    this.list = multiple.list || []
  }
  getList() {
    return this.list
  }
}

export const ACTION_TYPE = {
  ACTIVATE_STEP: 'activate-step'
}

export const INPUT_TYPE = {
  TEXT: 'text',
  TEXT_AREA: 'textarea',
  DATE: 'date',
  DATE_TIME: 'datetime-local',
  NUMBER: 'number',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  MONTH: 'month',
  COLOR: 'color',
  PASSWORD: 'password',
  WEEK: 'week',
  TIME: 'time',
  RANGE: 'range',
  INFO: 'info'
}

function reducer(multiStep, action) {
  switch(action.type) {
    case ACTION_TYPE.ACTIVATE_STEP:
      // const currentStep = multiStep.filter(ms => ms.getActive())[0]
      // let isOkayToActive = true
      
      // // check if every input inside step is not null
      // const values = currentStep.getList().filter(sl => sl.getRequired()).map(sl => {
      //   return !sl.getValue() || sl.getValue().length === 0
      // })

      // if(values.includes(true)) isOkayToActive = false

      // if(isOkayToActive) {
        return multiStep.map(ms => {
          if(ms.getId() === action.payload.id) {
            ms.setActive(true)
          }
          else {
            ms.setActive(false)
          }
          return ms
        })
      // }
      // alert('Please fill all the required field(s)')
      // return multiStep
    default:
      return [...multiStep]
  }
}

function App() {
  const [formData, setFormData] = useState(null)
  const [multiStep, dispatch] = useReducer(reducer, [
    new Step({
      name: 'Intro',
      active: true,
      list: [
        new Info({name: 'Lorem Ipsum'}, {text: `React.js Multi-Step Form made with React.js, Tailwind CSS, and Vite.`})
      ]
    }),
    new Step({
      name: "Available Input",
      list: [
        new Info({name: 'Lorem Ipsum'}, {text: `List of currently available form input.`}),
        new Input({name: 'Text', type: INPUT_TYPE.TEXT}),
        new Input({name: 'Password', type: INPUT_TYPE.PASSWORD}),
        new TextArea({name: 'Text Area', type: INPUT_TYPE.TEXT_AREA}, {}),
        new Input({name: 'Date Time', type: INPUT_TYPE.DATE_TIME}),
        new Input({name: 'Date', type: INPUT_TYPE.DATE}),
        new Input({name: 'Month', type: INPUT_TYPE.MONTH}),
        new Input({name: 'Time', type: INPUT_TYPE.TIME}),
        new Input({name: 'Week', type: INPUT_TYPE.WEEK}),
        new Input({name: 'Color', type: INPUT_TYPE.COLOR}),
        new Input({name: 'Number', type: INPUT_TYPE.NUMBER}),
        new Range({name: 'Range', type: INPUT_TYPE.RANGE}, {min: 1, max: 100}),
        new Multiple({name: 'Radio', type: INPUT_TYPE.RADIO}, {list: [
          {checked: false, text: `First Radio`},
          {checked: false, text: `Second Radio`},
          {checked: false, text: `Third Radio`},
          {checked: false, text: `Fourth Radio`},
        ]}),
        new Multiple({name: 'Checkbox', type: INPUT_TYPE.CHECKBOX}, {list: [
          {checked: false, text: `First Checkbox`},
          {checked: false, text: `Second Checkbox`},
          {checked: false, text: `Third Checkbox`},
          {checked: false, text: `Fourth Checkbox`},
        ]})
      ]
    }),
    new Step({
      name: 'Example Important Information',
      list: [
        new Info({name: 'Lorem Ipsum'}, {}),
        new Multiple({name: 'Consent', type: INPUT_TYPE.CHECKBOX, required: true}, {list: [
          {checked: false, text: `I understand`}
        ]})
      ]
    }),
    new Step({
      name: "Example Profile Data",
      list: [
        new Input({name: 'Full Name', required: true, maxLength: 50}),
        new Input({name: 'Username', required: true, maxLength: 20, pattern: [
          `A-Z`,
          `a-z`,
          `0-9`,
          `-`,
          `_`
        ]}),
        new Input({name: 'E-Mail', required: true, maxLength: 100,helper: 'E-Mail example: username@domain.com', pattern: [
          `A-Z`,
          `a-z`,
          `0-9`,
          `-`,
          `_`,
          `@`,
          `.`
        ]}),
        new Input({name: 'Phone Number', maxLength: 100, pattern: [
          `0-9`,
          `+`,
          `-`
        ]}),
        new Input({name: 'Date of Birth', type: INPUT_TYPE.DATE, required: true}),
        new TextArea({name: 'About', type: INPUT_TYPE.TEXT_AREA},{}),
      ]
    })
  ])

  function handleSubmit(e) {
    e.preventDefault()
    if(confirm(`Are you sure want to submit this form?`)) {
      let isOkayToSent = true
      const requiredInput = []
      multiStep.forEach(ms => ms.getList().filter(il => il.getRequired() ? requiredInput.push(il) : null))
      requiredInput.forEach(ri => {
        if(!ri.getValue() || ri.getValue().length === 0) {
          isOkayToSent = false
          return
        }
      })
      
      if(isOkayToSent) {
        let d = new FormData(e.target)
        setFormData(JSON.stringify(Object.fromEntries(d)))
      }
      else {
        alert(`Please fill all the required field(s) before submitting the form.`)
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <form onSubmit={handleSubmit} method="POST">
          <MultiStepComponent multiStep={multiStep} dispatch={dispatch} />
        </form>
      </div>

      {formData ? (
        <div className="fixed flex justify-center items-center w-screen h-screen p-10 top-0 left-0">
          <div className="bg-white w-full h-full rounded-md p-4">
              <div className="flex gap-2">
                <h1 className="text-xl font-bold border-b-2 pb-2 grow">
                  Form Data
                </h1>
                <button className="ml-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded" onClick={() => setFormData(null)}>X</button>
              </div>
              <div className="p-2">
                <pre className="whitespace-pre-line break-words">
                  {formData}
                </pre>
              </div>
          </div>
        </div>
      ) : (<></>)}
    </>
  )
}

export default App
