import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {

    const { nome, telefone, chavePix } = await req.json();

    const novoUser = await prisma.user.create({
      data: { nome, telefone, chavePix },
    });

    return NextResponse.json(novoUser, { status: 201 });
  } catch (error) {
    console.error("Erro no POST /api/form:", error);
    return NextResponse.json({ erro: "Erro ao salvar dados do usuário" }, { status: 500 });
  }
}