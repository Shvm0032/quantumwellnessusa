export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log the data
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date(),
    })

    // Return success response
    return new Response(JSON.stringify({ message: "Message received successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
