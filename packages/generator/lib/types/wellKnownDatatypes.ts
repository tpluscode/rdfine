export type DatatypeName = 'boolean' | 'string' | 'number' | 'Date' | 'DateTime' | 'Time'

export const wellKnownDatatypes: Record<string, DatatypeName> = {
  'xsd:boolean': 'boolean',
  'xsd:decimal': 'number',
  'xsd:int': 'number',
  'xsd:integer': 'number',
  'xsd:nonNegativeInteger': 'number',
  'xsd:negativeInteger': 'number',
  'xsd:positiveInteger': 'number',
  'xsd:anyURI': 'string',
  'xsd:date': 'Date',
  'xsd:time': 'Time',
  'xsd:dateTime': 'DateTime',
  'xsd:string': 'string',
  'schema:Boolean': 'boolean',
  'schema:Float': 'number',
  'schema:Number': 'number',
  'schema:Integer': 'number',
  'schema:Date': 'Date',
  'schema:Time': 'Time',
  'schema:DateTime': 'DateTime',
  'schema:Text': 'string',
}
