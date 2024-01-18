import { RdfineFactory } from '@tpluscode/rdfine'
import ZazukoEnv from '@zazuko/env/Environment.js'
import baseEnv from '@zazuko/env'

export default new ZazukoEnv([RdfineFactory], { parent: baseEnv })
