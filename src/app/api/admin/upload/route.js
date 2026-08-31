import { withAdmin, ok, err } from "@/lib/apiHelpers";
import { uploadImage } from "@/lib/cloudinary";

export async function POST(req) {
  return withAdmin(async () => {
    const formData = await req.formData();
    const file = formData.get("file");
    const folder = formData.get("folder") || "avim-events";

    if (!file) return err("No file provided");

    try {
      const result = await uploadImage(file, folder);
      return ok({ url: result.secure_url, publicId: result.public_id });
    } catch (e) {
      return err(e.message, 500);
    }
  });
}
