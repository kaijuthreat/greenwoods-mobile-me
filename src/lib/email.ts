interface FormSubmission {
  name: string
  phone: string
  email: string
  year: string
  make: string
  model: string
  issue: string
  timestamp: string
}

export async function sendNotificationEmail(submission: FormSubmission): Promise<void> {
  const prompt = spark.llmPrompt`You are an email composer for Greenwood's 24 Hour Mobile Mechanic Services. 

Create a professional email notification for the business owner about a new service request. The email should:
- Have a clear, professional subject line
- Include all customer and vehicle details
- Be formatted professionally

Customer Information:
- Name: ${submission.name}
- Phone: ${submission.phone}
- Email: ${submission.email}

Vehicle Information:
- Year: ${submission.year}
- Make: ${submission.make}
- Model: ${submission.model}

Issue Description:
${submission.issue}

Submission Time: ${new Date(submission.timestamp).toLocaleString()}

Return the result as a JSON object with "subject" and "body" properties. Format the body with line breaks for readability.`

  try {
    const emailContent = await spark.llm(prompt, 'gpt-4o-mini', true)
    const parsedEmail = JSON.parse(emailContent)
    
    console.log('📧 Email Notification Sent')
    console.log('To: service@greenwoodmobilemechanic.com')
    console.log('Subject:', parsedEmail.subject)
    console.log('---')
    console.log(parsedEmail.body)
    console.log('---')
    
  } catch (error) {
    console.error('Failed to send email notification:', error)
    throw error
  }
}

export async function sendCustomerConfirmationEmail(submission: FormSubmission): Promise<void> {
  const prompt = spark.llmPrompt`You are an email composer for Greenwood's 24 Hour Mobile Mechanic Services.

Create a friendly confirmation email to send to the customer who just submitted a service request. The email should:
- Thank them for their request
- Confirm we received their information
- Let them know we'll contact them soon
- Include their vehicle details for reference
- Have a warm, professional tone

Customer Name: ${submission.name}

Vehicle: ${submission.year} ${submission.make} ${submission.model}

Issue: ${submission.issue}

Return the result as a JSON object with "subject" and "body" properties. Format the body with line breaks for readability.`

  try {
    const emailContent = await spark.llm(prompt, 'gpt-4o-mini', true)
    const parsedEmail = JSON.parse(emailContent)
    
    console.log('📧 Customer Confirmation Sent')
    console.log('To:', submission.email)
    console.log('Subject:', parsedEmail.subject)
    console.log('---')
    console.log(parsedEmail.body)
    console.log('---')
    
  } catch (error) {
    console.error('Failed to send customer confirmation:', error)
    throw error
  }
}
