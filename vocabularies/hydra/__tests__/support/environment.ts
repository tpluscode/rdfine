import { HydraFactory } from '../../Factory.js'
import Environment from '@zazuko/env/Environment';
import parent from '@rdfine/env';

export default new Environment([HydraFactory], { parent })
