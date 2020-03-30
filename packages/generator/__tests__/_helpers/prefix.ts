import { prefixes } from '@zazuko/rdf-vocabularies'
import namespace from '@rdfjs/namespace'

prefixes.ex = 'http://example.com/'
export const ex = namespace(prefixes.ex)
