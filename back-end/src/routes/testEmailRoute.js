import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: '/api/test-email',
  method: 'post',
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: 'matthew.a.crist@gmail.com',
        from: 'mattcrist@outlook.com',
        subject: 'Does this work?',
        text: 'If you are reading this, then it is working!',
      });

      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}