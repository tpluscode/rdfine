import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface OccupationalExperienceRequirements<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  monthsOfExperience: number | undefined;
}

export function OccupationalExperienceRequirementsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OccupationalExperienceRequirements> & RdfResourceCore> & Base {
  @namespace(schema)
  class OccupationalExperienceRequirementsClass extends IntangibleMixin(Resource) implements Partial<OccupationalExperienceRequirements> {
    @property.literal({ type: Number })
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
