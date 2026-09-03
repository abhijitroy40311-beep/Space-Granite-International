export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, phone, email, material, message } = req.body;

    if (!name || !phone || !material) {
      return res.status(400).json({ error: "Name, phone, and material are required." });
    }

    const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
    const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const WHATSAPP_RECIPIENT_NUMBER = process.env.WHATSAPP_RECIPIENT_NUMBER;
    const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || "hello_world";

    if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_RECIPIENT_NUMBER) {
      console.warn("WhatsApp credentials are not configured. Bypassing WhatsApp notification.");
      return res.status(200).json({ success: true, message: "Enquiry submitted successfully (WhatsApp skipped due to missing config)." });
    }

    let bodyPayload;
    if (WHATSAPP_TEMPLATE_NAME === "hello_world") {
      bodyPayload = {
        messaging_product: "whatsapp",
        to: WHATSAPP_RECIPIENT_NUMBER,
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_US" },
        },
      };
    } else {
      bodyPayload = {
        messaging_product: "whatsapp",
        to: WHATSAPP_RECIPIENT_NUMBER,
        type: "template",
        template: {
          name: WHATSAPP_TEMPLATE_NAME,
          language: { code: "en_US" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name },
                { type: "text", text: phone },
                { type: "text", text: email || "Not provided" },
                { type: "text", text: material },
                { type: "text", text: message || "No message provided" }
              ]
            }
          ]
        }
      };
    }

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyPayload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.warn("WhatsApp API Warning: Token may be expired or invalid. Notification skipped.", data);
      return res.status(200).json({ success: true, message: "Enquiry submitted, but WhatsApp notification failed." });
    }

    res.status(200).json({ success: true, message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Error in /api/send-whatsapp:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
}
