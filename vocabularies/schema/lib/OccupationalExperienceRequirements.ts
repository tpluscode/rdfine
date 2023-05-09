import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface OccupationalExperienceRequirements<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  monthsOfExperience: number | undefined;
}

export function OccupationalExperienceRequirementsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OccupationalExperienceRequirements> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OccupationalExperienceRequirementsClass extends IntangibleMixin(Resource) implements Partial<OccupationalExperienceRequirements> {
    @rdfine.property.literal({ type: Number })
    monthsOfExperience: number | undefined;
  }
  return OccupationalExperienceRequirementsClass
}

class OccupationalExperienceRequirementsImpl extends OccupationalExperienceRequirementsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OccupationalExperienceRequirements>) {
    super(arg, init)
    this.types.add(schema.OccupationalExperienceRequirements)
  }

  static readonly __mixins: Mixin[] = [OccupationalExperienceRequirementsMixin, IntangibleMixin];
}
OccupationalExperienceRequirementsMixin.appliesTo = schema.OccupationalExperienceRequirements
OccupationalExperienceRequirementsMixin.Class = OccupationalExperienceRequirementsImpl

export const fromPointer = createFactory<OccupationalExperienceRequirements>([IntangibleMixin, OccupationalExperienceRequirementsMixin], { types: [schema.OccupationalExperienceRequirements] });
