import { SessionRepository } from '../repositories/SessionRepository';

export class SessionService {
    private sessionRepository = new SessionRepository();

    async createSession(
        name: string,
        sessionDate: string,
        durationInMin: number,
        notes: string | undefined,
        narratorId: string
    ) {
        return await this.sessionRepository.createSession(
            name,
            sessionDate,
            durationInMin,
            notes,
            narratorId
        );
    }

    async getSessionsByNarrator(narratorId: string) {
        return await this.sessionRepository.getSessionsByNarrator(narratorId);
    }
}
