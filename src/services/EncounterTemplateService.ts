import { EncounterTemplateRepository } from "../repositories/EncounterTemplateRepository";

export class EncounterTemplateService {
    private encounterTemplateRepository = new EncounterTemplateRepository();

    async createEncounterTemplate(title: string, description: string, difficulty: string, sessionId: string) {
        return await this.encounterTemplateRepository.createEncounterTemplate(
            title,
            description,
            difficulty,
            sessionId
        );
    }

    async listEncounterTemplatesBySession(sessionId: string) {
        return await this.encounterTemplateRepository.listEncounterTemplatesBySession(sessionId);
    }
}
