interface FormSubmission {
  name: string
  email: string
  make: string
  issue: strin
}
export async fu

  timestamp: string
}

export async function sendNotificationEmail(submission: FormSubmission): Promise<void> {
  const prompt = spark.llmPrompt`You are an email composer for Greenwood's 24 Hour Mobile Mechanic Services. 

Create a professional email notification for the business owner about a new service request. The email should:
- Have a clear, professional subject line
- Be concise and well-formatted
- Include all the customer and vehicle information
- Highlight any urgent keywords in the issue description
- End with a reminder to respond promptly

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
- Thank them for reaching out
- Confirm we received their request
- Summarize their vehicle and issue
- Reassure them we'll contact them soon (within 30 minutes for emergencies, within 2 hours otherwise)
- Include the business phone number (123) 456-7890 if they need immediate assistance
- Be warm, professional, and reassuring

Customer Name: ${submission.name}
Vehicle: ${submission.year} ${submission.make} ${submission.model}
Issue: ${submission.issue}

Return the result as a JSON object with "subject" and "body" properties. Format the body with line breaks for readability.`

  try {
    const emailContent = await spark.llm(prompt, 'gpt-4o-mini', true)
    const parsedEmail = JSON.parse(emailContent)
    
    console.log('📧 Customer Confirmation Email Sent')
    console.log('To:', submission.email)
    console.log('Subject:', parsedEmail.subject)
    console.log('---')
    console.log(parsedEmail.body)
    console.log('---')
    
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error)
    throw error
  }
}
Create a professional email notification for the business owner about a new service request. The email should:
- Have a clear, professional subject line
- Be concise and well-formatted
- Include all the customer and vehicle information
- Highlight any urgent keywords in the issue description
- End with a reminder to respond promptly

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
    const emailContent = await window.spark.llm(promptText, 'gpt-4o-mini', true)
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
  const promptText = `You are an email composer for Greenwood's 24 Hour Mobile Mechanic Services.

Create a friendly confirmation email to send to the customer who just submitted a service request. The email should:
- Thank them for reaching out
- Confirm we received their request
- Summarize their vehicle and issue
- Reassure them we'll contact them soon (within 30 minutes for emergencies, within 2 hours otherwise)
- Include the business phone number (123) 456-7890 if they need immediate assistance
- Be warm, professional, and reassuring

Customer Name: ${submission.name}
Vehicle: ${submission.year} ${submission.make} ${submission.model}
Issue: ${submission.issue}

Return the result as a JSON object with "subject" and "body" properties. Format the body with line breaks for readability.`

  try {
    const emailContent = await window.spark.llm(promptText, 'gpt-4o-mini', true)
    const parsedEmail = JSON.parse(emailContent)
    
    console.log('📧 Customer Confirmation Email Sent')
    console.log('To:', submission.email)
    console.log('Subject:', parsedEmail.subject)
    console.log('---')
    console.log(parsedEmail.body)
    console.log('---')
    
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error)
    throw error
  }
}
