import CypherLexer from './cypher-parser/CypherLexer.js';
import CypherParser from './cypher-parser/CypherParser.js';
import {CommonTokenStream, CharStreams} from './dist/antlr4.node.mjs';

const query = `
CREATE (TheMatrix:Movie) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix)  UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix) UNION
CREATE (Keanu:Person) UNION
CREATE (Carrie:Person) UNION
CREATE (Laurence:Person) UNION
CREATE (Hugo:Person) UNION
CREATE (LillyW:Person) UNION
CREATE (LanaW:Person) UNION
CREATE (JoelS:Person) UNION
CREATE
(Keanu)-[:ACTED_IN]->(TheMatrix),
(Carrie)-[:ACTED_IN]->(TheMatrix),
(Laurence)-[:ACTED_IN]->(TheMatrix),
(Hugo)-[:ACTED_IN]->(TheMatrix),
(LillyW)-[:DIRECTED]->(TheMatrix),
(LanaW)-[:DIRECTED]->(TheMatrix),
(JoelS)-[:PRODUCED]->(TheMatrix) UNION

CREATE (Emil:Person) UNION
CREATE (Emil)-[:ACTED_IN]->(TheMatrix)
`;

const numExecutions = 30

const startTime = performance.now();

Array.from({ length: 30 }).forEach((t) => {
  const inputStream = CharStreams.fromString(query);
  const lexer = new CypherLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new CypherParser(tokenStream);
  parser.removeErrorListeners();
  parser.query();
})

const endTime = performance.now();

console.log('Average time parsing: ', (endTime - startTime) / numExecutions)
