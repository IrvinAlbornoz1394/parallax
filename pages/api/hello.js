/* import { EmailTemplate } from "../../components/EmailTemplate" */
import { Resend } from "resend"

const resend = new Resend('re_VrfJd5pL_HTFDTYBMXATugMa3KLfEobbC');


const Send =  async (req, res) => {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'irvinalbornoz1394@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

  if (error) {
    return res.status(400).json(error)
  }
  res.status(200).json(data)
}

export default Send
