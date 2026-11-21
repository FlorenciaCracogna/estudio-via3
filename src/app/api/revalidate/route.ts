import { revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Firma inválida", { status: 401 });
    }

    // Limpia el caché de todo el sitio (home, /ideas y cualquier página futura)
    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true, type: body?._type });
  } catch (error) {
    console.error("Error en revalidación:", error);
    return new NextResponse("Error al revalidar", { status: 500 });
  }
}