import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON bodies
  app.use(express.json());

  // API Routes
  app.post("/api/send-whatsapp", async (req, res) => {
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
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
