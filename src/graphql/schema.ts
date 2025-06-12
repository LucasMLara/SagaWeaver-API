import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar DateTime

  type Narrator {
    id: ID!
    name: String!
    email: String!
    sessions: [Session!]!
  }

  type Session {
    id: ID!
    name: String!
    sessionDate: DateTime!
    durationInMin: Int!
    notes: String
    aiSummary: String
    narrator: Narrator!
    plots: [PlotSuggestion!]!
    encounters: [EncounterTemplate!]!
  }

  type PlotSuggestion {
    id: ID!
    summary: String!
    fullPlot: String!
    isApproved: Boolean!
  }

  type EncounterTemplate {
    id: ID!
    title: String!
    description: String!
    difficulty: String!
  }

  type Campaign {
    id: ID!
    name: String!
    narrator: Narrator!
    createdAt: DateTime!
  }

  type Query {
    hello: String
    narrators: [Narrator!]!
    sessionsByNarrator(narratorId: ID!): [Session!]!
    campaignsByNarrator(narratorId: ID!): [Campaign!]!
  }

  type Mutation {
    createNarrator(name: String!, email: String!): Narrator!
    createSession(
      name: String!
      sessionDate: DateTime!
      durationInMin: Int!
      notes: String
      narratorId: ID!
    ): Session!
    createPlotSuggestion(
      summary: String!
      fullPlot: String!
      sessionId: ID!
    ): PlotSuggestion!
    createEncounterTemplate(
      title: String!
      description: String!
      difficulty: String!
      sessionId: ID!
    ): EncounterTemplate!
    createCampaign(
      name: String!
      narratorId: ID!
    ): Campaign!
  }
`;
