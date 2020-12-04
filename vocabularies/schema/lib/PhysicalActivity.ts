import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LifestyleModificationMixin } from './LifestyleModification';

export interface PhysicalActivity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LifestyleModification<D>, RdfResource<D> {
  associatedAnatomy: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | Schema.SuperficialAnatomy<D> | undefined;
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
  epidemiology: string | undefined;
  pathophysiology: string | undefined;
}

export function PhysicalActivityMixin<Base extends Constructor>(Resource: Base): Constructor<PhysicalActivity> & Base {
  @namespace(schema)
  class PhysicalActivityClass extends LifestyleModificationMixin(Resource) implements PhysicalActivity {
    @property.resource()
    associatedAnatomy: Schema.AnatomicalStructure | Schema.AnatomicalSystem | Schema.SuperficialAnatomy | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.literal()
    epidemiology: string | undefined;
    @property.literal()
    pathophysiology: string | undefined;
  }
  return PhysicalActivityClass
}

class PhysicalActivityImpl extends PhysicalActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhysicalActivity>) {
    super(arg, init)
    this.types.add(schema.PhysicalActivity)
  }

  static readonly __mixins: Mixin[] = [PhysicalActivityMixin, LifestyleModificationMixin];
}
PhysicalActivityMixin.appliesTo = schema.PhysicalActivity
PhysicalActivityMixin.Class = PhysicalActivityImpl
