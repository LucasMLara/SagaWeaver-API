import { Request, Response } from 'express';

export interface MyContext {
    req: Request;
    res: Response;
    user?: {
        id: string;
        email: string;
    };
    // Você pode incluir serviços globais que precisa aqui:
    // prisma: PrismaClient;
    // logger: Logger;
}
