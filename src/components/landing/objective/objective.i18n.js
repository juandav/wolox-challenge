import { defineMessages } from "react-intl"

const messages = defineMessages({
  motto: {
    id: 'objective.title',
    defaultMessage: `
      <p>We work to 
        <br/>
        <b><span style="color: {convertColor};">convert</span></b>
        <b><span style="color: {ideaColor};">ideas</span></b> into 
        <br/>products
      </p>
    `
  },
  btn: {
    id: 'objective.btn',
    defaultMessage: 'follow us'
  }
})

export default messages