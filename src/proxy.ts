import { NextResponse, type NextRequest } from "next/server";

/**
 * La página de equipo (/equipo, antes /nosotros, con detalle por ?miembro=)
 * se eliminó: todo va con 301 a la sección del home. Se hace acá y no en
 * next.config porque los redirects de config conservan el query string y
 * quedaría /?miembro=1#equipo.
 */
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/#equipo", request.url), 301);
}

export const config = {
  matcher: ["/equipo", "/nosotros"],
};
